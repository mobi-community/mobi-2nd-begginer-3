import { useForm } from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import { schema } from "../../../utils/schema"

const Step3 = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({resolver: yupResolver(schema)})

    return(
    <form>
    <div>
    <label htmlFor="text">하고싶은 말</label>
    <textarea
      id="text"
      {...register("text")}
    />
    {errors.text && <div>{errors.text.message}</div>}
  </div>
  <button type="submit">회원가입</button>
  </form>
    )
}
export default Step3