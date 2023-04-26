
import React, { useState } from "react";
import "../Landing.css"; // import CSS styles
import {
  Stack,
  Typography,
  Fab,
  Box,
  Container,
  InputAdornment,
  TextField,
  Divider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
// array of all universities
import { useEffect } from "react";
import { Navbar } from "./Navbar";
import { useNavigate } from "react-router-dom";

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Container>
      <TextField
        id="search"
        type="search"
        label="Search"
        value={searchTerm}
        onChange={handleChange}
        sx={{ width: 500 }}
        margin="normal"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Container>
  );
}

export function UniversityCard  ({ university }) {
let navigate = useNavigate();


  const handleClick = (name) => () => {
    navigate("/Faculties",
    {
      state: { name: name },
    });
  };

  return (
  <>
    <Stack
      className="university-card"
      direction="row"
      marginLeft={40}
      marginTop={10}
      alignItems={"center"}
    >
      <Box
        display="flex"
        height="100%"
        width="25%"
        alignItems="center"
        justifyContent="center"
        justifyItems="center"
      >
        <img className="university-image" src={university.Image} alt={"logo"} />
      </Box>
      <Divider orientation="vertical" />
      <Box
        display="flex"
        width="65%"
        alignItems="center"
        justifyContent="center"
        marginRight="5%"
        marginLeft="%"
        overflow="hidden"
      >
        <Typography fontSize={20} textAlign="center">
          {university.name}
        </Typography>
      </Box>
      <Box
        display="flex"
        height="100%"
        width="10%"
        alignItems="center"
        justifyContent="center"
      >
        <Fab color="info" size="medium" onClick={handleClick(university.name)}>
            <ArrowForwardIosIcon />
        </Fab>
      </Box>
    </Stack>
  </>
  );
  };

export const UniversityDetails = () => {
  const [allUni, setAllUni] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/getUniversities", {
          method: "GET",
        });
        console.log(response);
        const json = await response.json();
        setAllUni(json);
        console.log(json);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <Navbar />
      <Stack marginLeft={65} direction="row" alignItems="center" spacing={5}>
        <item>
          <SearchBar />
        </item>
        {/* <item>

                    <Fab size="small" color="secondary" aria-label="add" onClick={() => alert('Hello')}>
                        <FilterListIcon />
                    </Fab>
                </item> */}
      </Stack>
      {allUni.map((university) => (
        <UniversityCard key={university.id} university={university} />
      ))}
    </div>
  );
};

export default UniversityDetails;
