
export const getColor = (element) =>{
    element = element.toLowerCase()
    if (element === 'fire'){
        return "text-red-500"
    }
    else if (element === 'water'){
        return "text-sky-500"
    }
    else if (element === 'grass'){
        return "text-green-500"
    }
    else if (element === 'fighting'){
        return "text-red-800"
    }
    else if (element === 'lightning'){
        return "text-yellow-500"
    }
    else if (element === 'fairy'){
        return "text-pink-400"
    }
    else if (element === 'psychic'){
        return "text-violet-500"
    }
    else if (element === 'dragon'){
        return "text-orange-500"
    }
    else if (element === 'metal'){
        return "text-stone-400"
    }
    else if (element === 'darkness'){
        return "text-stone-600"
    }
    else if (element === 'colorless'){
        return "text-black"
    }
}

