import React, {
    Component
} from "react";
// import * as firebase from "firebase";
var firebase = require("firebase");
var uuid = require("uuid");

var config = {
    apiKey: "AIzaSyC1VsC_aGyDcU0_1UAx8zzEo7f6OCe6RUg",
    authDomain: "kuja-kujans-survey-ecdb7.firebaseapp.com",
    databaseURL: "https://kuja-kujans-survey-ecdb7.firebaseio.com",
    projectId: "kuja-kujans-survey-ecdb7",
    storageBucket: "kuja-kujans-survey-ecdb7.appspot.com",
    messagingSenderId: "840254170866",
};
firebase.initializeApp(config);

class Usurvey extends Component {
    nameSubmit(event) {
        var memberName = this.refs.name.value;
        this.setState({
                memberName: memberName,
            },
            function() {
                console.log(this.state);
            }
        );
    }
    answerSelected(event) {
        var answers = this.state.answers;
        if (event.target.name === "answer1") {
            answers.answer1 = event.target.value;
        } else if (event.target.name === "answer2") {
            answers.answer2 = event.target.value;
        } else if (event.target.name === "answer3") {
            answers.answer3 = event.target.value;
        }

        this.setState({
                answers: answers,
            },
            function() {
                console.log(this.state);
            }
        );
    }

    questionSubmit() {
        firebase
            .database()
            .ref("uSurvey/" + this.state.uid)
            .set({
                memberName: this.state.memberName,
                answers: this.state.answers,
            });
        this.setState({
            isSubmitted: true,
        });
    }

    constructor(props) {
        super(props);

        this.state = {
            uid: uuid.v1(),
            memberName: "",
            answers: {
                answer1: "",
                answer2: "",
                answer3: "",
            },
            isSubmitted: false,
        };
        this.nameSubmit = this.nameSubmit.bind(this);
        this.answerSelected = this.answerSelected.bind(this);
        this.questionSubmit = this.questionSubmit.bind(this);
    }

    render() {
        var memberName;
        var questions;

        if (this.state.memberName === "" && this.state.isSubmitted === false) {
            memberName = ( <
                div >
                <
                h1 > Hey Kuja kujan, please
                let us know your name: < /h1>{" "} <
                form onSubmit = {
                    this.nameSubmit
                } >
                <
                input className = "namy"
                type = "text"
                placeholder = "Enter your name"
                ref = "name" /
                >
                <
                /form>{" "} < /
                div >
            );
            questions = "";
        } else if (
            this.state.memberName !== "" &&
            this.state.isSubmitted === false
        ) {
            memberName = < h1 > Welcome to U - Survey, {
                this.state.memberName
            } < /h1>;
            questions = ( <
                div >
                <
                h2 > Here are some questions: < /h2>{" "} <
                form onSubmit = {
                    this.questionSubmit
                } >
                <
                div className = "card" >
                <
                label > In Which location are you ? : < /label> <br / >
                <
                input type = "radio"
                name = "answer1"
                value = "Nakivale "
                onChange = {
                    this.answerSelected
                }
                />
                Nakivale {
                    " "
                } <
                input type = "radio"
                name = "answer1"
                value = "Gihembe"
                onChange = {
                    this.answerSelected
                }
                />
                Gihembe {
                    " "
                } <
                input type = "radio"
                name = "answer1"
                value = "Mahama"
                onChange = {
                    this.answerSelected
                }
                />
                Mahama {
                    " "
                } <
                /div>{" "}


                <
                div className = "card" >
                <
                label > you are a: < /label> <br / >
                <
                input type = "radio"
                name = "answer2"
                value = "Kuja Kujan"
                onChange = {
                    this.answerSelected
                }
                />
                Kuja Kujan {
                    " "
                }

                <
                input type = "radio"
                name = "answer2"
                value = "Kuja Kujan"
                onChange = {
                    this.answerSelected
                }
                />
                Service team member {
                    " "
                } <
                input type = "radio"
                name = "answer2"
                value = " Community resident"
                onChange = {
                    this.answerSelected
                }
                />
                Community resident {
                    " "
                } <
                /div>{" "} <
                div className = "card" >
                <
                label > Is Kuja Kuja making impact in your area ? < /label> <br / >
                <
                input type = "radio"
                name = "answer3"
                value = "yes"
                onChange = {
                    this.answerSelected
                }
                />
                yes {
                    " "
                } <
                input type = "radio"
                name = "answer3"
                value = "no"
                onChange = {
                    this.answerSelected
                }
                />
                no {
                    " "
                } <
                input type = "radio"
                name = "answer3"
                value = "maybe"
                onChange = {
                    this.answerSelected
                }
                />
                maybe {
                    " "
                } <
                /div>{" "} <
                input className = "feedback-button"
                type = "submit"
                value = "submit" / >
                <
                /form>{" "} < /
                div >
            );
        } else if (this.state.isSubmitted === true) {
            memberName = ( <
                h1 > {
                    " "
                }
                Thanks, {
                    this.state.memberName
                } < br / >
                Your feedback has successfully been submitted.. {
                    " "
                } <
                /h1>
            );
        }

        return ( <
            div > {
                " "
            } {
                memberName
            }
            -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --{
                questions
            } {
                " "
            } <
            /div>
        );
    }
}

export default Usurvey;