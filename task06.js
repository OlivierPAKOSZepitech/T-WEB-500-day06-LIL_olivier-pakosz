export function objectsDeeplyEqual(cmp1, cmp2) {
    if (cmp1 === cmp2)
        return true
    else if (cmp1.length != cmp2.length)
        return false
            
    else if (typeof cmp1 != typeof cmp2)
        return false
}
