/**
 * EN language
 */
const element = {
  currentIteration: 'Current iteration element',
  modelFilter: 'Model Filter',
  nameFilter: 'Name Filter',
  namePlace: 'Please input element name to search',
  iterationList: 'Iterate Element List',
  whenList: 'When the parent step exists',
  thenList: ', You can select this element as',
  last: ' carry on operation.',
  paramTip:
    'If temporary params or global params are needed, you can put {{params name}} in.',
  name: 'Name',
  nameMsg: 'Please input element name',
  type: 'Type',
  typePlace: 'Please choose element type',
  deviceType: 'Common Type of mobile',
  specType: 'Special Type',
  point: 'coordinate（Support relative coordinates）',
  poco: 'POCO（Only game element are supported）',
  image: 'image',
  webViewType: 'Common Type of WebView',
  value: 'Value',
  valuePlace: 'Please input element value',
  model: 'Model',
  modelPlace: 'Please choose model',
};
const suite = {
  name: 'Name',
  namePlace: 'Please input suite name',
  perf: 'Perf Collect',
  interval: 'Collect Interval',
  devicePlace:
    'Please select the devices. You can enter the model, remarks, name and serial number to filter',
  selectedCase: 'Selected Cases',
};
const testcase = {
  info: 'Case Info',
  namePlace: 'Input name to search',
  model: 'Model',
  version: 'Version',
  designer: 'Designer',
  editTime: 'Last Modified',
  deleteTip:
    'Are you sure to delete this case? The steps under the case will be moved out of the case',
  name: 'Name',
  nameMsg: 'Please input case name',
  project: 'Project',
  projectPlace: 'Please select project',
  platform: 'Platform',
  platformPlace: 'Please select platform',
  modelLabel: 'Model',
  modelPlace: 'Please select model',
  versionLabel: 'Version',
  versionPlace: 'Please select version',
  des: 'Description',
  desPlace: 'Please input case description',
  empty: 'No testcases',
  add: 'Add right now',
  list: 'Test Case List',
};
const pubSteps = {
  pList: 'Public Steps List',
  alertOne: 'This step already exists in the following public steps!',
  alertTwo:
    'After selecting 【Remove Only This Case】, the steps are deleted from this case, and the following public steps are not affected.',
  alertThree:
    'After selecting 【Delete Completely】, this step is deleted from this case and from the following public steps.',
  resetCaseId: 'Remove Only This Case',
  deleteReal: 'Delete Completely',
  auto: 'Auto Saving...',
  selectPass: 'Selection successful! Added to the selected step',
  removePass: 'Remove successful!',
  stepInfo: 'Step Info',
  name: 'Name',
  nameMsg: 'Public step name cannot be empty',
  namePlace: 'Please input pubic step name',
  platform: 'Platform',
  platformPlace: 'Please select platform',
  stepTip: 'You can edit the selected steps after saving',
  selected: 'Selected Steps',
  list: 'Step List',
  listTip: 'Add or edit steps from here and add to the selected steps',
  addStep: 'Add steps',
  searchPlace: 'Search by element name',
  search: 'Search',
  case: 'CaseId',
  deleteCaseTip: 'Are you sure to delete this step completely?',
  goToCase: 'Go to case details',
  goToCaseTip:
    'This step exists in the case. You need to go to the use case details before deleting!',
};
const steps = {
  step: 'Step',
  cases: 'CaseId: ',
  empty: 'Empty Step',
  remove: 'Are you sure to delete this step?',
  run: 'Run Steps',
  forceStep: 'Force Stop',
  clear: 'Clear',
  status: 'Stat',
  time: 'Time',
  detail: 'Detail',
  script: 'Click to expand/collapse the script',
  running: 'Running',
  done: 'Run completed',
  loading: 'Loading',
  loadDone: 'Load completed',
  loadMore: 'Load more',
};
const code = {
  placeholder: 'Please choose language',
  settings: 'Settings',
  temp: 'Import',
  table: {
    name: 'Input name to search',
    lang: 'Language',
    type: 'Import Type',
    add: 'add',
    replace: 'replace',
  },
  tip: 'Remember to save after editing',
};
const token = {
  day: 'Expiration',
  result: 'Result',
  click: '(Click to copy)',
  copy: 'Click Confirm to copy here',
};
const project = {
  logo: 'Project Logo',
  name: 'Name',
  nameMessage: 'Project name cannot be empty',
  namePlace: 'Please input project name',
  des: 'Description',
  desPlace: 'Please input project description',
  delete: 'Delete Project',
  deleteConfirmMsg: 'Are you sure to delete this project?',
  deleteConfirmMsgDes:
    'All information contained in the project will be deleted!',
};
const perf = {
  select:
    '(Optional) Click here to select the listening application process performance',
  start: 'Start',
  stop: 'Stop',
  clear: 'Clear',
  singleCpu: 'CPU Single Usage',
  totalCpu: 'CPU Total Usage',
  memUsage: 'Memory Usage',
  network: 'Network',
  procCpu: 'CPU Usage',
  emptyData: 'No Data',
  byteData: 'Data',
};
const script = {
  name: 'Name',
  namePlace: 'Please input template name',
  info: 'Template information',
  add: 'New template',
  typeSearch: 'Input name to search',
  lang: 'Language',
  deleteMsg: 'Are you sure to delete the script template?',
};
const robot = {
  robotType: 'Robot Type',
  robotTypePlaceholder: 'Please select the robot type',
  robotToken: 'WebHook',
  robotTokenPlaceholder: 'Please input the WebHook of the group robot',
  robotSecret: 'Secret',
  robotSecretPlaceholder: '(Optional) Please input the key of the group robot',
};
const agent = {
  hub: {
    config: 'Hub Config',
  },
  newAgent: 'New Agent',
  clickToCopy: 'Copy Key',
  status: {
    name: 'Status',
    online: 'ONLINE',
    offline: 'OFFLINE',
    s2ae: 'S2AE',
  },
  system: 'System',
  version: 'Version',
  operation: 'Operation',
  shutdown: 'Shutdown',
  edit: {
    name: 'Name',
    highTemp: 'High temperature value',
    highTempTime: 'High temperature timeout',
    rule: 'Agent name cannot be empty',
    namePlaceholder: 'Please input the Agent name',
  },
};
const devices = {
  title: 'Sonic Cloud',
  list: 'Device List',
  form: {
    model: 'Model',
    manufacturer: 'MFR',
    system: 'System',
    battery: {
      level: 'Level',
      temperature: 'Temp',
      voltage: 'Voltage',
    },
    agent: 'Agent',
  },
  detail: {
    image: 'Image',
    uploadImg: ' Click to Upload',
    nickName: 'NickName',
    nickPlaceholder: 'Input device nickname',
    name: 'Name',
    model: 'Model',
    udId: 'UDID',
    size: 'Screen Size',
    cpu: 'CPU',
    pwd: 'Password',
    pwdPlaceholder: 'Default Sonic123456',
    operation: 'Operation',
    reboot: 'Reboot',
    rebootTips: 'Are you sure to reboot the device?',
    deleteTips: 'Are you sure to delete the device?',
  },
  useRightNow: 'Use Now',
  moreDetail: 'More',
  deviceCenter: 'Device Center',
  agentCenter: 'Agent Center',
  status: {
    ONLINE: 'ONLINE',
    DEBUGGING: 'DEBUGGING',
    TESTING: 'TESTING',
    DISCONNECTED: 'DISCONNECTED',
    OFFLINE: 'OFFLINE',
    UNAUTHORIZED: 'UNAUTHORIZED',
    ERROR: 'ERROR',
  },
  filter: {
    all: 'All',
    platform: {
      ANDROID: 'Android',
      IOS: 'iOS',
      HARMONY: 'Harmony',
    },
    manufacturer: 'Manufacturer',
    cpu: 'CPU',
    size: 'Screen Size',
    agent: 'Agent',
    status: 'Status',
    placeholder: 'Please enter the model, name, or serialNumber',
    button: 'Filter',
  },
  refresh: 'Auto refresh',
  avgTem: 'Current average battery temperature: ',
  hint: 'Set Prompt',
  adTemperature: {
    temperature: 'When the device temperature is ≥',
    height: 'High temperature value',
    onlyAd: 'the robot will be notified of the alarm.',
    then: 'then',
    timeout: 'High temperature timeout',
    continuedTime: 'Temperature continues for ≥',
    onlyAdNotice: 'the robot will be notified and ',
    shutdown: 'shutdown',
  },
};
// 布局相关
const layout = {
  // header
  theme: 'Current theme: ',
  languages: 'Languages',
  deviceCenter: 'Device Center',
  myInfo: 'My Information',
  changePassword: 'Change Password',
  signOut: 'Sign Out',
  aboutSonic: 'About Sonic',
  backHome: 'Home',
  welcomeSpeech:
    'Welcome to Sonic cloud real machine testing platform. Please select the project to enter.',
  addProject: 'New Project',
  officialWebSite: 'Sonic Official WebSite',
  document: 'Document',
  versionUpdateRecord: 'Version Record',
};
// 表单相关
const form = {
  save: 'Save',
  unknown: 'Unknown',
  notEmpty: 'Not Empty!',
  differentInput: 'The twice inputs are inconsistent!',
  username: 'User Name',
  role: 'Role',
  testEngineer: 'Test Engineer',
  developmentEngineer: 'Development Engineer',
  oldPasswordNotEmpty: "Old password can't be empty",
  oldPassword: 'Old Password',
  inputOldPassword: 'Please input your old password',
  newPasswordNotEmpty: "New password can't be empty",
  newPassword: 'New Password',
  inputNewPassword: 'Please input your new password',
  inputNewPasswordAgain: 'Please input your new password again',
  confirm: 'Confirm',
  cancel: 'Cancel',
};
// 弹窗相关
const dialog = {
  welcome: 'Welcome back! ',
  permissionDenied: 'Permission denied!',
  suffixError: 'Incorrect file suffix!',
  projectInfo: 'Project Information',
  agentInfo: 'Agent Information',
  myInfo: 'My Information',
  changePassword: 'Change Password',
  copy: {
    success: 'Copy Successful!',
    fail: 'Copy failed!',
  },
};
// 通用操作
const common = {
  release: 'the occupation will be automatically released',
  releaseTip:
    'Are you sure you want to forcibly remove the occupation status of this device?',
  at: 'After ',
  hour: 'h',
  min: 'm',
  sec: 's',
  null: 'Null',
  delete: 'Delete',
  edit: 'Edit',
  operate: 'Operation',
  copy: 'Copy',
};
// 路由
const routes = {
  login: 'Login',
  home: 'Home ',
  deviceCenter: 'Device Center',
  remoteControl: 'Remote Control',
  androidTestCase: 'Android Test Case',
  iosTestCase: 'IOS Test Case',
  operateSteps: 'Operating Steps',
  testSuite: 'Test Suite',
  testResult: 'Test Result',
  reportDetails: 'Report Details',
  publicSteps: 'Public Steps',
  controlElement: 'Element',
  globalParameter: 'Global Parameter',
  moduleManage: 'Modules Manage',
  versionIteration: 'Version Manage',
  timedTask: 'Timed Task',
  projectSetting: 'Project Setting',
  projectPage: 'Project Home',
  resource: 'Resource Manage',
  role: 'Roles Manage',
  users: 'Users Manage',
  sysJobs: 'System Jobs',
  remoteSettings: 'Remote Settings',
  scripts: 'Scripts Template Manage',
};
const setting = {
  title: 'Manage Center',
};
const androidTestCase = {
  addCase: 'Add Test Case',
};
const elements = {
  eleInfo: 'Element information',
  stepInfo: 'Step info',
  warn: 'Warning',
  warnInfo:
    'This element already exists in the following steps. Deleting this element will affect the following steps! Please delete and go to the corresponding step to modify the control or confirm that the corresponding step has been abandoned!',
  stepList: {
    stepId: 'Step Id',
    useCaseId: 'Case Id',
    userCaseName: 'Case name',
    noCase: 'no case',
  },
  sureDelete: 'Confirm deletion',
  addElement: 'Add element',
  controlId: 'element id',
  inputNameSearch: 'Input the name of element to search',
  moduleName: 'Name',
  targetingType: 'Type',
  coordinate: 'Point',
  picture: 'Picture',
  notSpecified: 'Not specified',
  cEleValue: 'Element value',
  inputKeySearch: 'Input the element value to search',
  sureDelInfo: 'Sure to delete this element?',
};
const globalParamsTs = {
  dialogVisible: {
    info: 'Global parameters information',
    specialUse: 'Special Use',
    messageInfo:
      "If you have more than one parameter value, you can use '{'|'}' to separate them, they will be randomly assigned when assigning devices, and only the same parameter value will be taken in a single task. The [random] and [timestamp] parameters are built-in and can be used to construct random data",
    keyName: 'Parameter name',
    keyNameMessage:
      'The parameter name cannot be empty, English is recommended',
    inputName: 'Please input the parameter name',
    valueName: 'Parameter value',
    valueNameMessage:
      "The parameter value cannot be empty, multiple values can be separated by '{'|'}'",
    inputValue:
      "Please input the value of the parameter, multiple values can be separated by '{'|'}'",
  },
  addGlobalParams: 'Add global parameters',
  paramsList: {
    id: 'Parameter id',
    name: 'Name',
    value: 'Value',
  },
  delMessage: 'Sure to delete this global parameter?',
};
const homeTS = {
  projectOverview: 'Project Overview',
  testCaseManagement: 'Test Case Manage',
  testCase: {
    case: 'Test Cases',
    adCase: 'Android Test Cases',
    iosCase: 'iOS Test Cases',
  },
  testSuite: 'Test Suite',
  testDataManagement: 'Test Data Manage',
  testResults: 'Test Result',
  setting: 'CI Settings',
  package: {
    mange: 'Install Package Manage',
    bulk: 'Bulk Package Installation',
  },
  crashReport: 'Crash Reporting',
  projectSetting: {
    setting: 'Project Related Settings',
    mange: 'Module Manage',
    update: 'Version Manage',
  },
};
const jobsTS = {
  dialogVisible: {
    message: 'Timed job message',
    name: 'Name',
    nameIsNull: 'Job name cannot be empty',
    inputName: 'Please input the job name',
    testSuiteIsNull: 'The test suite cannot be empty',
    chooseTestSuite: 'Please choose the test suite',
    cron: 'Cron Expression',
    cronIsNull: 'Cron expression cannot be empty',
    inputCron: 'Please input a Cron expression',
  },
  addCron: 'Add a timed task',
  whatCron: 'What is a Cron expression?',
  cronInfo: {
    one: '* The first bit, indicating seconds, value range: 0-59',
    two: '* The second bit, indicating minutes, value range: 0-59',
    three: '* The third digit, indicating the hour, value range: 0-23',
    four: '* The fourth digit, indicating the date, value range: 1-31',
    five: '* The fifth digit, indicating the month, value range: 1-12',
    six: '* The sixth digit, indicating the day of the week, value range: 1-7',
    seven:
      '* The seventh digit, indicating the year, can be left blank, value range: 1970-2099',
    asterisk:
      '(*) asterisk: can be interpreted as meaning every, every second, every minute',
    questionMark:
      '(?) question mark: can only appear in the date and day of the week, indicating that the value of this position is uncertain',
    bar: '(-) expresses a range, e.g. 10-12 in the hour field, means from 10:00 to 12:00',
    comma:
      '(,) a comma that expresses a list of values, such as 1,2,4\n' +
      'in the week field, then it means Monday, Tuesday, Thursday',
    slash:
      '(/) slash, e.g. x/y , x is the start value, y is the step length, e.g. use \n' +
      ' in the first (second) place 0/15, means start from 0 seconds and every 15 seconds',
    official: 'Official explanation:',
    demoOne: '0 0 3 * * ? Execute at 3:00 per day',
    demoTwo: '0 5 3 * * ? executes at 3:05 every day',
    demoThree: '0 5 3 ? * * executed every day at 3:05',
    demoFour:
      '0 5/10 3 * * ? 3:5, 15, 25, 35, 45, 55\n' + 'Execute in these points',
    demoFive:
      '0 10 3 ? * 1 is executed every week on Sunday at 3:10, note: 1 means Sunday',
    demoSix:
      '0 10 3 ? * 1#3 Executed on the third Sunday of every month, # can only appear in the week position',
    hint: 'Note: The number in the sixth position (day of the week) may not be expressed correctly, you can use the abbreviation to express it, such as: Sun',
  },
  taskId: 'Task id',
  run: 'Run immediately',
  del: 'Delete this timed task?',
};
const loginTS = {
  testPlatform: 'Sonic cloud real machine platform',
  login: {
    message: 'Registered account/LDAP account login',
    register: 'Registered account login',
    LDAPLogin: 'LDAP account login',
  },
  user: {
    inputUserName: 'Please input the account',
    inputPassword: 'Please input the password',
    longin: 'Login',
    register: 'Register',
  },
};
const modulesTS = {
  info: 'Module information',
  name: 'Name',
  isNotNull: 'The module name cannot be empty',
  inputName: 'Please input the module name',
  sure: 'sure',
  add: 'Add module',
  del: 'Delete this module?',
};
const packagesTS = {
  accessGuide: 'Access Guide',
  buildLink: 'Source',
  platform: 'Platform',
  no: 'Not specified',
  packageName: 'Package Name',
  branch: 'branch',
  inputName: 'Input branch name',
  downloadLink: 'Download Link',
  copyUrl: 'Copy url',
  creatTime: 'Created Time',
};
const projectIndexTS = {
  code: {
    lastWeek: 'Last week',
    lastMonth: 'Last Month',
    lastThreeMonth: 'Last three months',
    day: ' d ',
    hour: ' h ',
    minute: ' m ',
    second: ' s ',
    runInfo: 'Overviews',
    unit: 'Unit(%)',
    passRate: 'Pass rate for the day',
    stateDis: 'State Distribution',
    other: 'Other',
    pass: 'Pass',
    fail: 'Fail',
  },
  page: {
    to: 'To',
    startTime: 'Start Date',
    endTime: 'End Date',
    caseTop5: 'Ranking of test case runtime（Top 5）',
    caseId: 'Case id',
    caseName: 'Case Name',
    timeLong: 'Duration',
    equipmentTop5: 'Ranking of test case runtime（Top 5）',
    eqId: 'Model',
    serialNumber: 'Serial Number',
  },
};
const publicStepTS = {
  info: 'Public step information',
  add: 'Add public step',
  id: 'public step Id',
  name: 'Name',
  platform: 'Platform',
  android: 'ANDROID',
  list: 'List of Steps',
  stepId: 'Step Id',
  useCase: 'Belonging test case',
  stepInfo: 'Step Details',
  viewSteps: 'View Steps',
  sureDel: 'Delete this public step?',
};
const resultDetailTS = {
  memoryInfo: 'Memory details',
  unit: 'Unit (KB)',
  battery: 'Power details',
  memoryShort: 'Insufficient memory data',
  batteryShort: 'Insufficient power data',
  performance: 'Insufficient performance data',
  caseRun: 'Test case running status distribution',
  noStart: 'Not started',
  runIng: 'Running',
  caseStatus: 'Case status',
  page: {
    reportInfo: 'Report Info',
    resultId: 'Id',
    executeUser: 'Strike',
    runStatus: 'Status',
    testPass: 'Test passed',
    testFail: 'Test failed',
    testAlert: 'Test Alert',
    endTime: 'End Time',
    totalTime: 'Spent time',
    runInfo: 'RunInfo',
    total: 'Time elapsed',
    runLog: 'Running Log',
    performanceInfo: 'Performance Info',
    runRecording: 'Run Recording',
    onRecording: 'No recording yet',
  },
};
const ResultsTS = {
  name: 'Test Suite Name',
  testReport: 'Report Detail',
  lookReport: 'View report',
  interruptTest: 'Interrupt this test?',
  interrupt: 'Interrupt',
  del: 'Delete this test report?',
};
const stepListViewTS = {
  caseInfo: 'Test Case Details',
  platformToBe: 'Platform',
  module: 'Module',
  versionName: 'Version',
  designer: 'Designer',
  last: 'Last Modified',
  testMessage: 'Description',
};
const testSuitesTS = {
  testStart: 'Testing has started...',
  info: 'Test Suite Information',
  add: 'Add test suite',
  id: 'Suite Id',
  searchMessage: 'Input name to search',
  kitPlatform: 'Platform',
  coverType: 'Cover Type',
  testCover: 'TestCase Cover',
  deviceCover: 'Device Cover',
  associated: 'Device',
  device: {
    id: 'device id',
  },
  viewList: 'View List',
  associatedCase: 'Test Cases',
  run: 'Run',
  delMessage:
    'Delete this test suite? The test cases under the suite will be moved out of the suite',
};
const versionsTS = {
  name: 'Name',
  iteration: 'Version information',
  noNull: 'The version name cannot be empty',
  inputName: 'Please input the version name',
  time: 'Time',
  timeNoNull: 'The time cannot be empty',
  selectTime: 'Select date and time',
  addVersions: 'Add version',
  delMessage: 'Delete this version?',
};
const androidRemoteTS = {
  element: {
    windows: {
      single: 'Single Window Mode',
      multi: 'Multi Window Mode',
    },
    visible: {
      hid: 'Hidden Invisible Element',
      show: 'Show Invisible Element',
    },
    unimportant: {
      ignore: 'Ignore Unimportant View',
      show: 'Show Unimportant View',
    },
  },
  driverStatus: {
    success: 'Init UIAutomator2 Server successful!',
    fail: 'Init UIAutomator2 Server failed!',
  },
  repairedSuccess: 'Repaired successfully',
  associationSuccess: 'Associated successfully',
  copySuccess: 'Copy Success',
  copyFail: 'Copy failed',
  noWebSocket: 'WebSocket is not supported',
  connection: 'Connection successful',
  systemException:
    'An exception occurred in the system! Remote control has been disconnected!',
  messageOne: 'Screen rotation detected! Please wait...',
  getPocoSuccess: 'Getting Poco Elements was successful!',
  getPocoFail:
    'Failed to get POCO Elements! Please make sure the corresponding game engine is open and connected to the Poco-SDK',
  pullFile: {
    success: 'Pulling the file was successful',
    fail: 'Failed to pull the file',
  },
  pushFile: {
    success: 'Uploading the file was successful!',
    fail: 'Uploading file failed! Needs to be filled with filenames',
  },
  getEle: {
    success: 'Getting native elements was successful!',
    fail: 'Failed to get the element! Please try it again',
  },
  install: {
    success: 'Installation successful!',
    fail: 'Installation failed!',
  },
  uninstall: {
    success: 'Uninstall successful!',
    fail: 'Uninstall failed!',
  },
  runOver: 'Run finished',
  getSuccess: 'Get Success!',
  getPsSuccess: 'Get snapshot was successful!',
  loadIng: 'Loading the application list, please wait...',
  messageTwo:
    'Automatic global proxy has been canceled, please configure the proxy manually',
  startUninstall: 'Starting to uninstall! Please wait...',
  failErr: 'Wrong file format!',
  addOne: 'Only one file can be added! Please remove the old file first',
  startInstall: 'Starting installation! Please wait...',
  high: 'High',
  middle: 'Middle',
  low: 'Low',
  deviceFail: 'This device is temporarily unavailable!',
  remoteAudio: 'Remote audio is on, please do not repeat!',
  audio: 'Remote audio transfer is connected!',
  audioFail: 'Remote audio transmission has been disconnected!',
  audioSuccess: 'Remote audio synchronization successful!',
  code: {
    elementsSnapshot: 'Element snapshot',
    eleName: 'Element name',
    eleNullName: 'The element name cannot be empty',
    inputName: 'Please input the name of the element',
    saveEle: 'Save as image element',
    preparingImager: 'Prepare image in...',
    systemVersion: 'System version',
    projectionMode: 'Projection mode',
    frameNumber: 'Screen casting frame number',
    manualRepair: 'Repair manually',
    fixBlackScreen: 'Fix black screen',
    fixTouch: 'Fix touch',
    fixScreen: 'Fix horizontal and vertical screen',
    remoteAudioTran: 'Remote audio transmission',
    batterySimulation: 'Battery Simulation',
    simulatePowerOutage: 'Simulate power outage',
    reset: 'reset',
    physicalLookup: 'Physical Lookup',
    BV: 'Brightness/Volume',
    dial: 'Dial',
    photograph: 'Take a picture',
    browser: 'Browser',
    LUS: 'Lock/Unlock Screen',
    remoteControlPanel: 'Panel',
    inputText: 'Input text',
    pleaseText: 'Input the text to send, CHS is supported',
    clear: 'Clear',
    send: 'Send',
    keyboard:
      'Clear input box and real-time input are only available when Sonic Keyboard is enable',
    startKeyboard: 'Enable Sonic Keyboard',
    stopKeyboard: 'Disable Sonic Keyboard',
    remoteADB: 'Remote ADB',
    noAgent: 'The Agent is not enabled!',
    UIAutomator2ServerInit: 'Initialize UIAutomator2Server',
    closeDriver: 'Stop UIAutomator2Server',
    closeDriverMessage: 'Stop UIAutomator2Server successful!',
    automaticInitialization: 'Next time input automatic initialization',
    scanQRCode: 'Scan QR code',
    errTitle:
      'Some models of OPPO and Vivo do not appear in the album after uploading QR code, need to restart to take effect',
    messageThree: 'Drag the QR code image here, or',
    messageFour: 'Only jpg/png files can be uploaded',
    fileTransfer: 'File transfer to each other',
    upFile: 'Upload a file',
    messageFive: 'Drag the file here, or',
    pleaseFilePath: 'Please input the upload destination path (plus file name)',
    filePath: 'Pull the file',
    pullFilePath: 'Please input the pull target path',
    installFile: 'Download file',
    app: 'Application',
    pushInstall: 'Upload to Install',
    apkFile: 'Drag the APK file here, or',
    onlyAPKFile: 'Only upload apk files',
    URLInstall: 'Install via URL',
    hint: 'Please input apk download link or local path',
    refresh: 'Refresh',
    appName: 'APP Name',
    packagesName: 'Package Name',
    version: 'Version',
    subversion: 'Subversion',
    nameSearch: 'Search by application name or package name',
    open: 'Open',
    unInstall: 'Uninstall',
    packet: 'Network',
    startPacket: 'Start network packet capture',
    downloadCertificate: 'Download certificate',
    cancelGlobalProxy: 'Cancel global proxy',
    proxyConnection: 'Proxy connection',
    useTeaching: 'Tutorial',
    connectWifi: 'Connect to Wifi',
    connectWifiText:
      "If you are not connected to Wifi, you need to go to the Wifi list to connect to your Wifi. wifi needs to be interoperable with Agent's network, click refresh after connecting to regain Wifi status",
    installCertificate: 'Install Certificate',
    installCertificateText:
      'The first time to capture the package need to install the certificate, click the download button to download the certificate and install. If the browser can not access, please make sure the Agent has closed the firewall.',
    startCapturing: 'Start capturing',
    startCapturingText:
      'Click to start grabbing packets, you can start to experience it! (default automatic global proxy, if you do not need to click the cancel global proxy button, and then go to the Wifi page to manually configure)',
    screenshotQuick: 'Screenshot',
    screenshot: 'Screenshot',
    clean: 'Clear',
    noScreenshots: 'No screenshots yet',
    savePicture: 'Save picture',
    precautions: 'Precautions',
    precautionsText:
      'This feature is still in Beta testing, temporarily blocking reboot, rm, su and other risky commands',
    inputSend: 'After entering the command, click Send or enter to send',
    enterInput: 'Please input the input filter text',
    UIAutomation: {
      UIAutomationName: 'Automation',
      testInfo: 'Test Case Details',
      clean: 'Unassociate',
      fatherPlayed: 'Belonging items',
    },
    associatedProject: 'Associated Project',
    chooseProject: 'Please choose the associated project',
    addCase: 'Add Test Case',
    hintText: 'Hint',
    hintMessage:
      'This function needs to be associated with a test case from above first',
    nativeControls: 'Native Elements',
    retrieveControlEle: 'Retrieve element',
    activity: 'Current Activity',
    webViewList: 'WebView list',
    classFilter: 'Input class or resource-id to filter',
    addControls: 'Add element',
    controlSnapshot: 'Element Snapshot',
    titleMessage: 'Save elements after associating with a project',
    pocoRecommend: 'poco recommend',
    pocoNull: 'No recommended syntax for poco yet',
    xpath: 'xpath recommend',
    xpathNull: 'No recommended syntax for xpath yet',
    absolutePath: 'absolute path',
    centerXY: 'center Point',
    label: {
      checkable: 'checkable',
      checked: 'checked',
      clickable: 'clickable',
      selected: 'selected',
      displayed: 'displayed',
      enabled: 'enable',
      focusable: 'focusable',
      focused: 'focused',
      longClickable: 'long-clickable',
      scrollable: 'scrollable',
    },
    subTitleText:
      'Please get the element first, this function needs to initialize the Driver',
    getEle: 'Get the element',
    poco: 'Poco Elements',
    getPoco: 'Get Poco element',
    pocoSDK: 'Poco-SDK Access Guide',
    moreFeaturesAdd: 'More features are being added...',
    getPocoSDKMessage:
      'Please get the Poco element first, this feature requires the engine to have access to the Poco-SDK',
    webView: {
      webDebug: 'Web debug',
      err: 'No webView process at the moment',
      getWeb: 'Get webView process',
      againGetWeb: 'Retrieve webView process',
      Untitled: 'No title',
      nowDebug: 'Debug now',
      return: 'Return',
      nowWeb: 'Current page',
      messageInfo:
        'If your browser is not compatible with this feature, please provide feedback to ',
      here: 'here',
    },
  },
};
const indexIOSTS = {
  contentText: 'Switching layout',
  successText: 'Switching success',
};
const settingIndexTS = {
  center: {
    background: 'Admin Center',
    rights: 'Permissions configuration',
    resource: 'Resource manage',
    roleText: 'Role manage',
    userCon: 'User Configuration',
    systemCon: 'System Configuration',
    scheduled: 'System timed tasks',
    remoteSettings: 'Remote Settings',
  },
  remote: {
    alertMsg:
      'It is used to configure the maximum occupation time of remote control. After this time, the current occupation will be automatically released and restored to online. (Only the remote control is affected, and the equipment running the test is not affected)',
    text: 'Maximum occupation time of remote control: ',
  },
};
const resourceTS = {
  syncSucceed: 'Sync successfully!',
  syncResource: 'Sync Resources',
  syncResourceInfo: 'Sync resource description',
  syncResourceInfoMessage:
    'Re-full update of all requested resource information in the application, general version updates need to be synchronized',
  pageData: {
    idText: 'Resource id',
    message: 'description',
    path: 'path',
    inputPathName: 'Input path name',
    callMethod: 'Call method',
    requiredText: 'Whether authentication is required',
  },
};
const roleTS = {
  dialogVisible: {
    addOrEdit: 'Add/Edit role',
    roleName: 'Role name',
    roleNoNull: 'Role name cannot be Empty',
    inputParam: 'Please input the parameter name',
    paramNoNull: 'The value of the parameter cannot be Empty',
    roleInfo: 'Please input a role description',
    addRole: 'Add a role',
  },
  pageData: {
    role: 'role',
    nameL: 'Name',
    delMessage: 'Delete this role?',
  },
};
const sysJobsTS = {
  code: {
    cleanFile: 'Clean up system files',
    cleanFileText:
      'Clean up the files such as pictures, videos or temporary apk packages generated during the testing process, and keep the number of days as [the interval between the previous two timed tasks and this timed task] days.',
    cleanResult: 'Clean test report',
    cleanResultText:
      'Clean test report, the number of days to keep is [the interval between the first two timed tasks and this timed task] days.',
    sendDayReport: 'Send daily report',
    sendDayReportText: 'Send the test daily report to the group robot.',
    sendWeekReport: 'Send weekly report',
    sendWeekReportText: 'Send test weekly report to group bot.',
  },
  page: {
    type: 'Type',
    nextTriggerDate: 'Next trigger date',
    editTime: 'Edit system timed task',
  },
};
const usersTS = {
  dialogVisible: {
    editUser: 'Edit user role',
    userName: 'Username',
    chooseUserName: 'Please choose a user role',
  },
  pageData: {
    userId: 'user id',
    userName: 'username',
    inputName: 'Input username',
    roleConfiguration: 'role configuration',
  },
};
const IOSRemote = {
  driverStatus: {
    success: 'Init WebDriverAgent successful!',
    fail: 'Init WebDriverAgent failed!',
  },
  eleScreen: {
    err: 'Get Element Screenshot failed!',
  },
  perfmon: 'Perf Monitor',
  startSimulating: 'Start simulating the positioning...',
  positioningRestored: 'Positioning has been resumed',
  loadingAppList: 'Loading the list of apps, please wait...',
  calibration: 'Calibration complete',
  clipboard: {
    SentSuccessfully: 'Sending clipboard was successful!',
    text: 'Getting clipboard text was successful!',
    operate: 'Clipboard operation',
    inputText: 'Please input the content you want to send to the clipboard',
    send: 'Send to clipboard',
    getText: 'Get clipboard text',
  },
  clarityAndFps: 'Clarity and FPS',
  calibrationCoordinates: 'Calibration Points',
  volume: 'volume',
  siri: {
    command: 'Siri command',
    inputCommand: 'Please input siri command, example: what day is it today?',
  },
  positioning: {
    mock: 'Simulate positioning',
    x: 'Longitude',
    y: 'Latitude',
    start: 'Start to simulating',
    end: 'resume positioning',
  },
  remoteWDA: 'Remote WDA',
  remoteSIB: 'Remote SIB',
  driverNotSuccess: 'driver was not initialized successfully',
  errLog: 'File interchange and crash log',
  waitOpen: 'This feature will be opened soon',
  moveIPA: 'Drag the ipa file here, or',
  onlyIPAFile: 'Only upload ipa files',
  installIPA: 'Install IPA',
  pleaseIPAFilePath: 'Please input ipa download link or local path',
  openWeb: 'Open browser',
  web: {
    openInput: 'Open the browser and input the URL',
  },
  messageStep:
    'Go to phone [Settings] -> [General] -> [VPN & Device Management / Profile & Device Management / Device Management / Profile] -> find mitmproxy certificate to install',
  trustCertificate: 'Trust Certificate',
  certificateStep:
    'Go to the bottom of [Settings] -> [General] -> [About this phone] -> [Certificate Trust Settings] to trust the corresponding certificate',
  startPacketMessage:
    'After clicking start packet capture, Wifi set manual proxy, connect to the corresponding ip and port in the upper right corner to start packet capture',
  filterClassOrName: 'Input class or name to filter',
  predicate: 'Predicate recommend',
  noRecommend: 'No recommended syntax for now',
};
export default {
  message: {
    robot,
    agent,
    common,
    devices,
    layout,
    form,
    dialog,
    routes,
    setting,
    androidTestCase,
    elements,
    globalParamsTs,
    homeTS,
    jobsTS,
    loginTS,
    modulesTS,
    packagesTS,
    projectIndexTS,
    publicStepTS,
    resultDetailTS,
    ResultsTS,
    stepListViewTS,
    testSuitesTS,
    versionsTS,
    androidRemoteTS,
    indexIOSTS,
    settingIndexTS,
    resourceTS,
    roleTS,
    sysJobsTS,
    usersTS,
    IOSRemote,
    script,
    perf,
    steps,
    code,
    token,
    project,
    pubSteps,
    testcase,
    suite,
    element,
  },
};
