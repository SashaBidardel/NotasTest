 function notas(nota){

        if( nota<=3) {
            return "Su nota es muy deficiente";}

        if (nota<5) {
            return "Su nota es insuficiente";}
        if (nota<6){ return "Su nota es suficiente";
        }
        if (nota<7) {return "Su nota es bien";
        }
        if ( nota<9) {return "Su nota es notable";
        }
        if (nota<=10){ return "Su nota es sobresalinete";
    }
    
    

}
module.exports = notas;