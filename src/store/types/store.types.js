export const TypesStore = {
  state: {
    //global cambia de acuerdo al contexto
    LANGUAGE: `GLOBAL:LANGUAGE`,
    STUDENTS: `GLOBAL:STUDENTS`,
    PSTUDENTS: `GLOBAL:PSTUDENTS`,
    DSTUDENTS: `GLOBAL:DSTUDENTS`
  },
  actions: {
    GET_STUDENTS: `GLOBAL:GET_STUDENTS`,
    POST_STUDENTS: `GLOBAL:POST_STUDENTS`,
    DELETED_STUDENTS: `GLOBAL:DELETED_STUDENTS`
  },
  mutations: {
    SET_LANGUAGE: `GLOBAL:SET_LANGUAGE`,
    SET_STUDENTS: `GLOBAL:GET_STUDENTS`,
    SETT_PSTUDENT: `GLOBAL:POST_STUDENTS`,
    SETT_DSTUDENT: `GLOBAL:DELETED_STUDENTS`
  }
};
