export type education = {
  id: number;
  name: string;
  year: string;
  cgpa: number;
  degree: string;
  icon: string;
  isSchool: boolean;
};

export const education: education[] = [
  {
    id: 1,
    name: "Uka Tarsadiya University",
    year: "2020 - 2024",
    cgpa: 7.88,
    degree: "B.Tech Computer Engineering",
    icon: "🎓",
    isSchool: false,
  },
  {
    id: 2,
    name: "Dharmajivan Higher Secondary School",
    year: "2018 - 2020",
    cgpa: 68,
    degree: "12 Science",
    icon: "🏫",
    isSchool: true,
  },
];
