import Form from 'react-bootstrap/Form';

function FormTextExample() {
  return (
    <>
      <Form.Label htmlFor="input">text</Form.Label>
      <Form.Control
        type="text"
        id="input"
        aria-describedby="passwordHelpBlock"
        placeholder='제품명을 입력하세요 아님 다른거'
      />
      <Form.Text id="passwordHelpBlock" muted>
        write something 부모너비에 맞춰 width, height 조정
      </Form.Text>
    </>
  );
}

export default FormTextExample;