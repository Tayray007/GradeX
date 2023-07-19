import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataCourseUnit } from "../../data/mockData";
import Header from "../../components/Header";

const CourseUnit = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "RID" },
    {
      field: "course",
      headerName: "COURSE",
      flex: 1,
    },
    {
      field: "name",
      headerName: "Resource Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "type",
      headerName: "Resource Type",
      flex: 1,
    },
    
    {
      field: "link",
      headerName: "LINK",
      flex: 1,
    },
    {
      field: "date",
      headerName: "Last Revised",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header title="COURSE RESOURSES" subtitle="List of Course Resources" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockDataCourseUnit} columns={columns} />
      </Box>
    </Box>
  );
};

export default CourseUnit;