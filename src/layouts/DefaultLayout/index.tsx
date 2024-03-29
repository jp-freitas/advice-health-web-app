import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export function DefaultLayout() {
  const [isExpanded, setIsExpanded] = useState(false)

  function toggleExpandSidebar() {
    setIsExpanded(!isExpanded);
  }

  return (
    <Container fluid className="p-0 w-100 h-100">
      <Header />
      <Row className="ms-0 w-100 body-height-minus-header">
        <Col xs={1} className={`p-0 h-100  ${isExpanded ? 'sidebar-expanded' : 'sidebar-width'}`}>
          <Sidebar expanded={isExpanded} toggleExpand={toggleExpandSidebar} />
        </Col>
        <Col lg className="p-0 h-100">
          <Outlet />
        </Col>
      </Row>
    </Container>
  )
}