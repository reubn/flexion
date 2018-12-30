export default func => function passInMixin(){
 return func.call(this, this)
}
