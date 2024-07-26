 //bibliotecas e codigos de terceiros
 const formatador = (data) => {
    return {
        dia:{
            numerico: dayjs(data).format('DD'),
            semana: {
                curto: dayjs(data).format('ddd'),
                longo: dayjs(data).format('dddd'),
            }
        },
        mes: dayjs(data).format('MMMM'),
        hora: dayjs(data).format('HH:mm')
    }
 }


 // object {}
const atividade = {
    nome: "Almoço",
    data: new Date("2024-07-08 10:00"),
    finalizada: true
  }
  
  // lista, array, vetor []
  let atividades = [
    atividade,
    {
      nome: 'Academia em grupo',
      data: new Date("2024-07-09 12:00"),
      finalizada: false
    },
    {
      nome: 'Gamming session',
      data: new Date("2024-07-09 16:00"),
      finalizada: true
    },
  ]
  
atividades = []

  // arrow function
  const criarItemDeAtividade = (atividade) => {
  
    let input = `<input onchange="concluirAtividade(event)" 
    value="${atividade.data}"
    type="checkbox"
    `
  
    if(atividade.finalizada) {
      input += 'checked'
    }
  
    input += '>'

    const formatar = formatador(atividade.data);
  
    return `
    <div class="card-bg">
      ${input}

      <div>
        <svg  class="active" xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 50 50" width="20px" height="20px">
          <linearGradient id="I9GV0SozQFknxHSR6DCx5a" x1="9.858" x2="38.142" y1="9.858" y2="38.142" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#21ad64"/><stop offset="1" stop-color="#088242"/></linearGradient><path fill="url(#I9GV0SozQFknxHSR6DCx5a)" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"/><path d="M32.172,16.172L22,26.344l-5.172-5.172c-0.781-0.781-2.047-0.781-2.828,0l-1.414,1.414	c-0.781,0.781-0.781,2.047,0,2.828l8,8c0.781,0.781,2.047,0.781,2.828,0l13-13c0.781-0.781,0.781-2.047,0-2.828L35,16.172	C34.219,15.391,32.953,15.391,32.172,16.172z" opacity=".05"/><path d="M20.939,33.061l-8-8c-0.586-0.586-0.586-1.536,0-2.121l1.414-1.414c0.586-0.586,1.536-0.586,2.121,0	L22,27.051l10.525-10.525c0.586-0.586,1.536-0.586,2.121,0l1.414,1.414c0.586,0.586,0.586,1.536,0,2.121l-13,13	C22.475,33.646,21.525,33.646,20.939,33.061z" opacity=".07"/><path fill="#fff" d="M21.293,32.707l-8-8c-0.391-0.391-0.391-1.024,0-1.414l1.414-1.414c0.391-0.391,1.024-0.391,1.414,0	L22,27.758l10.879-10.879c0.391-0.391,1.024-0.391,1.414,0l1.414,1.414c0.391,0.391,0.391,1.024,0,1.414l-13,13	C22.317,33.098,21.683,33.098,21.293,32.707z"/>
        </svg>

        <svg  class="inactive" xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 50 28" width="30px" height="35px">
          <path d="M1.16,10.09c-.11,.62-.16,1.26-.16,1.91s.06,1.28,.16,1.91c.05,.27-.13,.53-.41,.58-.03,0-.06,0-.09,0-.24,0-.45-.17-.49-.41-.12-.68-.18-1.38-.18-2.08s.06-1.4,.18-2.08c.05-.27,.31-.46,.58-.41,.27,.05,.45,.31,.41,.58Zm1.13-4.28c.09,.06,.19,.09,.29,.09,.16,0,.31-.07,.41-.21,.74-1.06,1.65-1.97,2.7-2.71,.23-.16,.28-.47,.12-.7-.16-.23-.47-.28-.7-.12-1.15,.81-2.14,1.8-2.95,2.95-.16,.23-.1,.54,.12,.7Zm3.4,15.2c-1.06-.74-1.97-1.65-2.71-2.7-.16-.23-.47-.28-.7-.12-.23,.16-.28,.47-.12,.7,.81,1.15,1.8,2.14,2.95,2.95,.09,.06,.19,.09,.29,.09,.16,0,.31-.07,.41-.21,.16-.23,.1-.54-.12-.7Zm16.02-2.83c-.22-.16-.54-.1-.7,.12-.74,1.06-1.65,1.97-2.7,2.71-.23,.16-.28,.47-.12,.7,.1,.14,.25,.21,.41,.21,.1,0,.2-.03,.29-.09,1.15-.81,2.14-1.8,2.95-2.95,.16-.23,.1-.54-.12-.7Zm-7.8,4.65c-.62,.11-1.26,.16-1.91,.16s-1.28-.06-1.91-.16c-.27-.06-.53,.13-.58,.41-.05,.27,.13,.53,.41,.58,.68,.12,1.38,.18,2.08,.18s1.4-.06,2.08-.18c.27-.05,.45-.31,.41-.58-.05-.27-.31-.46-.58-.41ZM14.08,.18c-.68-.12-1.38-.18-2.08-.18s-1.4,.06-2.08,.18c-.27,.05-.45,.31-.41,.58,.04,.24,.25,.41,.49,.41,.03,0,.06,0,.09,0,.62-.11,1.26-.16,1.91-.16s1.28,.06,1.91,.16c.03,0,.06,0,.09,0,.24,0,.45-.17,.49-.41,.05-.27-.13-.53-.41-.58Zm4.23,2.81c1.06,.74,1.97,1.65,2.71,2.7,.1,.14,.25,.21,.41,.21,.1,0,.2-.03,.29-.09,.23-.16,.28-.47,.12-.7-.81-1.15-1.8-2.14-2.95-2.95-.22-.16-.54-.1-.7,.12-.16,.23-.1,.54,.12,.7Zm5.51,6.94c-.05-.27-.31-.46-.58-.41-.27,.05-.45,.31-.41,.58,.11,.62,.16,1.26,.16,1.91s-.06,1.28-.16,1.91c-.05,.27,.13,.53,.41,.58,.03,0,.06,0,.09,0,.24,0,.45-.17,.49-.41,.12-.68,.18-1.38,.18-2.08s-.06-1.4-.18-2.08Z"
          stroke="#a1a1aa" style="stroke: #ffffff; stroke:color(display-p3 0.6314 0.6314 0.6667); stroke-opacity:1;"
          stroke-width="2.0" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        <span>${atividade.nome}</span>
      </div>

      <time class="short">
        ${formatar.dia.semana.curto}.
        ${formatar.dia.numerico} <br>
        ${formatar.hora}
      </time>
      
      <time class="full">
        ${formatar.dia.semana.longo},
        dia ${formatar.dia.numerico}
        de ${formatar.mes}
        às ${formatar.hora}h
      </time>
    </div>
    `
  }
  
  
  const atualizarListaDeAtividades = () => {
      const section = document.querySelector('section')
      section.innerHTML = ''
      
      //verificar se a minha lista está vazia
      if(atividades.length == 0) {
        section.innerHTML = `<p>Nunhuma atividade cadastrada.</p>`
        return
      }
      
      for(let atividade of atividades) {
        section.innerHTML += criarItemDeAtividade(atividade)
      }
  
    } 
