const columns = [
  {
    title: "S.no",
    dataIndex: "key"
  },
  {
    title: "Name",
    dataIndex: "Name"
  },
  {
    title: "Age",
    dataIndex: "age",
    sorter: (a, b) => a.age - b.age
  },
  {
    title: "Experience",
    dataIndex: "experience"
  },
  {
    title: "Position",
    render: (position) => {
      return <p>{position.experience >= 2 ? "Senior" : "Junior"}</p>;
    }
  }
];

export default columns;
