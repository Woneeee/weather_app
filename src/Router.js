const { HashRouter, Routes, Route } = require("react-router-dom");

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" />
        <Route path="/login" />
        <Route path="/signup" />
        <Route path="/*" />
      </Routes>
    </HashRouter>
  );
};

export default Router;

// *git
// =>파일의 변경, 추가, 삭제등 파일이 기존내용에서
// 변경이 되면 기록을 남김
// =>백업 가능, 협업, 이전 파일로 되돌아가기 등
// 파일을 관리해주는 시스템

// *git hub
// =>git에서 기록된 파일 또는 내용등
// 저장할수 있는 저장소
// =>호스팅 사이트 ()
