import {
    useMediaQuery,
    useTheme,
  } from "@mui/material";
import { Navbar } from '../pages/Navbar';
import PersistentDrawerLeft from '../pages/navbar2'

export default function Header () {

    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
            { isMatch ? (<PersistentDrawerLeft/>) : <Navbar/>}
        </>
    );
}