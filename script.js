// TaskHive JavaScript Logic
// Selecting all interactive elements

document.addEventListener('DOMContentLoaded', () => {
  // --- Sidebar Navigation ---
  const navDashboard = document.getElementById('nav-dashboard');
  const navMessages = document.getElementById('nav-messages');
  const navTasks = document.getElementById('nav-tasks'); // Active by default
  const navDocs = document.getElementById('nav-docs');
  const navCalendar = document.getElementById('nav-calendar');
  const navSettings = document.getElementById('nav-settings');
  const navHelp = document.getElementById('nav-help');
  const navLogout = document.getElementById('nav-logout');

  // --- Top Navigation ---
  const notificationsBtn = document.getElementById('notifications');
  const userProfileBtn = document.getElementById('user-profile');

  // --- View Toggles ---
  const viewTableBtn = document.getElementById('view-table');
  const viewBoardBtn = document.getElementById('view-board'); // Active by default
  const viewTimelineBtn = document.getElementById('view-timeline');

  // --- Header Actions ---
  const actionFilterBtn = document.getElementById('action-filter');
  const actionSortBtn = document.getElementById('action-sort');
  const actionSearchBtn = document.getElementById('action-search');
  const btnNewTask = document.getElementById('btn-new-task'); // Main "New Task" button

  // --- Board Column "Add Task" Buttons ---
  // Using IDs for specific columns
  const btnAddTodo = document.getElementById('btn-add-todo');
  const btnAddInprogress = document.getElementById('btn-add-inprogress');
  const btnAddCompleted = document.getElementById('btn-add-completed');
  const btnAddOverdue = document.getElementById('btn-add-overdue');
  // Or select them all as a group if generic handling is desired later
  const addTaskButtons = document.querySelectorAll('.btn-secondary');

  // --- Board Column Containers (for Drag & Drop / Appending) ---
  const tasksTodoContainer = document.getElementById('tasks-todo');
  const tasksInprogressContainer = document.getElementById('tasks-inprogress');
  const tasksCompletedContainer = document.getElementById('tasks-completed');
  const tasksOverdueContainer = document.getElementById('tasks-overdue');
  const allColumns = document.querySelectorAll('.column');

  // --- Modal Elements ---
  const modalOverlay = document.getElementById('modal-overlay');
  const closeModalBtn = document.getElementById('close-modal');
  const addTaskForm = document.getElementById('add-task-form');
  const taskTitleInput = document.getElementById('task-title');
  const taskDescInput = document.getElementById('task-desc');
  const taskStartDateInput = document.getElementById('task-start-date');
  const taskEndDateInput = document.getElementById('task-end-date');
  const taskStatusSelect = document.getElementById('task-status'); // Custom select trigger
  const btnCancel = document.getElementById('btn-cancel');
  const btnCreateTask = document.getElementById('btn-create-task');

  // --- Action Popover ---
  const actionPopover = document.getElementById('action-popover');
  // We will need to select task icons dynamically as they are many and can be created
  // const taskIcons = document.querySelectorAll('.task-icon'); 

  // Initialize Icons
  lucide.createIcons();

  console.log('TaskHive: All elements selected and ready.');
});
