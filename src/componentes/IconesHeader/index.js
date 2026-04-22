function IconesHeader() {
    return(
         <ul className='icones'>
          {icones.map((icone) =>(
            <li><img src={icone}></img></li>
          )) }
        </ul>
    )
}