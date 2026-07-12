import employees from './employees.json';
import leaveBalances from './leaveBalances.json';
import holidayCalendar from './holidayCalendar.json';
import training from './training.json';
import payroll from './payroll.json';

type JsonFileName =
  | 'employees.json'
  | 'leaveBalances.json'
  | 'payroll.json'
  | 'holidayCalendar.json'
  | 'training.json';

export interface DataSource {
  id: string;
  keywords: string[];
  fileName: JsonFileName;
  data: unknown;
}

export const dataSources: DataSource[] = [
  {
    id: "employees",
    keywords: [
      "employee",
      "manager",
      "designation",
      "department",
      "profile",
      "team"
    ],
    fileName: "employees.json",
    data: employees,
  },
  {
    id: "leave",
    keywords: [
      "leave",
      "holiday",
      "vacation",
      "annual",
      "casual",
      "sick"
    ],
    fileName: "leaveBalances.json",
    data: leaveBalances,
  },
  {
    id: "payroll",
    keywords: [
      "salary",
      "pay",
      "payslip",
      "bonus",
      "tax"
    ],
    fileName: "payroll.json",
    data: payroll,
  },
  {
    id: "holidayCalendar",
    keywords: [
      "holiday",
      "calendar",
      "event",
      "celebration"
    ],
    fileName: "holidayCalendar.json",
    data: holidayCalendar,
  },
  {
    id: "training",
    keywords: [
      "training",
      "course",
      "workshop",
      "seminar"
    ],
    fileName: "training.json",
    data: training,
  },
];

const files = {
  "employees.json": employees,
  "leaveBalances.json": leaveBalances,
  "payroll.json": payroll,
  "holidayCalendar.json": holidayCalendar,
  "training.json": training
} as const;

export function loadDatasource(datasources: { fileName: JsonFileName }[]) {
  return datasources.map(item => files[item.fileName]);
}