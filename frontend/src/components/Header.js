import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CastForEducationIcon from "@material-ui/icons/CastForEducation";
import HomeIcon from "@material-ui/icons/Home";
import IconButton from "@material-ui/core/IconButton";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import PermPhoneMsgIcon from "@material-ui/icons/PermPhoneMsg";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CodeIcon from "@mui/icons-material/Code";
import MicIcon from "@mui/icons-material/Mic";
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import ChatIcon from '@mui/icons-material/Chat';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import QuizIcon from '@mui/icons-material/Quiz';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import BookIcon from "@material-ui/icons/Book";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import ExploreIcon from "@material-ui/icons/Explore";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import { InputLabel } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";

// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom"
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const open = Boolean(anchorEl);
  const [openslider, setOpenslider] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpenslider(true);
  };

  const handleDrawerClose = () => {
    setOpenslider(false);
  };

  // const handleMenu = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  // let history = useHistory();
  const navigate = useNavigate()

  const handleLogout = () => {
    if (userInfo) {
      // history.push("/");
      navigate("/")
      dispatch(logout());
    }
  };
  const handleChange = (event) => {
    // setAge(event.target.value);
    console.log("change language");
  };

  return (
    <div>
      <AppBar
        style={{ background: "#F3FAFF" }}
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: openslider,
        })}
      >
        <Toolbar>
          <IconButton
            style={{ color: "black" }}
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, openslider && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title} noWrap>
            <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
              {`<E-Kaksha />`}
            </Link>
          </Typography>
          🌐
          <Select
            style={{ marginRight: "20px" }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
            onChange={handleChange}
          >
            <MenuItem
              value={10}
              onClick={() => {
                navigate("/");
              }}
            >
              English
            </MenuItem>
            <MenuItem
              value={20}
              onClick={() => {
                navigate("/hin");
              }}
            >
              हिंदी
            </MenuItem>
          </Select>
          {userInfo ? (
            <>
              {/* <p style={{ color: "black" }}>Welcome,</p> */}
              {/* <h1 style={{ color: "black", marginRight: "10px", marginLeft: "3px" }}> {userInfo.data.name}</h1> */}
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={handleLogout}
              >
                Logout
              </Button>
            </>
          ) : (
            <div>
              {/* <Link
                to={"/signup"}
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button variant="outlined" color="primary">
                  Sign Up
                </Button>
              </Link> */}
              &nbsp;
              <Link
                to={"/signin"}
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button variant="contained" color="primary">
                  Log In
                </Button>
              </Link>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={openslider}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <ListItem button key="E-kaksha">

            <ListItemText primary={<h4>{`<E-Kaksha />`}</h4>} />
          </ListItem>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />

        {userInfo ? (
          <List>
            <ListItem button key="Nameofuser">
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary={`Welcome, ${userInfo.data.name}`} />
            </ListItem>
          </List>
        ) : ("")}

        <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
          <List>
            <ListItem button key="Home">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </List>
        </Link>
        {userInfo ? (
          userInfo.data.isInstructor === true ? (
            <>
              <Link
                to={`/instructorcourses/${userInfo.data._id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <List>
                  <ListItem button disabled={userInfo === null} key="My Courses">
                    <ListItemIcon>
                      <CastForEducationIcon />
                    </ListItemIcon>
                    <ListItemText primary="My Courses" />
                  </ListItem>
                </List>
              </Link>
              <Link
                to={`/viva`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <List>
                  <ListItem button disabled={userInfo === null} key="Viva">
                    <ListItemIcon>
                      <QuizIcon />
                    </ListItemIcon>
                    <ListItemText primary="Viva" />
                  </ListItem>
                </List>
              </Link></>
          ) : (
            <Link
              to={`/mycourses/${userInfo.data._id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <List>
                <ListItem button disabled={userInfo === null} key="My Courses">
                  <ListItemIcon>
                    <CastForEducationIcon />
                  </ListItemIcon>
                  <ListItemText primary="My Courses" />
                </ListItem>
              </List>
            </Link>
          )
        ) : (
          <List>
            <ListItem button disabled={userInfo === null} key="My Courses">
              <ListItemIcon>
                <CastForEducationIcon />
              </ListItemIcon>
              <ListItemText primary="My Courses" />
            </ListItem>
          </List>
        )}
        {userInfo ? (
          userInfo.data.isInstructor === true ? (
            <Link
              to={`/instructorAssignments/${userInfo.data._id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <List>
                <ListItem
                  button
                  disabled={userInfo === null}
                  key="My Assignments"
                >
                  <ListItemIcon>
                    <CastForEducationIcon />
                  </ListItemIcon>
                  <ListItemText primary="My Assignments" />
                </ListItem>
              </List>
            </Link>
          ) : (
            <Link
              to={`/assignments/${userInfo.data._id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <List>
                <ListItem
                  button
                  disabled={userInfo === null}
                  key="My Assignments"
                >
                  <ListItemIcon>
                    <CastForEducationIcon />
                  </ListItemIcon>
                  <ListItemText primary="My Assignments" />
                </ListItem>
              </List>
            </Link>
          )
        ) : (
          <List>
            <ListItem button disabled={userInfo === null} key="My Assignments">
              <ListItemIcon>
                <CastForEducationIcon />
              </ListItemIcon>
              <ListItemText primary="My Assignments" />
            </ListItem>
          </List>
        )}
        {userInfo ? (
          userInfo.data.isInstructor === true ? (
            <Link
              to={`/myProfile`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <List>
                <ListItem button disabled={userInfo === null} key="My Profile">
                  <ListItemIcon>
                    <AccountCircleIcon />
                  </ListItemIcon>
                  <ListItemText primary="My Profile" />
                </ListItem>
              </List>
            </Link>
          ) : (
            <Link
              to={`/myProfile`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <List>
                <ListItem button disabled={userInfo === null} key="My Profile">
                  <ListItemIcon>
                    <CastForEducationIcon />
                  </ListItemIcon>
                  <ListItemText primary="My Profile" />
                </ListItem>
              </List>
            </Link>
          )
        ) : (
          <List>
            <ListItem button disabled={userInfo === null} key="My Profile">
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary="My Profile" />
            </ListItem>
          </List>
        )}

        <Link
          to={"/codeEditor"}
          style={{ textDecoration: "none", color: "black" }}
        >
          <List>
            <ListItem button key="Code Editor">
              <ListItemIcon>
                <DeveloperModeIcon />
              </ListItemIcon>
              <ListItemText primary="Dev Playground" />
            </ListItem>
          </List>
        </Link>
        <Link
          to={"/codeCompiler"}
          style={{ textDecoration: "none", color: "black" }}
        >
          <List>
            <ListItem button key="Code Compiler">
              <ListItemIcon>
                <CodeIcon />
              </ListItemIcon>
              <ListItemText primary="Code Compiler" />
            </ListItem>
          </List>
        </Link>
        <Link
          to={"/courses"}
          style={{ textDecoration: "none", color: "black" }}
        >
          <List>
            <ListItem button key="Trainings">
              <ListItemIcon>
                <LaptopChromebookIcon />
              </ListItemIcon>
              <ListItemText primary="Trainings" />
            </ListItem>
          </List>
        </Link>
        <Link
          to={"/chat"}
          style={{ textDecoration: "none", color: "black" }}
        >
          <List>
            <ListItem button key="Chat">
              <ListItemIcon>
                <ChatIcon />
              </ListItemIcon>
              <ListItemText primary="Chat" />
            </ListItem>
          </List>
        </Link>
        <Link
          to={"/notes"}
          style={{ textDecoration: "none", color: "black" }}
        >
          <List>
            <ListItem button key="Notes">
              <ListItemIcon>
                <NoteAddIcon />
              </ListItemIcon>
              <ListItemText primary="Notes" />
            </ListItem>
          </List>
        </Link>
        <Link
          to={"/editProfileSpeech"}
          style={{ textDecoration: "none", color: "black" }}
        >
          <List>
            <ListItem button key="Speech Form filling">
              <ListItemIcon>
                <MicIcon />
              </ListItemIcon>
              <ListItemText primary="Speech Form filling" />
            </ListItem>
          </List>
        </Link>
        <Link
          to={"/contactForm"}
          style={{ textDecoration: "none", color: "black" }}
        >
          <List>
            <ListItem button key="Contact Us">
              <ListItemIcon>
                <PermPhoneMsgIcon />
              </ListItemIcon>
              <ListItemText primary="Contact Us" />
            </ListItem>
          </List>
        </Link>
           <Link
          to={"/careerForm"}
          style={{ textDecoration: "none", color: "black" }}
        >
          <List>
            <ListItem button key="Career Opportunities">
              <ListItemIcon>
                <BusinessCenterIcon />
              </ListItemIcon>
              <ListItemText primary="Career Opportunities" />
            </ListItem>
          </List>
        </Link>
        <Link
          to={"/leaderboard"}
          style={{ textDecoration: "none", color: "black" }}
        > 
          <List>
            <ListItem button key="Leaderboard">
              <ListItemIcon>
                <BusinessCenterIcon />
              </ListItemIcon>
              <ListItemText primary="Leaderboard" />
            </ListItem>
          </List>
        </Link>
        <Divider />
        <Divider />
      </Drawer>
    </div>
  );
};

export default Header;