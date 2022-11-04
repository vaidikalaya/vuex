
import {COUNTER_MUTATION_INCREMENT} from '../../constants';

export default{
    [COUNTER_MUTATION_INCREMENT](state){
        state.count++;
    }
}