import { useEffect, useState } from "react";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckBoxRoundedIcon from "@mui/icons-material/CheckBoxRounded";
import CheckBoxOutlineBlankRoundedIcon from "@mui/icons-material/CheckBoxOutlineBlankRounded";
import { BACKEND } from "./libs/constants";

interface Data {
  id: number;
  description: string;
  checked: boolean;
}

interface Prop {
  data: Data[];
  checked: any;
  deleteData: any;
}

function ListComp({ data, checked, deleteData }: Prop) {
  return (
    <table className="w-[30%] text-sm ">
      <tbody>
        {data.map((val: any) => (
          <tr className="text-2xl " key={val.id}>
            <td
              className=" text-right px-6 py-2 w-2"
              onClick={() => checked(val.id)}
            >
              {!val.checked ? (
                <CheckBoxOutlineBlankRoundedIcon />
              ) : (
                <CheckBoxRoundedIcon />
              )}
            </td>
            <td className="text-left px-6 py-2" onClick={() => checked(val.id)}>
              {val.description}{" "}
            </td>
            <td
              onClick={() => deleteData(val.id)}
              className="text-left pointer px-6 py-2"
            >
              <DeleteIcon />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

let id = 50;
function App() {
  const [data, setData] = useState([
    { id: -1, description: "LOADING . . ", checked: true },
  ]);

  useEffect(() => {
    async function fetchTemplate() {
      const res = await axios.get(BACKEND + "/data");

      if (Array.isArray(res.data)) {
        setData(res.data);
      }
    }
    fetchTemplate();
  }, []);
  const [input, setInput] = useState("");

  const checked = (id: any) => {
    setData(
      data.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item,
      ),
    );

    async function checkCall() {
      try {
        await axios.put("http://localhost:6969/data", {
          id,
          checked: !data.find((item) => item.id === id)?.checked,
        });
      } catch (error) {
        console.error("Error:", error);
      }
    }

    checkCall();
  };

  const deleteData = (id: number) => {
    setData(data.filter((item) => item.id !== id));

    async function deleteCall() {
      await axios.delete(`http://localhost:6969/data/${id}`);
    }
    deleteCall();
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const newData = { id: ++id, description: input, checked: false };
    setData([...data, newData]);
    setInput("");

    async function insertCall() {
      await axios.post("http://localhost:6969/data", newData);
    }
    insertCall();
  };

  return (
    <>
      <main className="py-20 flex flex-col items-center h-screen w-full bg-white">
        <h1 className="mb-10 text-7xl font-bold ">TO DO LIST</h1>
        <ListComp deleteData={deleteData} data={data} checked={checked} />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder=" + Add Task . . ."
            className="  text-gray-900 text-2xl outline-none block w-[30vw] mt-8 p-2.5 "
            onChange={(e: any) => {
              setInput(e.target.value);
            }}
            value={input}
          />
        </form>
      </main>
    </>
  );
}

export default App;
