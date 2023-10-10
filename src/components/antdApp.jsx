import React, { useState } from "react";
import { Layout, Menu, Tabs, Button, Input } from "antd";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";

const { Header, Sider, Content } = Layout;
const { TabPane } = Tabs;

function AntdApp() {
  const [collapsed, setCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState("Transaction 1");
  const [transactions, setTransactions] = useState([
    { id: 1, title: "Transaction 1", content: "" },
    { id: 2, title: "Transaction 2", content: "" },
    { id: 3, title: "Transaction 3", content: "" },
  ]);
  const [newTransaction, setNewTransaction] = useState("");

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const handleTabChange = (key) => {
    setActiveTab(key);
    console.log(key);
  };

  const addTransaction = () => {
    if (newTransaction.trim() === "") return;
    const transactionExist = transactions.find(
      (tran) => tran.title === newTransaction
    );
    if (transactionExist) {
      alert("name already exist");

      return;
    }

    setTransactions([
      ...transactions,
      {
        title: newTransaction,
        content: "New Transaction content",
        id: Math.round(Math.random() * 1000),
      },
    ]);
    setNewTransaction("");
    setActiveTab(newTransaction);
  };
  const removeTransaction = (id) => {
    const filteredTransa = transactions.filter(
      (transaction) => transaction.id !== id
    );
    setTransactions(filteredTransa);
  };

  const handleContentChange = (key, content) => {
    const updatedTransactions = transactions.map((transaction) =>
      transaction.title === key ? { ...transaction, content } : transaction
    );
    setTransactions(updatedTransactions);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={toggleCollapsed}>
        <Menu theme="dark" mode="inline" selectedKeys={[activeTab]}>
          {transactions.map((transaction) => (
            <Menu.Item
              key={transaction.title}
              onClick={() => setActiveTab(transaction.title)}
            >
              {transaction.title}
              <Button
                size="small"
                onClick={() => removeTransaction(transaction.id)}
                style={{
                  marginLeft: "10px",
                  backgroundColor: "red",
                  color: "white",
                  position: "absolute",
                  right: "8px",
                  top: "8px",
                }}
                danger
              >
                <DeleteOutlined />
              </Button>
            </Menu.Item>
          ))}
        </Menu>
        <div style={{ margin: "16px" }}>
          <Input
            style={{
              marginBottom: "10px",
            }}
            placeholder="New Transaction"
            value={newTransaction}
            onChange={(e) => setNewTransaction(e.target.value)}
          />
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={addTransaction}
          >
            Add Transaction
          </Button>
        </div>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "16px" }}>
          <Tabs activeKey={activeTab} onChange={handleTabChange}>
            {transactions.map((transaction) => (
              <TabPane tab={transaction.title} key={transaction.title}>
                <div>
                  <h2>{transaction.title} Content</h2>
                  <Input
                    placeholder={`Enter content for ${transaction.title}`}
                    value={transaction.content}
                    onChange={(e) =>
                      handleContentChange(transaction.title, e.target.value)
                    }
                  />
                </div>
              </TabPane>
            ))}
          </Tabs>
        </Content>
      </Layout>
    </Layout>
  );
}

export default AntdApp;
