import React, { useEffect, useState } from "react";
import ReactFlow from 'react-flow-renderer';
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import cover from "../assets/cover.jpg";
import liquidCheese from "../assets/liquid-cheese.svg";
import student from "../assets/student-removebg.png"
import sisu from "../assets/sisu.png"
import { Link } from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
    heroContent: {
        // backgroundColor: "#FEFFFF",
        padding: theme.spacing(10, 0, 4),
        backgroundColor: "#ffaa00",
        backgroundImage: `url(${liquidCheese})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
    },
    header: {
        height: "85vh",
        backgroundSize: "cover",
        backgroundPosition: "65% 50%",
        // backgroundImage: `url(${cover})`,
        // backgroundSize: "cover",
        // backgroundPosition: "65% 50%",
        // backgroundImage: `url(${liquidCheese})`,
        // backgroundColor: "#ffaa00"
    },
    heroDesign: {
        // border: "2px solid red",
        backgroundColor: "#af0d24",
        width: "150px",
        height: "150px",
        // marginTop: "-10%",
        // position: "absolute",
        "&:before": {
            content: "''",
            display: "block",
            width: "170px",
            height: "150px",
            // backgroundColor: "black",
            background: `linear-gradient(90deg, white 5px, transparent 1%) center, 
                  linear-gradient(white 5px, transparent 1%) center, grey`,
            backgroundSize: "6px 6px",
            marginTop: "20px",
            position: "absolute",
            zIndex: "-1"
        },
    },
    heroTextContainer: {
        // margin: "0 10% 0 10%",
        color: "black",
        padding: "0 10% !important",
        position: "relative",
        zIndex: "1",
    },
    heroText: {
        // borderLeft: "3px solid #dfdfdf",
        padding: theme.spacing(6),
        // "& h3": {
        //   color: "grey",
        //   textTransform: "lowercase",
        //   fontWeight: "bold",
        //   // letterSpacing: "1px",
        // },
    },
    heroImageItem: {
        display: "grid",
        placeItems: "center",
    },
    heroImageDiv: {
        width: "30vw",
        height: "30vw",
        border: "2px solid black",
        borderRadius: "50%",
        overflow: "hidden",
        zIndex: 1
    },
    heroImage: {
        width: "60vw",
        marginLeft: "-30vw",
        marginTop: "10%",
    },
    heroText: {
        // margin: "0 10% 0 10%",
        color: "black",
    },
    halfCircle: {
        height: "75vh",
        width: "75vh",
        border: "2px solid black",
        borderRadius: "50%",
        position: "absolute",
        marginLeft: "calc(100vw - 37.5vh)",
        marginTop: "5vh",
    },
    cardGrid: {
        backgroundColor: "#FEFFFF",
        // paddingBottom: theme.spacing(8),
        padding: theme.spacing(8, 16),
        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(4),
        },
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(2),
        },
        alignItems: "center",
    },
    heading: {
        width: "100%",
        fontSize: 30,
        fontWeight: "500",
        // textDecoration: "underline",
    },
    card: {
        backgroundColor: "white",
        height: "100%",
        boxShadow: "5px 5px 5px 5px lightgrey",
        display: "flex",
        flexDirection: "column",
        padding: "4%",
        "&:hover": {
            boxShadow: "0 3px 12px darkgrey",
        },
    },
    cardMedia: {
        margin: "2%",
        paddingTop: "56.25%",
        borderRadius: "0.25rem",
    },
    cardContent: {
        flexGrow: 1,
        textAlign: "center",
    },
    carousel: {
        width: "100%",
    },
    carouselItemContainer: {
        display: "flex",
        gap: "5%",
        paddingTop: "1rem",
    },
    carouselItem: {
        backgroundColor: "white",
        height: "100%",
        boxShadow: "0 3px 10px lightgrey",
        display: "flex",
        flexDirection: "column",
        padding: "4%",
        "&:hover": {
            boxShadow: "0 3px 12px darkgrey",
        },
        width: "250px"
    }
}));

const ServiceCard = ({ link, title, img, clr }) => {
    const classes = useStyles();
    return (
        <Grid style={{}} item xs={12} sm={12} md={4} lg={4}>
            <Link to={`/${link}`}

                style={{ textDecoration: "none" }}>
                <Card style={{ width: "100%", borderRadius: "30px", boxShadow: "5px 5px 25px 5px", padding: "10px", margin: "20px", backgroundColor: "#fc8b19" }}>
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h" component="h2" style={{ color: "white" }}>
                            {title}
                        </Typography>

                    </CardContent>
                    <CardMedia
                        // className={classes.cardMedia}
                        style={{
                            // width: "10%",
                            margin: "2%",
                            paddingTop: "100%",
                            borderRadius: "0.25rem"
                        }}
                        // style={{ width: "50%", height: "50%" }}
                        // image={feature1}
                        // image="https://jana-sa.com/image/about-us/e762bf4b8cbc5ee9e70e7e087f99e5c3.gif"
                        image={img}
                        title="Image title"
                    />

                </Card>
            </Link>
        </Grid>

    )
}

export default ServiceCard