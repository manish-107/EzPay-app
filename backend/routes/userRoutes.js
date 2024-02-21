import { signup } from "../controllers/usersContriller";
const router = express.Router();

router.route('/user/signup').post(signup);

export default router