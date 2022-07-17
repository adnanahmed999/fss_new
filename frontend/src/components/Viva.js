import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import allInterviewCandidates from "./InterviewData";
import { Button } from "@material-ui/core";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import LinkIcon from "@material-ui/icons/Link";
import { Link } from "react-router-dom";
import Header from "./Header"
import {
    FacebookShareButton,
    WhatsappShareButton,
    LinkedinShareButton,
    WhatsappIcon,
    FacebookIcon,
    LinkedinIcon,
} from "react-share";
const customStyles = {
    rows: {
        style: {
            minHeight: "72px", // override the row height
            // backgroundColor: "#FCD2D1",
        },
    },
    headCells: {
        style: {
            paddingLeft: "8px", // override the cell padding for head cells
            paddingRight: "8px",
            // backgroundColor: "#FCD2D1",
        },
    },
    cells: {
        style: {
            paddingLeft: "8px", // override the cell padding for data cells
            paddingRight: "8px",
        },
    },
};

const Viva = () => {
    const [data, setData] = useState([]);
    const [filteredData, setfilteredData] = useState([]);
    const [textVal, setTextVal] = useState("");

    useEffect(() => {
        setData(allInterviewCandidates);
        setfilteredData(allInterviewCandidates);
    }, [allInterviewCandidates]);

    const onChange = (value) => {
        const searchVal = value.toLowerCase();
        let regex = new RegExp(searchVal, "g");
        const name = data.filter((each) => {
            if (each.name) {
                return each.name.toLowerCase().match(regex);
            }
        });
        setfilteredData([...new Set([...name])]);
    };

    const columns = [
        {
            name: "Name",
            selector: "name",
            sortable: true,
        },
        // LinkIcon
        {
            name: "Points",
            selector: "points",
            sortable: true,
        },
        {
            name: "Phone",
            selector: "phonenumber",
            sortable: true,
        },
        {
            name: "Resume",
            selector: (row) => (
                <Button
                    onClick={() => {
                        window.open(`${row.resume}`);
                    }}
                    style={{ backgroundColor: "#FCD2D1" }}
                >
                    <LinkIcon />
                </Button>
            ),
            sortable: true,
        },
        {
            name: "Send MSG",
            selector: (row) => (
                <WhatsappShareButton
                    title="Your interview is scheduled for 20th March, 2022. "
                    url="Please join the the interview using below meet: "
                    separator={" : "}
                >
                    <WhatsappIcon size={40} round={true} />
                </WhatsappShareButton>
                // <Button style={{ backgroundColor: "#FCD2D1" }}>
                //   <WhatsAppIcon />
                // </Button>
            ),
        },
        {
            name: "Create Meet",
            selector: (row) => (
                <Button
                    onClick={() => {
                        window.open(`https://meet.new/`);
                    }}
                    style={{ backgroundColor: "#FCD2D1" }}
                >
                    <VideoCallIcon />
                </Button>
            ),
        },
    ];

    return (
        <>
            <Header />
            <div className="listTable">
                <form onSubmit={(e) => e.preventDefault()}>
                    <TextField
                        style={{ backgroundColor: "white" }}
                        id="outlined-search"
                        placeholder="Search by name/e-mail"
                        fullWidth
                        size="small"
                        type="search"
                        variant="outlined"
                        value={textVal}
                        onChange={(e) => {
                            setTextVal(e.target.value);
                            onChange(e.target.value);
                        }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchOutlinedIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                </form>
                <br />
                <DataTable
                    style={{ marginLeft: "30px", marginTop: "20px" }}
                    title={<h1>Viva</h1>}
                    customStyles={customStyles}
                    columns={columns}
                    data={filteredData}
                    highlightOnHover={true}
                    pointerOnHover={true}
                    pagination={true}
                    paginationPerPage={8}
                />
            </div>
        </>
    );
};

export default Viva;