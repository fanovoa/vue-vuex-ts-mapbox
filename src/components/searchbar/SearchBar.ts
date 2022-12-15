import { computed, defineComponent, ref } from 'vue'
import { usePlacesStore } from '@/composables';
import SearchResults from '@/components/search-results/SearchResults.vue';

SearchResults   

export default defineComponent({
name:'SearchBar',
components:{SearchResults },
setup(){

    const debounceTimeout = ref();
    const debaounceValue= ref('');

    const { searchPlacesByTerm } = usePlacesStore();

    return{
        debaounceValue,
        searchTerm: computed({
            get(){
                return debaounceValue.value;
            },
            set( val:string ){

                if(debounceTimeout.value) clearTimeout(debounceTimeout.value);

                debounceTimeout.value=setTimeout(() => {
                    debaounceValue.value=val;
                    searchPlacesByTerm( val );
                }, 500);
            }
        })  
    }
}
});