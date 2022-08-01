    /**
     * reorder the list by putting the selected elements at the beginning of the list
     * @param list 
     * @param selected 
     * @returns a new list 
     */
    moveSelectedOnTop(list: any[], selected: Array<number|string>) {
        if(!selected?.length) {
            return list;
        }

        if(!list?.length) {
            return [];
        }

        const listCopy = list.map(ct => ct);

        // Retirer tous les éléments selectionnés de la liste 
        list = list.filter(ct =>  !selected?.includes(ct.id || ct.code));
    
        // Les inserer en tête de list 
        const  selectedElements =  listCopy.filter(ct =>  selected?.includes(ct.id || ct.code));

        list.unshift(...selectedElements || []);

        return list;
    }
