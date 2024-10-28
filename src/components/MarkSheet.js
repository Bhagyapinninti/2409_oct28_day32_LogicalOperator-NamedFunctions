import React, { useRef } from "react";

let MarkSheet = () => {
  let telInputRef = useRef();
  let hinInputRef = useRef();
  let engInputRef = useRef();
  let matInputRef = useRef();
  let sciInputRef = useRef();
  let socInputRef = useRef();

  let resultLabelref = useRef();

  let FirstnameInputRef = useRef();
  let LastnameInputRef = useRef();

  let telSpanRef = useRef();
  let engSpanRef = useRef();
  let hinSpanRef = useRef();
  let matSpanRef = useRef();
  let sciSpanRef = useRef();
  let socSpanRef = useRef();

  let telOnFocus = () => {
    telInputRef.current.style.backgroundColor = "lightblue";
  };
  let telOnChange = () => {
    let marks = telInputRef.current.value;
    if (marks >= 0 && marks <= 100) {
      if (marks >= 35) {
        telSpanRef.current.innerHTML = "Pass";
        telSpanRef.current.style.backgroundColor = "green";
      } else {
        telSpanRef.current.innerHTML = "Fail";
        telSpanRef.current.style.backgroundColor = "red";
      }
    } else {
      telSpanRef.current.innerHTML = "Invalid";
      telSpanRef.current.style.backgroundColor = "orange";
    }
  };
  let telOnBlur = () => {
    telSpanRef.current.style.backgroundColor = "  ";
  };

  let engOnFocus = () => {
    engInputRef.current.style.backgroundColor = "lightblue";
  };
  let engOnChange = () => {
    let marks = engInputRef.current.value;
    if (marks >= 0 && marks <= 100) {
      if (marks >= 35) {
        engSpanRef.current.innerHTML = "Pass";
        engSpanRef.current.style.backgroundColor = "green";
      } else {
        engSpanRef.current.innerHTML = "Fail";
        engSpanRef.current.style.backgroundColor = "red";
      }
    } else {
      engSpanRef.current.innerHTML = "Invalid";
      engSpanRef.current.style.backgroundColor = "orange";
    }
  };
  let engOnBlur = () => {
    engSpanRef.current.style.backgroundColor = "  ";
  };

  let hinOnFocus = () => {
    hinInputRef.current.style.backgroundColor = "lightblue";
  };
  let hinOnChange = () => {
    let marks = hinInputRef.current.value;
    if (marks >= 0 && marks <= 100) {
      if (marks >= 35) {
        hinSpanRef.current.innerHTML = "Pass";
        hinSpanRef.current.style.backgroundColor = "green";
      } else {
        hinSpanRef.current.innerHTML = "Fail";
        hinSpanRef.current.style.backgroundColor = "red";
      }
    } else {
      hinSpanRef.current.innerHTML = "Invalid";
      hinSpanRef.current.style.backgroundColor = "orange";
    }
  };
  let hinOnBlur = () => {
    hinSpanRef.current.style.backgroundColor = "  ";
  };

  let matOnFocus = () => {
    matInputRef.current.style.backgroundColor = "lightblue";
  };
  let matOnChange = () => {
    let marks = matInputRef.current.value;
    if (marks >= 0 && marks <= 100) {
      if (marks >= 35) {
        matSpanRef.current.innerHTML = "Pass";
        matSpanRef.current.style.backgroundColor = "green";
      } else {
        matSpanRef.current.innerHTML = "Fail";
        matSpanRef.current.style.backgroundColor = "red";
      }
    } else {
      matSpanRef.current.innerHTML = "Invalid";
      matSpanRef.current.style.backgroundColor = "orange";
    }
  };
  let matOnBlur = () => {
    matSpanRef.current.style.backgroundColor = "  ";
  };

  let sciOnFocus = () => {
    sciInputRef.current.style.backgroundColor = "lightblue";
  };
  let sciOnChange = () => {
    let marks = sciInputRef.current.value;
    if (marks >= 0 && marks <= 100) {
      if (marks >= 35) {
        sciSpanRef.current.innerHTML = "Pass";
        sciSpanRef.current.style.backgroundColor = "green";
      } else {
        sciSpanRef.current.innerHTML = "Fail";
        sciSpanRef.current.style.backgroundColor = "red";
      }
    } else {
      sciSpanRef.current.innerHTML = "Invalid";
      sciSpanRef.current.style.backgroundColor = "orange";
    }
  };
  let sciOnBlur = () => {
    sciSpanRef.current.style.backgroundColor = "  ";
  };

  let socOnFocus = () => {
    socInputRef.current.style.backgroundColor = "lightblue";
  };
  let socOnChange = () => {
    let marks = socInputRef.current.value;
    if (marks >= 0 && marks <= 100) {
      if (marks >= 35) {
        socSpanRef.current.innerHTML = "Pass";
        socSpanRef.current.style.backgroundColor = "green";
      } else {
        socSpanRef.current.innerHTML = "Fail";
        socSpanRef.current.style.backgroundColor = "red";
      }
    } else {
      socSpanRef.current.innerHTML = "Invalid";
      socSpanRef.current.style.backgroundColor = "orange";
    }
  };
  let socOnBlur = () => {
    socSpanRef.current.style.backgroundColor = "  ";
  };

  return (
    <div>
      <form>
        <h2>Student Mark Sheet</h2>
        <fieldset>
          <legend>Personal Details</legend>
          <div>
            <label>First Name</label>
            <input ref={FirstnameInputRef}></input>
          </div>

          <div>
            <label>Last Name</label>
            <input ref={LastnameInputRef}></input>
          </div>
        </fieldset>
        <fieldset>
          <legend>Marks Details</legend>
          <div>
            <label>Telugu</label>
            <input
              type="number"
              ref={telInputRef}
              onFocus={() => {
                telOnFocus();
              }}
              onChange={() => {
                telOnChange();
              }}
              onBlur={() => {
                telOnBlur();
              }}
            ></input>
            <span ref={telSpanRef}></span>
          </div>

          <div>
            <label>English</label>
            <input
              type="number"
              ref={engInputRef}
              onFocus={() => {
                engOnFocus();
              }}
              onChange={() => {
                engOnChange();
              }}
              onBlur={() => {
                engOnBlur();
              }}
            ></input>
            <span ref={engSpanRef}></span>
          </div>

          <div>
            <label>Hindi</label>
            <input
              type="number"
              ref={hinInputRef}
              onFocus={() => {
                hinOnFocus();
              }}
              onChange={() => {
                hinOnChange();
              }}
              onBlur={() => {
                hinOnBlur();
              }}
            ></input>
            <span ref={hinSpanRef}></span>
          </div>

          <div>
            <label>Maths</label>
            <input
              type="number"
              ref={matInputRef}
              onFocus={() => {
                matOnFocus();
              }}
              onChange={() => {
                matOnChange();
              }}
              onBlur={() => {
                matOnBlur();
              }}
            ></input>
            <span ref={matSpanRef}></span>
          </div>

          <div>
            <label>Science</label>
            <input
              type="number"
              ref={sciInputRef}
              onFocus={() => {
                sciOnFocus();
              }}
              onChange={() => {
                sciOnChange();
              }}
              onBlur={() => {
                sciOnBlur();
              }}
            ></input>
            <span ref={sciSpanRef}></span>
          </div>

          <div>
            <label>Social</label>
            <input
              type="number"
              ref={socInputRef}
              onFocus={() => {
                socOnFocus();
              }}
              onChange={() => {
                socOnChange();
              }}
              onBlur={() => {
                socOnBlur();
              }}
            ></input>
            <span ref={socSpanRef}></span>
          </div>
        </fieldset>

        <div>
          <button
            type="button"
            onClick={() => {
              let Firstname = FirstnameInputRef.current.value;
              let Lastname = LastnameInputRef.current.value;
              let telMarks = Number(telInputRef.current.value);
              let engMarks = Number(engInputRef.current.value);
              let hinMarks = Number(hinInputRef.current.value);
              let matMarks = Number(matInputRef.current.value);
              let sciMarks = Number(sciInputRef.current.value);
              let socMarks = Number(socInputRef.current.value);
              let totalMarks =
                telMarks + engMarks + hinMarks + matMarks + sciMarks + socMarks;
              let perc = (totalMarks / 600) * 100;

              alert(
                `${Firstname} ${Lastname} Total Marks are ${totalMarks} with ${perc.toFixed(
                  2
                )}%`
              );
              resultLabelref.current.innerHTML = `${Firstname} ${Lastname} Total Marks are ${totalMarks} with ${perc.toFixed(
                2
              )}%`;
            }}
          >
            Result
          </button>
        </div>
        <div className="resultLabel"> 
          <label ref={resultLabelref}></label>
        </div>
      </form>
    </div>
  );
};

export default MarkSheet;
