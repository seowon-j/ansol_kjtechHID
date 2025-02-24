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
    }),
  },
  { headerName: "Notes", field: "notes", width: 150 },
  {
    headerName: "Action",
    field: "action",
    width: 100,
    editable: false, 
    cellRenderer: (params) => {
      return `
        <div class="action-icons">
          <button class="btn">
            <i class="ri-file-edit-line"></i>
          </button>
          <button class="btn">
            <i class="ri-delete-bin-6-line"></i>
          </button>
          <button class="btn">
            <i class="ri-more-2-line"></i>
          </button>
        </div>
      `;
    },
  },
];

const rowData = [
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

const defaultColDef = {
  editable: true,
  flex: 1,
  minWidth: 100,
  filter: true,
};

const myTheme = agGrid.themeQuartz.withParams({
  backgroundColor: "#242425",
  foregroundColor: "#fff",
  headerTextColor: "#888895",
  headerBackgroundColor: "#323235",
  oddRowBackgroundColor: "rgb(0, 0, 0, 0.03)",
  headerColumnResizeHandleColor: "#323235",
});

const createThemedGrid = (colorScheme, selector) => {
  const gridOptions = {
    theme: myTheme,
    columnDefs,
    rowData,
    defaultColDef,
    pagination: true,
    paginationPageSize: 200,
    suppressHorizontalScroll: false,
  };
  agGrid.createGrid(document.querySelector(selector), gridOptions);
};

createThemedGrid(agGrid, "#myGrid1");