import { useSelector } from "react-redux";

function Account() {
  let data = useSelector((state) => {
    return state.account;
  });

  return (
    <div className="container mt-5">
      <h1 className="text-primary">Account :</h1>
      <table className="table table-bordered  w-50">
        <thead>
          <tr>
            <th>balance</th>
            <th>user name</th>
            <th>mobile</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.balence}</td>
            <td>{data.fullname}</td>
            <td>{data.mobile}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Account;
