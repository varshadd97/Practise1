import React, { useState } from "react";

const CRUD = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [list, setList] = useState([]);
  const [edit, setEdit] = useState(0);

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  //edit item
  const EditList = (item) => {
    setEdit(item.id);
    setTitle(item.title);
    setDescription(item.description);
  };

  //delete item
  const DeleteList = (index) => {
    console.log("Deleted", index);

    setList((olditems) => {
      return olditems.filter((arrayElemnt, id) => {
        return id !== index;
      });
    });
  };

  //submit item
  const handleSubmit = () => {
    alert("Here");
    // if(title && description){
    if (edit === 0) {
      let addItem = {
        title: title,
        description: description,
        id: list.length + 1,
      };
      let arr = [...list];
      arr.push(addItem);
      setList(arr);
      setTitle("");
      setDescription("");
    } else {
      alert("Edit");
      let arr = [...list];

      let index1 = arr.findIndex((_item) => {
        return _item.id === edit;
      });
      console.log(index1);
      arr[index1] = {
        ...arr[index1],
        title: title,
        description: description,
      };

      setList(arr);
      setTitle("");
      setDescription("");
      setEdit(0);
    }
    // }
  };

  return (
    <>
      <p>Note</p>
      <input
        type="text"
        placeholder="add your title"
        value={title}
        onChange={handleChangeTitle}
      />
      <input
        type="text"
        placeholder="add your description"
        value={description}
        onChange={handleChangeDescription}
      />
      <button onClick={handleSubmit}>Submit</button>
      {list &&
        list.map((item, index) => {
          return (
            <>
              <li>
                {item.title} &nbsp;
                {item.description} &nbsp;
                <button onClick={() => EditList(item)}>Edit</button> &nbsp;
                <button onClick={() => DeleteList(index)}>Delete</button>
              </li>
            </>
          );
        })}
    </>
  );
};
export default CRUD;
