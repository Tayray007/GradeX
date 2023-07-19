import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { mockCourseUnits } from "../../data/mockData";

const QuestionPage = () => {
  const [selectedUnit, setSelectedUnit] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [answer, setAnswer] = useState("");
  const [grade, setGrade] = useState("");
  const [comment, setComment] = useState("");

  const handleUnitChange = (event) => {
    setSelectedUnit(event.target.value);
    setSelectedTopic("");
    setCurrentQuestion(null);
    setAnswer("");
    setGrade("");
    setComment("");
  };

  const handleTopicChange = (event) => {
    setSelectedTopic(event.target.value);
    setCurrentQuestion(null);
    setAnswer("");
    setGrade("");
    setComment("");
  };

  const handleNextQuestion = () => {
    const selectedCourseUnit = mockCourseUnits.find(
      (unit) => unit.id === selectedUnit
    );

    if (selectedCourseUnit) {
      const selectedCourseTopic = selectedCourseUnit.topics.find(
        (topic) => topic.id === selectedTopic
      );

      if (selectedCourseTopic && selectedCourseTopic.questions.length > 0) {
        const randomIndex = Math.floor(
          Math.random() * selectedCourseTopic.questions.length
        );
        const nextQuestion = selectedCourseTopic.questions[randomIndex];
        setCurrentQuestion(nextQuestion);
        setAnswer("");
        setGrade("");
        setComment("");
      }
    }
  };

  const handleSubmitAnswer = () => {
    if (currentQuestion && answer.trim() !== "") {
      if (answer.trim().toLowerCase() === currentQuestion.correctAnswer.toLowerCase()) {
        setGrade("Correct");
        const selectedCourseUnit = mockCourseUnits.find(
          (unit) => unit.id === selectedUnit
        );
        if (selectedCourseUnit) {
          const selectedCourseTopic = selectedCourseUnit.topics.find(
            (topic) => topic.id === selectedTopic
          );
          if (selectedCourseTopic) {
            const commentIndex = Math.floor(
              Math.random() * selectedCourseTopic.comments.length
            );
            const selectedComment = selectedCourseTopic.comments[commentIndex];
            setComment(selectedComment.content);
          }
        }
      } else {
        setGrade("Incorrect");
        setComment("");
      }
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      flexDirection="column"
    >
      {/* Course Unit and Topic Selection */}
      <Box mb="20px">
        <Typography variant="h5">Select Course Unit:</Typography>
        <select value={selectedUnit} onChange={handleUnitChange}>
          <option value="">Select Unit</option>
          {mockCourseUnits.map((unit) => (
            <option key={unit.id} value={unit.id}>
              {unit.name}
            </option>
          ))}
        </select>
      </Box>

      {selectedUnit && (
        <Box mb="20px">
          <Typography variant="h5">Select Topic:</Typography>
          <select value={selectedTopic} onChange={handleTopicChange}>
            <option value="">Select Topic</option>
            {mockCourseUnits
              .find((unit) => unit.id === selectedUnit)
              .topics.map((topic) => (
                <option key={topic.id} value={topic.id}>
                  {topic.name}
                </option>
              ))}
          </select>
        </Box>
      )}

      {/* Question Display */}
      {currentQuestion && (
        <Box mb="20px" textAlign="center">
          <Typography variant="h6">Question:</Typography>
          <Typography>{currentQuestion.content}</Typography>
        </Box>
      )}

      {/* Answer Input */}
      {currentQuestion && (
        <Box mb="20px" textAlign="center">
          <Typography variant="h6">Your Answer:</Typography>
          <input
            type="text"
            value={answer}
            onChange={(event) => setAnswer(event.target.value)}
          />
        </Box>
      )}

      {/* Grade and Comment */}
      {grade && (
        <Box mb="20px" textAlign="center">
          <Typography variant="h6">Grade: {grade}</Typography>
          {comment && <Typography>Comment: {comment}</Typography>}
        </Box>
      )}

      {/* Submit Button */}
      {currentQuestion && (
        <Box textAlign="center">
          <Button variant="contained" onClick={handleSubmitAnswer}>
            Submit Answer
          </Button>
        </Box>
      )}

      {/* Next Question Button */}
      {selectedTopic && !currentQuestion && (
        <Box mt="20px" textAlign="center">
          <Button variant="contained" onClick={handleNextQuestion}>
            Next Question
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default QuestionPage;
