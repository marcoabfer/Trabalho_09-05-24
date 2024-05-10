Função maiorData:
Utilização direta dos objetos Date como parâmetros da função.
Comparação de datas, que é possível porque os objetos Date são comparáveis em JavaScript.
Função calcularIntervalo:
Criação de objetos Date para representar as datas de início (dataAntiga) e fim (dataNova) do intervalo.
Cálculo da diferença entre duas datas em milissegundos, que é obtido subtraindo um objeto Date do outro, resultando em um valor numérico que representa a diferença em milissegundos.
Conversão dessa diferença em milissegundos para o número de dias, que é possível considerando que um dia tem 24 horas, 60 minutos, 60 segundos e 1000 milissegundos.
Função dataAtualFormatada:
Criação de um objeto Date para representar a data e hora atuais.
Utilização dos métodos getDate(), getMonth(), getFullYear(), getHours() e getMinutes() para obter respectivamente o dia do mês, o mês, o ano, a hora e os minutos atuais.
A função padStart() é usada para garantir que os valores tenham dois dígitos, adicionando um zero à esquerda se necessário.
