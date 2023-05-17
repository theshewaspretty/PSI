import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Topbar.css'
import { IoIosLogOut, IoMdContact, IoMdSwitch } from "react-icons/io";

function Topbar() {

  const logoutclick = () => {
    alert('로그아웃 되었습니다.')
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/Home" className='main'>PSI </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* 링크 */}
            <NavDropdown title="마스터 정보" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/Master">제품정보 등록/조회</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="재고정보" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">재고정보 등록/조회</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="판매계획" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">판매정보 등록/조회</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">발주정보 등록/조회</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="공급계획" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">공급정보 등록/조회</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="리포트" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/Report">월별종합 MOS</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">이슈품목 조회</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">재고현황</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">판매실적</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">제품별 MOS</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="시스템관리" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">버전 운영 관리</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">정보입력 현황 조사</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">사용자 관리</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {/* 아이콘 */}
          <Nav className='righttop'>
            <Nav.Link href="/Admin">
                <div className="admin">
                  <IoMdSwitch />
                </div>
            </Nav.Link>
            <Nav.Link href="/UserConfig">
              <div className="userconfig">
              <IoMdContact />
              </div>
              </Nav.Link>
            <Nav.Link eventKey={2} href="/" onClick={logoutclick}>
              <div className="logout">
              <IoIosLogOut />
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Topbar;