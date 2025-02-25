document.addEventListener("DOMContentLoaded", function () {
  // AG Grid 테이블 생성 함수
  const createThemedGrid = (selector, columnDefs, rowData, theme, defaultColDef) => {
    const gridElement = document.querySelector(selector);
    if (!gridElement) {
      console.error(`Error: Element ${selector} not found.`);
      return;
    }
    
    gridElement.style.overflow = "hidden";

    const gridOptions = {
      theme: theme,
      columnDefs: columnDefs,
      rowData: rowData,
      defaultColDef: defaultColDef,
      pagination: true,
      paginationPageSize: 200,
      suppressHorizontalScroll: true,
      suppressVerticalScroll: true,
    };

    agGrid.createGrid(gridElement, gridOptions);
  };

  // 기본 컬럼 설정
  const defaultColDef = {
    editable: true,
    flex: 1,
    minWidth: 100,
    filter: true,
  };

  // 첫 번째 테이블의 테마 설정
  const myTheme = agGrid.themeQuartz.withParams({
    backgroundColor: "#242425",
    foregroundColor: "#fff",
    headerTextColor: "#888895",
    headerBackgroundColor: "#323235",
    oddRowBackgroundColor: "rgb(0, 0, 0, 0.03)",
    headerColumnResizeHandleColor: "#323235",
  });

  // 첫 번째 테이블 컬럼 정의
  const columnDefs = [
    { headerName: "Entry Time", field: "entryTime", width: 150 },
    { headerName: "Door Name", field: "doorName", width: 200 },
    { headerName: "User Name", field: "userName", width: 150 },
    { headerName: "Division", field: "division", width: 200 },
    { headerName: "Position", field: "position", width: 200 },
    { headerName: "Authentication Method", field: "authMethod", width: 200 },
    {
      headerName: "Entry Status",
      field: "entryStatus",
      width: 100,
      cellStyle: (params) => ({
        color: params.value === "PASS" ? "#00ff00" : "#ff4d4d",
        fontWeight: "bold",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }),
    },
    { headerName: "Notes", field: "notes", width: 150 },
    {
      headerName: "Action",
      field: "action",
      width: 100,
      editable: false,
      cellRenderer: () => `
        <div class="action-icons">
          <button class="btn"><i class="ri-file-edit-line"></i></button>
          <button class="btn"><i class="ri-delete-bin-6-line"></i></button>
          <button class="btn"><i class="ri-more-2-line"></i></button>
        </div>`,
    },
  ];

  // 첫 번째 테이블 데이터
  const rowData = [
    { entryTime: "Feb.02.2025 09:31:12", doorName: "A area 1F Main Gate 01", userName: "Robert", division: "Planning Dept", position: "General Manager", authMethod: "Fingerprint Recognition", entryStatus: "PASS", notes: "None" },
    { entryTime: "Feb.02.2025 10:34:28", doorName: "A area 1F Main Gate 02", userName: "David", division: "Planning Dept", position: "Manager", authMethod: "RFID Card", entryStatus: "FAIL", notes: "Card Recognition Failed" },
      { entryTime: "Feb.02.2025 09:31:12", doorName: "A area 1F Main Gate 01", userName: "Robert", division: "Planning Dept", position: "General Manager", authMethod: "Fingerprint Recognition", entryStatus: "PASS", notes: "None" },
  { entryTime: "Feb.02.2025 10:34:28", doorName: "A area 1F Main Gate 02", userName: "David", division: "Planning Dept", position: "Manager", authMethod: "RFID Card", entryStatus: "FAIL", notes: "Card Recognition Failed" },
  { entryTime: "Feb.02.2025 11:01:23", doorName: "A area 2F Meeting Room", userName: "Stephen", division: "Marketing Dept", position: "Manager", authMethod: "RFID Card", entryStatus: "PASS", notes: "None" },
  { entryTime: "Feb.02.2025 13:21:10", doorName: "A area 2F Meeting Room", userName: "Scott", division: "Technical Dept", position: "Assistant Manager", authMethod: "RFID Card", entryStatus: "PASS", notes: "None" },
  { entryTime: "Feb.02.2025 18:09:30", doorName: "A area 2F Meeting Room", userName: "Julie", division: "Technical Dept", position: "Assistant Manager", authMethod: "RFID Card", entryStatus: "PASS", notes: "None" },
  { entryTime: "Feb.03.2025 21:30:01", doorName: "A area 5F Executive Room", userName: "Malinda", division: "International Dept", position: "Assistant Manager", authMethod: "Face Recognition", entryStatus: "PASS", notes: "None" },
  { entryTime: "Feb.03.2025 08:27:01", doorName: "A area 5F Executive Room", userName: "Felicia", division: "International Dept", position: "Staff", authMethod: "Face Recognition", entryStatus: "PASS", notes: "None" },
  { entryTime: "Feb.03.2025 08:32:09", doorName: "A area 2F Meeting Room", userName: "Brendan", division: "International Dept", position: "Staff", authMethod: "Fingerprint Recognition", entryStatus: "PASS", notes: "None" },
  { entryTime: "Feb.03.2025 09:01:23", doorName: "A area 7F Server Room", userName: "Batty", division: "Machinery Division", position: "Staff", authMethod: "Face Recognition", entryStatus: "FAIL", notes: "Face Recognition Failed" },
  { entryTime: "Feb.03.2025 09:12:33", doorName: "A area 7F Server Room", userName: "Elizabeth", division: "Machinery Division", position: "Staff", authMethod: "Face Recognition", entryStatus: "PASS", notes: "None" },
  { entryTime: "Feb.03.2025 09:12:33", doorName: "A area 7F Server Room", userName: "Elizabeth", division: "Machinery Division", position: "Staff", authMethod: "Face Recognition", entryStatus: "PASS", notes: "None" },
  { entryTime: "Feb.03.2025 09:12:33", doorName: "A area 7F Server Room", userName: "Elizabeth", division: "Machinery Division", position: "Staff", authMethod: "Face Recognition", entryStatus: "PASS", notes: "None" },
  { entryTime: "Feb.03.2025 09:12:33", doorName: "A area 7F Server Room", userName: "Elizabeth", division: "Machinery Division", position: "Staff", authMethod: "Face Recognition", entryStatus: "PASS", notes: "None" },
  { entryTime: "Feb.03.2025 09:12:33", doorName: "A area 7F Server Room", userName: "Elizabeth", division: "Machinery Division", position: "Staff", authMethod: "Face Recognition", entryStatus: "PASS", notes: "None" },
  { entryTime: "Feb.03.2025 09:12:33", doorName: "A area 7F Server Room", userName: "Elizabeth", division: "Machinery Division", position: "Staff", authMethod: "Face Recognition", entryStatus: "PASS", notes: "None" },
  { entryTime: "Feb.03.2025 09:12:33", doorName: "A area 7F Server Room", userName: "Elizabeth", division: "Machinery Division", position: "Staff", authMethod: "Face Recognition", entryStatus: "PASS", notes: "None" },

  ];

  // 두 번째 테이블의 테마 설정
  const myTheme1 = agGrid.themeQuartz.withParams({
    backgroundColor: "#1e1e1e",
    foregroundColor: "#ffffff",
    headerTextColor: "#bbbbbb",
    headerBackgroundColor: "#333333",
    oddRowBackgroundColor: "rgb(255, 255, 255, 0.1)",
    headerColumnResizeHandleColor: "#333333",
  });

  // 두 번째 테이블 컬럼 정의
  const columnDefs1 = [
    { headerName: "출입 시간", field: "entryTime", width: 150 },
    { headerName: "출입문 이름", field: "doorName", width: 200 },
    { headerName: "사용자 명", field: "userName", width: 150 },
    { headerName: "부서", field: "division", width: 200 },
    { headerName: "직급", field: "position", width: 200 },
    { headerName: "인증 방법", field: "authMethod", width: 200 },
    {
      headerName: "출입 결과",
      field: "entryStatus",
      width: 100,
      cellStyle: (params) => ({
        color: params.value === "정상출입" ? "#00ff00" : "#ff4d4d",
        fontWeight: "bold",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }),
    },
    { headerName: "비고", field: "notes", width: 150 },
    {
      headerName: "액션",
      field: "action",
      width: 100,
      editable: false,
      cellRenderer: () => `
        <div class="action-icons">
          <button class="btn"><i class="ri-file-edit-line"></i></button>
          <button class="btn"><i class="ri-delete-bin-6-line"></i></button>
          <button class="btn"><i class="ri-more-2-line"></i></button>
        </div>`,
    },
  ];

  // 두 번째 테이블 데이터
  const rowData1 = [
  { entryTime: "25-01-02 09:03:12", doorName: "A동 1층 메인 정문 01", userName: "배경구", division: "경영지원팀", position: "팀장", authMethod: "지문 인식", entryStatus: "정상출입", notes: "없음" },
  { entryTime: "25-01-02 09:03:12", doorName: "A동 1층 메인 정문 02", userName: "안재섭", division: "경영지원팀", position: "대리", authMethod: "RFID 카드", entryStatus: "출입실패", notes: "카드 인식 오류" },
  { entryTime: "25-01-02 10:34:29", doorName: "A동 2층 회의실", userName: "서경구", division: "마케팅팀 ", position: "대리", authMethod: "RFID 카드", entryStatus: "정상출입", notes: "없음" },
  { entryTime: "25-01-02 10:34:29", doorName: "A동 2층 회의실", userName: "김흥직", division: "기술개발팀", position: "대리", authMethod: "RFID 카드", entryStatus: "정상출입", notes: "없음" },
  { entryTime: "25-01-02 10:34:29", doorName: "A동 2층 회의실", userName: "이유나", division: "기술개발팀", position: "대리", authMethod: "RFID 카드", entryStatus: "정상출입", notes: "없음" },
  { entryTime: "25-01-02 18:09:20", doorName: "A동  5층 임원실", userName: "서경구", division: "마케팅팀", position: "과장", authMethod: "얼굴 인식", entryStatus: "정상출입", notes: "없음" },
  { entryTime: "25-01-02 09:03:12", doorName: "A동  5층 임원실", userName: "전일성", division: "마케팅팀", position: "과장", authMethod: "얼굴 인식", entryStatus: "정상출입", notes: "없음" },
  { entryTime: "25-01-02 09:03:12", doorName: "A동  5층 임원실",userName: "유경모", division: "인사팀", position: "사원", authMethod: "지문 인식", entryStatus: "정상출입", notes: "없음" },
  { entryTime: "25-01-02 09:03:12", doorName: "A동 7층 서버실", userName: "고치원", division: "인사팀", position: "부장", authMethod: "얼굴 인식", entryStatus: "출입실패", notes: "얼굴 인식 오류" },
  { entryTime: "25-01-02 09:03:12", doorName: "A동 7층 서버실", userName: "하승윤", division: "인사팀", position: "사원", authMethod: "얼굴 인식", entryStatus: "정상출입", notes: "없음" },
  { entryTime: "25-01-02 09:03:12", doorName: "A동 7층 서버실", userName: "노유리", division: "영업팀", position: "사원", authMethod: "얼굴 인식", entryStatus: "정상출입", notes: "없음" },
  { entryTime: "25-01-02 09:03:12", doorName: "A동 7층 서버실", userName: "김유준", division: "영업팀", position: "과장", authMethod: "얼굴 인식", entryStatus: "정상출입", notes: "없음" },
  { entryTime: "25-01-02 09:03:12", doorName: "A동 7층 서버실", userName: "홍현아", division: "영업팀", position: "과장", authMethod: "지문 인식", entryStatus: "정상출입", notes: "없음" },
  { entryTime: "25-01-02 09:03:12", doorName: "A동 7층 서버실", userName: "이유진", division: "재무팀", position: "과장", authMethod: "지문 인식", entryStatus: "정상출입", notes: "없음" },
  { entryTime: "25-01-02 09:03:12", doorName: "A동 7층 서버실", userName: "이홍수", division: "기술개발팀", position: "차장", authMethod: "RFID 카드", entryStatus: "정상출입", notes: "없음" },
  { entryTime: "25-01-02 09:03:12", doorName: "A동 7층 서버실", userName: "정광연", division: "기술개발팀", position: "이사", authMethod: "RFID 카드", entryStatus: "출입실패", notes: "카드 인식 오류" },
  ];

  // 테이블 목록
  const tables = [
    { selector: "#my-grid1", columnDefs, rowData, theme: myTheme, defaultColDef },
    { selector: "#my-grid2", columnDefs: columnDefs1, rowData: rowData1, theme: myTheme1, defaultColDef },
  ];

  // 테이블 생성 실행
  tables.forEach(({ selector, columnDefs, rowData, theme, defaultColDef }) => {
    createThemedGrid(selector, columnDefs, rowData, theme, defaultColDef);
  });

  // 전체 페이지에서 스크롤바 숨기기
  const style = document.createElement("style");
  style.innerHTML = `
    ::-webkit-scrollbar {
      display: none;
    }
    * {
      scrollbar-width: none; /* Firefox */
      -ms-overflow-style: none; /* IE, Edge */
    }
  `;
  document.head.appendChild(style);
});
