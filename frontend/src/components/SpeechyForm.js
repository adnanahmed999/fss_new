import React, { useState, useEffect } from "react";
import { ArrowLeft } from "react-bootstrap-icons";
import { Link, useNavigate } from "react-router-dom";
// import FormControl from "../../UI/FormControl";
// import Button from "../../UI/Button";
// import useStore from "../../context/useStore";
// import useAuthHook from "../../hooks/useAuthHook"
import Button from '@material-ui/core/Button';
// import alanBtn from "@alan-ai/alan-sdk-web";
import Input from '@material-ui/core/Input';
// import { useSpeechContext } from '@speechly/react-client';
import { Grid, TextField, Typography } from "@material-ui/core";
import { useSpeechContext } from "@speechly/react-client";
import { PushToTalkButton, PushToTalkButtonContainer, ErrorPanel } from '@speechly/react-ui';
import formatDate from "./formatDate";
import Header from "./Header"

const SpeechyForm = () => {
    const { segment } = useSpeechContext();

    //   const { login } = useAuthHook();
    const [loginData, setLoginData] = useState({});
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        date: formatDate(new Date()),
        address: ""
    })
    const navigate = useNavigate()
    //   const { user } = useStore();
    useEffect(() => {
        if (segment) {
            if (segment.intent.intent === 'add_expense') {
                setFormData({ ...formData, type: 'Expense' });
            }
            // else if (segment.intent.intent === 'add_income') {
            //     setFormData({ ...formData, type: 'Income' });
            // } else if (segment.isFinal && segment.intent.intent === 'create_transaction') {
            //     return createTransaction();
            // } else if (segment.isFinal && segment.intent.intent === 'cancel_transaction') {
            //     return setFormData(initialState);
            // } 
            else if (segment.intent.intent === 'fill_form') {
                setFormData({ ...formData, name: "Raj", amount: 500, date: "" })
            }

            segment.entities.forEach((s) => {
                console.log(s.value);
                switch (s.type) {
                    case 'name':
                        setFormData({ ...formData, name: s.value });
                        break;
                    case 'amount':
                        setFormData({ ...formData, amount: s.value });
                        break;
                    case 'phone_number':
                        setFormData({ ...formData, phone: s.value });
                        break;
                    case 'email_of_person':
                        setFormData({ ...formData, email: s.value });
                        break;
                    case 'dob':
                        setFormData({ ...formData, date: s.value });
                        break;
                    case 'street_address':
                        setFormData({ ...formData, address: s.value });
                        break;
                    default:
                        break;
                    //   if (segment.isFinal && formData.amount && formData.category && formData.type && formData.date) {
                    //     createTransaction();
                    //   }
                }

            });

        }
    }, [segment]);

    const submitLogin = (e) => {
        e.preventDefault();
        navigate("/")
    };
    return (<>
        <Header />
        <div style={{ backgroundColor: "yellow" }} className="h-screen bg-red-800 flex items-center justify-center">
            {/* {user.id && path && <Navigate to={path} />} */}
            {/* {user.id && !path && <Navigate to="/" />} */}
            {/* <Typography align="center" variant="subtitle2" gutterBottom>
        {segment ? (
        <div className="segment">
          {segment.words.map((w) => w.value).join(" ")}
        </div>
      ) : null}
        </Typography> */}
            {/* {isSpeaking ? <BigTranscript /> : 'Start adding transactions'}  */}
            <br /><br /><br />
            <div style={{ paddingBottom: "40px" }} className="relative bg-white w-[25rem] mx-2 py-16 flex items-center justify-center rounded-xl sm:w-[27rem]">
                <Link to="/">
                    <ArrowLeft className="absolute top-4 left-11 text-2xl cursor-pointer text-gray-600 hover:text-gray-900" />
                </Link>
                <br /><br /><br />

                <form className="w-4/5 h-full" style={{ backgroundColor: "white", marginLeft: "100px", width: "50%", borderRadius: "30px", boxShadow: "5px 5px 25px 5px" }} onSubmit={submitLogin}>
                    <Typography align="center" variant="subtitle2" gutterBottom>
                        {segment ? (
                            <div className="segment">
                                {segment.words.map((w) => w.value).join(" ")}
                            </div>
                        ) : null}
                    </Typography>
                    {/* {isSpeaking ? <BigTranscript /> : 'Start adding transactions'}  */}

                    <h1 style={{ padding: "10px", textAlign: "center" }} className="text-4xl font-semibold mb-12">Edit Profile</h1>
                    <div style={{ marginLeft: "100px", padding: "20px", marginBottom: "40px" }} className="flex flex-col items-start gap-6 mb-12">

                        <Input
                            placeholder="Name"
                            type="text"
                            label="name"
                            icon="PERSON"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />


                        {/* <Input 
            placeholder="Amount"
            type="number"
              label="Amount"
              onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
              value={formData.amount}
              icon="PERSON" />


               <Input 
            placeholder="Date"
            type="date"
              label="Date"
              value={formData.date}
              icon="DATE"
              onChange={handleChange} /> */}


                        <Grid item xs={6}>
                            <TextField type="number" placeholder="Amount of Projects" value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value })} fullWidth />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField type="number" placeholder="Phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} fullWidth />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField fullWidth label="Address" type="text" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField fullWidth label="Date of birth" type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: formatDate(e.target.value) })} />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField type="email" label="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} fullWidth />
                        </Grid>
                        {/* <a
              href="#"
              className="relative text-gray-700 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:scale-x-0  after:bg-current hover:text-gray-800 hover:font-semibold transition-all duration-200 after:transition-all hover:after:scale-x-100"
            >
              Forgot password
            </a> */}
                    </div>
                    <Button color="primary" variant="contained" isPrimary={true} style={{ margin: "30px", marginLeft: "200px" }} isWidthFull={true} type="submit">
                        Edit Profile
                    </Button>

                    {/* <p className="text-center mt-5">
            Don't have an account yet?{" "}
            <Link
              to="/signup"
              className="text-primary-color-dark font-semibold"
            >
              Sign up
            </Link> 
          </p>*/}
                </form>
            </div>
            <PushToTalkButtonContainer>
                <PushToTalkButton />
                <ErrorPanel />
            </PushToTalkButtonContainer>
        </div>
    </>
    );
};

export default SpeechyForm;