import Form from 'react-bootstrap/Form';

function Radiobuttons() {
  return (
    <Form>
      {['checkbox', 'radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check label="asd"
            name="group1" type={'radio'} id={`inline-${type}-2`} isValid/>
        </div>
      ))}
        {['checkbox', 'radio'].map((type) => (
          <div key={type} className="mb-3" >
            <Form.Check type={type} id={`check-api-${type}`}>
              <Form.Check.Input type={type} isValid />
              <Form.Check.Label>{` ${type}`}</Form.Check.Label>
              <Form.Control.Feedback type="valid" />
            </Form.Check>
          </div>
        ))}
        <Form.Check 
        type="switch"
        id="custom-switch"
        label="문자 색깔은 개발 진행 시 클래스 재지정 필요"
        isValid
      />
    </Form>

  );
}

export default Radiobuttons;