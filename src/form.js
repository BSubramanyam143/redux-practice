import { useState } from "react";
import { useDispatch } from "react-redux";

function Form() {
  let dispatch = useDispatch();
  const [balence, setBalence] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

  return (
    <div className="container">
      <h1 className="text-primary"> enter form </h1>
      <div className="row">
        <div className="col-4">
          <input
            type="number"
            value={balence}
            placeholder="enter ammount"
            className="form-control "
            onChange={(e) => {
              let data = e.target.value;
              setBalence(data);
            }}
          />
        </div>
        <button
          className="btn btn-primary col-1"
          onClick={() => {
            dispatch({ type: "credit", payload: balence });
            setBalence("");
          }}
        >
          Credit
        </button>
        <button
          className="btn btn-danger mx-2 col-1"
          onClick={() => {
            dispatch({ type: "withdraw", payload: balence });
            setBalence("");
          }}
        >
          withdraw
        </button>
      </div>
      <div className="row mt-2">
        <div className="col-4">
          <input
            type="text"
            value={name}
            placeholder="enter your name"
            className="form-control "
            onChange={(e) => {
              let data = e.target.value;
              setName(data);
            }}
          />
        </div>
        <button
          className="btn btn-primary  col-1"
          onClick={() => {
            dispatch({ type: "name", payload: name });
            setName("");
          }}
        >
          enter
        </button>
      </div>
      <div className="row mt-2">
        <div className="col-4">
          <input
            type="number"
            value={mobile}
            placeholder="enter your mobile number"
            className="form-control "
            onChange={(e) => {
              let data = e.target.value;
              setMobile(data);
            }}
          />
        </div>
        <button
          className="btn btn-primary  col-1"
          onClick={() => {
            dispatch({ type: "mobileupdate", payload: mobile });
            setMobile("");
          }}
        >
          update
        </button>

        <button
          className="btn btn-danger mx-2  col-1"
          onClick={() => {
            dispatch({ type: "reset" });
            setBalence("");
          }}
        >
          reset
        </button>
      </div>
    </div>
  );
}
export default Form;