atualizarListaDeAtividades()

const salvarAtividade = (event) => {
    event.preventDefault()
    const dadosDoFormulario = new FormData(event.target)

    const nome = dadosDoFormulario.get('atividade')
    const dia = dadosDoFormulario.get('dia')
    const hora = dadosDoFormulario.get('hora')
    const data = `${dia} ${hora}`

    const novaAtividade = {
    //quando o nome da variavel for o mesmo que do objeto, pode deixar apenas um nome. 
        nome,
        data,
        finalizada: false
    }

    const atividadeExiste = atividades.find((atividade) => {
        return atividade.data == novaAtividade.data
    })
    if(atividadeExiste){
        return alert('Dia/hora não disponível')
    }


    atividades = [novaAtividade, ...atividades] //as redicencias "..." significa que esta pegando as atividades antigas e acresentando junto as novas
    atualizarListaDeAtividades()
}

const criarDiasSelecao = () => {
    const dias = [
        "2024-02-28",
        "2024-02-27"
    ]

    let diasSeleçao = ''

    for(let dia of dias) {
        const formatar = formatador(dia)
        const diaFormatado = `
        ${formatar.dia.numerico} de 
        ${formatar.mes}
        `
        diasSeleçao += `
        <option value="${dia}">${diaFormatado}</option>
        `
    }

    document
.querySelector('select[name="dia"]')
.innerHTML = diasSeleçao
}
criarDiasSelecao()



const criarHorasSelecao = () => {
    let horasDisponiveis = ''

    for(let i = 6; i < 23; i++) {
        const hora = String(i).padStart(2, '0')
        horasDisponiveis += `<option value="${hora}:00">${hora}:00</option>`
        horasDisponiveis += `<option value="${hora}:30">${hora}:30</option>`
        
    }


    document
    .querySelector('select[name="hora"]')
    .innerHTML = horasDisponiveis
}
criarHorasSelecao()

const concluirAtividade = (event) => {
    const input = event.target
    const dataDesteInput = input.value

    const atividade = atividades.find((atividade) => {
        return atividade.data == dataDesteInput
    })

    if(!atividade){
        return
    }

    atividade.finalizada = !atividade.finalizada
}