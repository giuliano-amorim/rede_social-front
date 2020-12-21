import { Button, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { deleteEducation } from "../../store/User/user.action";

export default function TableExperience() {
  const dispatch = useDispatch();
  const UserEducation = useSelector((state) => state.user.profile.education);

  const handleDelete = (id) => {
    dispatch(deleteEducation(id));
  };

  const columns = [
    {
      title: "Area de Estudo",
      dataIndex: "fieldofstudy",
    },
    {
      title: "Escola",
      dataIndex: "school",
    },
    {
      title: "Grau",
      dataIndex: "degree",
    },
    {
      title: "Inicio",
      dataIndex: "from",

      render: (date) => new Date(date).toLocaleDateString(),
    },
    {
      title: "Fim",
      dataIndex: "to",

      render: (date) => new Date(date).toLocaleDateString(),
    },
    {
      title: "Ação",
      dataIndex: "",

      render: (v, i) => (
        <Button key={i} onClick={() => handleDelete(v._id)}>
          Deletar
        </Button>
      ),
    },
  ];

  return (
    <Table
      pagination={false}
      rowKey={(r) => r._id}
      dataSource={UserEducation}
      columns={columns}
    />
  );
}
