const router = express.Router();

router.route('/addUser').post(addUser);

export default router