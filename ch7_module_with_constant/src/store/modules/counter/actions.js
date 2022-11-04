
import {COUNTER_ACTION_INCREMENT} from '../../constants';

export default{
    [COUNTER_ACTION_INCREMENT](context){
        context.commit('increment')
    }
} 