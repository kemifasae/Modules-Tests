module.exports =  class stringBuilder{
  constructor(str){
    this.str = [];
  }

  isEmpty(newstr){
    if (newstr.length === 0){
      return true
    }
    return false
  }

  put(newStr){
    this.str.push(newStr)
    return this
  }

  insert(index, new_str){
    let len = this.str.length

    if(index < 0){
      throw new Error('impossible index')
    }
    if(index>len){
      this.put(new_str)
      return this
    }

    this.str.splice(index, 0, new_str);
    return this
  }

  empty(){
    this.str = []
    return this
  }

  build(){
    let finString = this.str.join(' ')
    if(this.isEmpty(finString)) return('empty string')
    return finString
  }

}
