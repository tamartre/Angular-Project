
export class Student{
    id:any;
    firstName:any;
    lastName:any;
    address:any;
    phone:any;
    isActive:any;
    marksAverage:any;
    leaveDate?: any;

    constructor(firstName:"",lastName:"",address:"",phone:"",isActive:false,marksAverage:0){
        this.firstName=firstName;
        this.lastName=lastName;
        this.address=address;
        this.phone=phone;
        this.isActive=isActive;
        this.marksAverage=marksAverage;
    }

}