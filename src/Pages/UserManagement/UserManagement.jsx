import { Table, Layout, Input } from "antd";
import { useUserManagement } from "./useUserManagement";
import "./UserManagement.scss";
const { Content } = Layout;
const { Search } = Input;

export default function UserManagement() {
  const { searchText, handleUserSearch, columns, filteredData } = useUserManagement();
  return (
    <Content className="dashboard-content">
      <div style={{ marginBottom: 16 }}>
        <Search
          placeholder="Search by name"
          enterButton="Search"
          value={searchText}
          onChange={(e) => handleUserSearch(e.target.value)}
          onSearch={handleUserSearch}
          style={{ width: 300 }}
        />
      </div>

      {/* Table to display user data */}
      <Table scroll={{ x: 800 }} columns={columns} dataSource={filteredData} />
    </Content>
  );
}