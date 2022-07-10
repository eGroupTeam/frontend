import styles from '/styles/Home.module.css';
import {Employee} from '@/interfaces/entities';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { useForm, SubmitHandler } from "react-hook-form";
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

type Props = {
  addEmployee(employee:Employee):void;
  close():void;
  open:boolean;
}

const EmployeeCreate:React.FC<Props> = (props) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Employee>();
  const onSubmit: SubmitHandler<Employee> = employee => {
    console.log("clicked");
    props.close();
    props.addEmployee(employee); 
    
  };
  const handleClose = () => {
    props.close();
  };
   
  return (
    <div className={styles.container}>
      
      <form onSubmit={handleSubmit(onSubmit)}>
      <Dialog open={props.open} onClose={handleClose}>
      <DialogTitle>新增員工</DialogTitle>
      <DialogContent>
        <TextField id="filled-basic" label="姓名" variant="outlined" {...register("name",{ required: true, minLength: 2 })}/><br/>
        {errors.name && <span>描述至少2個字<br/></span>}
        <TextField id="filled-basic" label="部門" variant="outlined" {...register("department",{ required: true})}/><br/>
        {errors.department && <span>部門不能為空<br/></span>}
        <TextField id="filled-basic" label="薪資" variant="outlined" type="number" {...register("wage",{min:0})}/><br/>
        {errors.wage && <span>薪資需至少大於0<br/></span>}
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={handleSubmit(onSubmit)}>送出</Button>
        <Button color="secondary" variant="contained" onClick={handleClose}>取消</Button>
      </DialogActions>
      </Dialog>
      </form>
      
    </div>
  )
}
export default EmployeeCreate