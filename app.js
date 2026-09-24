const state = {
  lang: "es",
  activeSlot: null,
  selectedBase: null,
  items: [],
  filtered: [],
  build: {}
};

const I18N = {
  es: {
    title:"Albion Build Creator", subtitle:"Creador de builds para Albion Online",
    buildNamePlaceholder:"Nombre de la build", bag:"Bolsa", head:"Cabeza", cape:"Capa",
    weapon:"Arma", armor:"Pecho", offhand:"Secundaria", potion:"Poción", shoes:"Botas", food:"Comida",
    selectWeapon:"Seleccionar objeto", selectorHelp:"Busca por nombre o filtra por categoría.", offhandCompatibility:"Con un arma de una mano puedes elegir cualquier secundaria válida.",
    close:"Cerrar", cancel:"Cancelar", searchPlaceholder:"Buscar objeto...", chooseVariant:"Configura el tier, encantamiento y calidad.", equipmentVariantHelp:"Elige la variante que quieres añadir a la build.", consumableVariantHelp:"Este objeto no utiliza encantamiento ni calidad.",
    savePreset:"Guardar como preset", newBuild:"Nueva build", presets:"Presets", presetsHelp:"Guarda builds para reutilizarlas más tarde.",
    library:"Biblioteca", libraryHelp:"Organiza tus builds y composiciones.", exportAll:"Exportar todo", importAll:"Importar todo", exportDone:"Datos exportados correctamente.", importDone:"Datos importados correctamente.", importInvalid:"El archivo no es un respaldo válido de Albion Build Creator.", importConfirm:"Importar este respaldo reemplazará tus presets y composiciones actuales. ¿Continuar?", myPresets:"Mis presets", myCompositions:"Mis composiciones", myZvZCompositions:"Mis composiciones ZvZ",
    noPresets:"Todavía no hay presets guardados.", noCompositions:"Todavía no hay composiciones.", compositionsHelp:"Organiza presets por rol.",
    newComposition:"Nueva composición", newZvZComposition:"Nueva composición ZvZ", compositionName:"Nombre de la composición", player:"Jugador", role:"Rol", preset:"Preset", addMember:"Añadir miembro", saveComposition:"Guardar composición", cancel:"Cancelar",
    compositionSaved:"Composición guardada: ", presetsCount:"presets", edit:"Editar", view:"Ver", backToCreator:"Volver al creador", saveNames:"Guardar nombres", zvzNamePlaceholder:"Nombre del jugador", zvzPreset:"Preset", zvzCompositionHelp:"Selecciona presets para tu composición ZvZ. Los nombres se ponen desde Ver.", compositionPreview:"Vista previa de la composición", players:"jugadores",
    load:"Cargar", duplicate:"Duplicar", delete:"Eliminar", saved:"Preset guardado: ",
    voiceBuild:"Crear build por voz", voiceListeningTitle:"Build por voz", voiceHelp:"Di los objetos de la build en cualquier orden.", voiceReady:"Pulsa el micrófono y habla.", startListening:"Escuchar", stopListening:"Parar", applyVoice:"Aplicar a la build", voiceUnsupported:"Tu navegador no admite reconocimiento de voz.", voiceListening:"Escuchando...", voiceNothing:"No he entendido ningún objeto.", voiceFound:"He encontrado:", voiceAmbiguous:"No he podido identificar con seguridad:", voiceApplied:"Build aplicada desde voz.", voiceStarting:"Activando micrófono...", voiceNoMatch:"No he detectado una frase clara. Prueba a hablar más cerca del micrófono.", voiceAudioStart:"Micrófono activo. Habla ahora.", voiceStartError:"No se pudo iniciar el reconocimiento.",
    allCategories:"Todas las categorías", loading:"Cargando objetos...", tier:"Tier",
    enchantment:"Encantamiento", quality:"Calidad", add:"Añadir al build",
    loadingData:"Cargando base de objetos de Albion...", dataReady:"Objetos cargados: ",
    noResults:"No se han encontrado objetos.", selected:"Seleccionado: ", twoHanded:"Arma a dos manos", offhandNeedsWeapon:"Selecciona primero un arma de una mano.", offhandLocked:"La secundaria no está disponible con esta arma."
  },
  en: {
    title:"Albion Build Creator", subtitle:"Albion Online build creator",
    buildNamePlaceholder:"Build name", bag:"Bag", head:"Head", cape:"Cape",
    weapon:"Weapon", armor:"Armor", offhand:"Off-hand", potion:"Potion", shoes:"Shoes", food:"Food",
    selectWeapon:"Select item", selectorHelp:"Search by name or filter by category.", offhandCompatibility:"With a one-handed weapon you can choose any valid off-hand.",
    close:"Close", cancel:"Cancel", searchPlaceholder:"Search item...", chooseVariant:"Configure tier, enchantment and quality.", equipmentVariantHelp:"Choose the variant you want to add to the build.", consumableVariantHelp:"This item does not use enchantment or quality.",
    savePreset:"Save as preset", newBuild:"New build", presets:"Presets", presetsHelp:"Save builds to reuse them later.",
    library:"Library", libraryHelp:"Organize your builds and compositions.", exportAll:"Export all", importAll:"Import all", exportDone:"Data exported successfully.", importDone:"Data imported successfully.", importInvalid:"This file is not a valid Albion Build Creator backup.", importConfirm:"Importing this backup will replace your current presets and compositions. Continue?", myPresets:"My presets", myCompositions:"My compositions", myZvZCompositions:"My ZvZ compositions",
    noPresets:"No saved presets yet.", noCompositions:"No compositions yet.", compositionsHelp:"Organize presets by role.",
    newComposition:"New composition", newZvZComposition:"New ZvZ composition", compositionName:"Composition name", player:"Player", role:"Role", preset:"Preset", addMember:"Add member", saveComposition:"Save composition", cancel:"Cancel",
    compositionSaved:"Composition saved: ", presetsCount:"presets", edit:"Edit", view:"View", backToCreator:"Back to creator", saveNames:"Save names", zvzNamePlaceholder:"Player name", zvzPreset:"Preset", zvzCompositionHelp:"Select presets for your ZvZ composition. Names are entered from View.", compositionPreview:"Composition preview", players:"players",
    load:"Load", duplicate:"Duplicate", delete:"Delete", saved:"Preset saved: ",
    voiceBuild:"Create build by voice", voiceListeningTitle:"Build by voice", voiceHelp:"Say the build items in any order.", voiceReady:"Press the microphone and speak.", startListening:"Listen", stopListening:"Stop", applyVoice:"Apply to build", voiceUnsupported:"Your browser does not support speech recognition.", voiceListening:"Listening...", voiceNothing:"I could not understand any item.", voiceFound:"Found:", voiceAmbiguous:"I could not identify with confidence:", voiceApplied:"Build applied from voice.", voiceStarting:"Activating microphone...", voiceNoMatch:"I did not detect a clear phrase. Try speaking closer to the microphone.", voiceAudioStart:"Microphone active. Speak now.", voiceStartError:"Could not start speech recognition.",
    allCategories:"All categories", loading:"Loading items...", tier:"Tier",
    enchantment:"Enchantment", quality:"Quality", add:"Add to build",
    loadingData:"Loading Albion item database...", dataReady:"Items loaded: ",
    noResults:"No items found.", selected:"Selected: ", twoHanded:"Two-handed weapon", offhandNeedsWeapon:"Select a one-handed weapon first.", offhandLocked:"Off-hand is not available with this weapon."
  }
};

const PRESETS_KEY = "albion-build-creator-presets-v1";
const COMPOSITIONS_KEY = "albion-build-creator-compositions-v1";
const ZVZ_COMPOSITIONS_KEY = "albion-build-creator-zvz-compositions-v1";

const SLOT_LABELS = {
  bag:"bag", head:"head", cape:"cape", mainhand:"weapon", armor:"armor",
  offhand:"offhand", potion:"potion", shoes:"shoes", food:"food"
};

const $ = (s) => document.querySelector(s);

function t(key){ return I18N[state.lang][key] ?? key; }
function getPresets(){
  try{ return JSON.parse(localStorage.getItem(PRESETS_KEY) || "[]"); }catch{ return []; }
}

function savePresets(list){
  localStorage.setItem(PRESETS_KEY, JSON.stringify(list));
}

function getCompositions(){
  try{ return JSON.parse(localStorage.getItem(COMPOSITIONS_KEY) || "[]"); }catch{ return []; }
}

function saveCompositions(list){
  localStorage.setItem(COMPOSITIONS_KEY, JSON.stringify(list));
}

function getZvZCompositions(){
  try{ return JSON.parse(localStorage.getItem(ZVZ_COMPOSITIONS_KEY) || "[]"); }catch{ return []; }
}
function saveZvZCompositions(list){
  localStorage.setItem(ZVZ_COMPOSITIONS_KEY, JSON.stringify(list));
}


function getBackupData(){
  return {
    app: "Albion Build Creator",
    formatVersion: 1,
    exportedAt: new Date().toISOString(),
    presets: getPresets(),
    compositions: getCompositions(),
    zvzCompositions: getZvZCompositions(),
    currentBuild: JSON.parse(JSON.stringify(state.build || {})),
    currentBuildName: document.querySelector("#buildName")?.value || ""
  };
}

function exportAllData(){
  const data=getBackupData();
  const blob=new Blob([JSON.stringify(data,null,2)],{type:"application/json;charset=utf-8"});
  const url=URL.createObjectURL(blob);
  const a=document.createElement("a");
  const stamp=new Date().toISOString().replace(/[:.]/g,"-");
  a.href=url;
  a.download=`albion-build-creator-backup-${stamp}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  const status=$("#status");
  if(status) status.textContent=t("exportDone");
}

function isArrayOfObjects(value){
  return Array.isArray(value) && value.every(x=>x && typeof x === "object" && !Array.isArray(x));
}

function importAllData(file){
  if(!file) return;
  const reader=new FileReader();
  reader.onload=()=>{
    try{
      const data=JSON.parse(reader.result);
      const valid=data && data.app === "Albion Build Creator" && data.formatVersion === 1
        && isArrayOfObjects(data.presets)
        && isArrayOfObjects(data.compositions)
        && isArrayOfObjects(data.zvzCompositions);
      if(!valid){ alert(t("importInvalid")); return; }
      if(!confirm(t("importConfirm"))) return;

      savePresets(data.presets);
      saveCompositions(data.compositions);
      saveZvZCompositions(data.zvzCompositions);
      state.build=JSON.parse(JSON.stringify(data.currentBuild || {}));
      $("#buildName").value=data.currentBuildName || "";
      syncWeaponSlots();
      renderBuild();
      renderPresets();
      renderCompositions();
      renderZvZCompositions();
      state.activeSlot=null;
      state.selectedBase=null;
      $("#selector")?.classList.add("hidden");
      $("#itemEditor")?.classList.add("hidden");
      $("#compositionPreview")?.classList.add("hidden");
      document.querySelectorAll(".slot").forEach(x=>x.classList.remove("selected"));
      setLibraryTab("presets");
      const status=$("#status");
      if(status) status.textContent=t("importDone");
    }catch(err){
      alert(t("importInvalid"));
    }
  };
  reader.readAsText(file);
}

let editingCompositionId = null;
let editingZvZCompositionId = null;
let viewedCompositionId = null;
let viewedZvZCompositionId = null;

function renderCompositions(){
  const box = $("#compositionList");
  const compositions = getCompositions();
  const count = $("#compositionCount");
  if(count) count.textContent = compositions.length;
  if(!compositions.length){
    box.innerHTML = `<div class="library-empty"><div class="library-empty-icon">＋</div><strong>${escapeHtml(t("noCompositions"))}</strong><p>${escapeHtml(t("compositionsHelp"))}</p></div>`;
    return;
  }
  box.innerHTML = compositions.map(c=>`
    <div class="composition-card">
      <div><strong>${escapeHtml(c.name)}</strong><small>${(c.members||[]).length} ${escapeHtml(t("presetsCount"))}</small></div>
      <details class="action-menu">
        <summary class="ghost action-menu-trigger" aria-label="Más opciones">...</summary>
        <div class="action-menu-dropdown">
          <button class="ghost" type="button" data-view-composition="${escapeHtml(c.id)}">${escapeHtml(t("view"))}</button>
          <button class="ghost" type="button" data-duplicate-composition="${escapeHtml(c.id)}">${escapeHtml(t("duplicate"))}</button>
          <button class="ghost" type="button" data-edit-composition="${escapeHtml(c.id)}">${escapeHtml(t("edit"))}</button>
          <button class="ghost danger" type="button" data-delete-composition="${escapeHtml(c.id)}">${escapeHtml(t("delete"))}</button>
        </div>
      </details>
    </div>`).join("");
  box.querySelectorAll("[data-view-composition]").forEach(b=>b.addEventListener("click",()=>showCompositionPreview(b.getAttribute("data-view-composition"))));
  box.querySelectorAll("[data-duplicate-composition]").forEach(b=>b.addEventListener("click",()=>duplicateComposition(b.getAttribute("data-duplicate-composition"))));
  box.querySelectorAll("[data-edit-composition]").forEach(b=>b.addEventListener("click",()=>openCompositionEditor(b.getAttribute("data-edit-composition"))));
  box.querySelectorAll("[data-delete-composition]").forEach(b=>b.addEventListener("click",()=>deleteComposition(b.getAttribute("data-delete-composition"))));
}

function openCompositionEditor(id=null){
  editingZvZCompositionId=null;
  const composition = id ? getCompositions().find(x=>x.id===id) : null;
  editingCompositionId = composition?.id || null;
  const name = composition?.name || "";
  const members = composition?.members || [];
  const presets = getPresets();
  const panel = $("#compositionsPanel");
  panel.innerHTML = `
    <div class="composition-editor">
      <input id="compositionName" class="composition-name" maxlength="80" placeholder="${escapeHtml(t("compositionName"))}" value="${escapeHtml(name)}">
      <div id="compositionMembers" class="composition-members"></div>
      <div class="composition-add-row composition-add-row-simple">
        <input id="memberRole" maxlength="40" placeholder="${escapeHtml(t("role"))}">
        <select id="memberPreset">${presets.map(p=>`<option value="${escapeHtml(p.id)}">${escapeHtml(p.name)}</option>`).join("")}</select>
        <button id="addMember" class="ghost" type="button">${escapeHtml(t("addMember"))}</button>
      </div>
      <div class="composition-actions">
        <button id="saveComposition" class="primary" type="button">${escapeHtml(t("saveComposition"))}</button>
        <button id="cancelComposition" class="ghost" type="button">${escapeHtml(t("cancel"))}</button>
      </div>
    </div>`;
  const working = members.map(m=>({...m}));
  panel._members = working;
  renderCompositionMembers();
  $("#addMember").addEventListener("click",()=>{
    const presetId=$("#memberPreset").value;
    if(!presetId) return;
    panel._members.push({id:Date.now().toString(36)+Math.random().toString(36).slice(2,5), role:$("#memberRole").value.trim() || "-", presetId});
    $("#memberRole").value=""; renderCompositionMembers();
  });
  $("#saveComposition").addEventListener("click",saveCompositionEditor);
  $("#cancelComposition").addEventListener("click",()=>{ editingCompositionId=null; hideCompositionPreview(); resetCompositionPanel(); renderCompositions(); });
}

function renderCompositionMembers(){
  const panel=$("#compositionsPanel"); const box=$("#compositionMembers"); if(!box) return;
  const presets=getPresets(); const members=panel._members||[];
  if(!members.length){ box.innerHTML=`<div class="library-empty compact">${escapeHtml(t("compositionsHelp"))}</div>`; return; }
  box.innerHTML=members.map((m,i)=>{ const p=presets.find(x=>x.id===m.presetId); return `<div class="composition-member"><div><strong>${i+1}. ${escapeHtml(p?.name || "?")}</strong><small>${escapeHtml(m.role || "-")}</small></div><button class="ghost danger" type="button" data-remove-member="${i}">×</button></div>`; }).join("");
  box.querySelectorAll("[data-remove-member]").forEach(b=>b.addEventListener("click",()=>{ members.splice(Number(b.dataset.removeMember),1); renderCompositionMembers(); }));
}

function resetCompositionPanel(){
  const panel=$("#compositionsPanel");
  if(!panel) return;
  panel.innerHTML = `<div id="compositionList"></div><button id="newComposition" class="primary library-new" type="button" data-i18n="newComposition">${escapeHtml(t("newComposition"))}</button>`;
  $("#newComposition").addEventListener("click",()=>openCompositionEditor());
}

function resetZvZPanel(){
  const panel=$("#zvzPanel");
  if(!panel) return;
  panel.innerHTML = `<div id="zvzList"></div><button id="newZvZComposition" class="primary library-new" type="button" data-i18n="newZvZComposition">${escapeHtml(t("newZvZComposition"))}</button>`;
  $("#newZvZComposition").addEventListener("click",()=>openZvZEditor());
}

function saveCompositionEditor(){
  const panel=$("#compositionsPanel"); const name=$("#compositionName").value.trim() || `${t("myCompositions")} ${getCompositions().length+1}`;
  const list=getCompositions(); const composition={id:editingCompositionId || Date.now().toString(36)+Math.random().toString(36).slice(2,7),name,createdAt:new Date().toISOString(),members:JSON.parse(JSON.stringify(panel._members||[]))};
  const idx=list.findIndex(x=>x.id===composition.id); if(idx>=0) list[idx]=composition; else list.unshift(composition);
  saveCompositions(list.slice(0,50));
  editingCompositionId=null;
  viewedCompositionId=null;
  viewedZvZCompositionId=null;
  hideCompositionPreview();
  resetCompositionPanel();
  setLibraryTab("compositions");
  renderCompositions();
  $("#status").textContent=`${t("compositionSaved")}${name}`;
}

function deleteComposition(id){ if(viewedCompositionId===id) hideCompositionPreview(); saveCompositions(getCompositions().filter(x=>x.id!==id)); renderCompositions(); }

function renderZvZCompositions(){
  const box = $("#zvzList"); const list = getZvZCompositions(); const count = $("#zvzCount");
  if(count) count.textContent = list.length;
  if(!list.length){ box.innerHTML = `<div class="library-empty"><div class="library-empty-icon">＋</div><strong>${escapeHtml(t("noCompositions"))}</strong><p>${escapeHtml(t("zvzCompositionHelp"))}</p></div>`; return; }
  box.innerHTML = list.map(c=>`<div class="composition-card"><div><strong>${escapeHtml(c.name)}</strong><small>${(c.members||[]).length} ${escapeHtml(t("players"))}</small></div><details class="action-menu"><summary class="ghost action-menu-trigger" aria-label="Más opciones">...</summary><div class="action-menu-dropdown"><button class="ghost" type="button" data-view-zvz="${escapeHtml(c.id)}">${escapeHtml(t("view"))}</button><button class="ghost" type="button" data-duplicate-zvz="${escapeHtml(c.id)}">${escapeHtml(t("duplicate"))}</button><button class="ghost" type="button" data-edit-zvz="${escapeHtml(c.id)}">${escapeHtml(t("edit"))}</button><button class="ghost danger" type="button" data-delete-zvz="${escapeHtml(c.id)}">${escapeHtml(t("delete"))}</button></div></details></div>`).join("");
  box.querySelectorAll("[data-view-zvz]").forEach(b=>b.addEventListener("click",()=>showZvZPreview(b.getAttribute("data-view-zvz"))));
  box.querySelectorAll("[data-duplicate-zvz]").forEach(b=>b.addEventListener("click",()=>duplicateZvZ(b.getAttribute("data-duplicate-zvz"))));
  box.querySelectorAll("[data-edit-zvz]").forEach(b=>b.addEventListener("click",()=>openZvZEditor(b.getAttribute("data-edit-zvz"))));
  box.querySelectorAll("[data-delete-zvz]").forEach(b=>b.addEventListener("click",()=>deleteZvZ(b.getAttribute("data-delete-zvz"))));
}

function openZvZEditor(id=null){
  editingCompositionId=null;
  const composition=id?getZvZCompositions().find(x=>x.id===id):null; editingZvZCompositionId=composition?.id||null;
  const panel=$("#zvzPanel"), presets=getPresets(); panel.innerHTML=`<div class="composition-editor"><input id="zvzCompositionName" class="composition-name" maxlength="80" placeholder="${escapeHtml(t("compositionName"))}" value="${escapeHtml(composition?.name||"")}"><div class="zvz-editor-help">${escapeHtml(t("zvzCompositionHelp"))}</div><div id="zvzMembers" class="composition-members"></div><div class="composition-add-row zvz-add-row"><select id="zvzPreset">${presets.map(p=>`<option value="${escapeHtml(p.id)}">${escapeHtml(p.name)}</option>`).join("")}</select><button id="addZvZMember" class="ghost" type="button">${escapeHtml(t("addMember"))}</button></div><div class="composition-actions"><button id="saveZvZ" class="primary" type="button">${escapeHtml(t("saveComposition"))}</button><button id="cancelZvZ" class="ghost" type="button">${escapeHtml(t("cancel"))}</button></div></div>`;
  panel._members=(composition?.members||[]).map(m=>({...m})); renderZvZMembers();
  $("#addZvZMember").addEventListener("click",()=>{const presetId=$("#zvzPreset").value;if(!presetId)return;panel._members.push({id:Date.now().toString(36)+Math.random().toString(36).slice(2,5),presetId,displayName:""});renderZvZMembers();});
  $("#saveZvZ").addEventListener("click",saveZvZEditor); $("#cancelZvZ").addEventListener("click",()=>{editingZvZCompositionId=null;resetZvZPanel();renderZvZCompositions();});
}

function renderZvZMembers(){
  const panel=$("#zvzPanel"),box=$("#zvzMembers");if(!box)return;const presets=getPresets(),members=panel._members||[];
  if(!members.length){box.innerHTML=`<div class="library-empty compact">${escapeHtml(t("zvzCompositionHelp"))}</div>`;return;}
  box.innerHTML=members.map((m,i)=>{const p=presets.find(x=>x.id===m.presetId);return `<div class="composition-member"><div><strong>${i+1}. ${escapeHtml(p?.name||"?")}</strong><small>${escapeHtml(t("zvzPreset"))}</small></div><button class="ghost danger" type="button" data-remove-zvz-member="${i}">×</button></div>`;}).join("");
  box.querySelectorAll("[data-remove-zvz-member]").forEach(b=>b.addEventListener("click",()=>{members.splice(Number(b.getAttribute("data-remove-zvz-member")),1);renderZvZMembers();}));
}

function saveZvZEditor(){
  const panel=$("#zvzPanel"),name=$("#zvzCompositionName").value.trim()||`${t("myZvZCompositions")} ${getZvZCompositions().length+1}`,list=getZvZCompositions();
  const composition={id:editingZvZCompositionId||Date.now().toString(36)+Math.random().toString(36).slice(2,7),name,createdAt:new Date().toISOString(),members:JSON.parse(JSON.stringify(panel._members||[]))};
  const idx=list.findIndex(x=>x.id===composition.id);if(idx>=0)list[idx]=composition;else list.unshift(composition);saveZvZCompositions(list.slice(0,50));
  editingZvZCompositionId=null;
  viewedZvZCompositionId=null;
  viewedCompositionId=null;
  hideCompositionPreview();
  resetZvZPanel();
  setLibraryTab("zvz");
  renderZvZCompositions();
  $("#status").textContent=`${t("compositionSaved")}${name}`;
}

function deleteZvZ(id){if(viewedZvZCompositionId===id)hideCompositionPreview();saveZvZCompositions(getZvZCompositions().filter(x=>x.id!==id));renderZvZCompositions();}

function showZvZPreview(id){
  const composition=getZvZCompositions().find(x=>x.id===id);if(!composition)return;viewedZvZCompositionId=id;viewedCompositionId=null;
  const creator=$("#buildCreatorView"),preview=$("#compositionPreview"),workspace=document.querySelector(".workspace"),presets=getPresets(),members=composition.members||[];
  const slotOrder=["mainhand","offhand","head","armor","shoes","cape","bag","potion","food"];
  preview.innerHTML=`<div class="composition-preview-head"><div><div class="preview-kicker">${escapeHtml(t("compositionPreview"))} · ZvZ</div><h2>${escapeHtml(composition.name)}</h2><p>${members.length} ${escapeHtml(t("players"))}</p></div><button id="closeCompositionPreview" class="ghost" type="button">${escapeHtml(t("backToCreator"))}</button></div><div class="zvz-build-list">${members.length?members.map((member,index)=>{const preset=presets.find(p=>p.id===member.presetId),build=preset?.build||{},currentName=member.displayName||`${t("player")} ${index+1}`;return `<article class="zvz-build-row"><div class="zvz-build-number">${index+1}</div><div class="zvz-build-name"><input class="zvz-player-name" data-zvz-name="${escapeHtml(member.id)}" maxlength="40" value="${escapeHtml(currentName)}" placeholder="${escapeHtml(t("zvzNamePlaceholder"))}"><small>${escapeHtml(preset?.name||"-")}</small></div><div class="composition-build-grid">${slotOrder.map(slot=>{const item=build[slot];if(slot==="offhand"&&(!item||(build.mainhand&&item.id===build.mainhand.id)))return "";if(!item)return "";return `<div class="composition-icon" title="${escapeHtml(item.name||"")}"><img src="${iconUrl(item.id,item.enchant||0,item.quality||1)}" alt="${escapeHtml(item.name||"")}" onerror="this.style.opacity='.25'"></div>`;}).join("")}</div></article>`;}).join(""): `<div class="library-empty"><strong>${escapeHtml(t("noCompositions"))}</strong></div>`}</div><div class="zvz-preview-actions"><button id="saveZvZNames" class="primary" type="button">${escapeHtml(t("saveNames"))}</button></div>`;
  creator.classList.add("hidden");preview.classList.remove("hidden");workspace?.classList.add("preview-mode");$("#selector")?.classList.add("hidden");$("#itemEditor")?.classList.add("hidden");state.activeSlot=null;state.selectedBase=null;document.querySelectorAll(".slot").forEach(s=>s.classList.remove("selected"));
  $("#closeCompositionPreview").addEventListener("click",hideCompositionPreview);$("#saveZvZNames").addEventListener("click",saveZvZNames);
}

function saveZvZNames(){const id=viewedZvZCompositionId;if(!id)return;const list=getZvZCompositions(),comp=list.find(x=>x.id===id);if(!comp)return;document.querySelectorAll("[data-zvz-name]").forEach(input=>{const m=comp.members.find(x=>x.id===input.dataset.zvzName);if(m)m.displayName=input.value.trim();});saveZvZCompositions(list);renderZvZCompositions();showZvZPreview(id);}

function showCompositionPreview(id){
  viewedZvZCompositionId=null;
  const composition = getCompositions().find(x=>x.id===id);
  if(!composition) return;
  viewedCompositionId = id;
  const creator = $("#buildCreatorView");
  const preview = $("#compositionPreview");
  const workspace = document.querySelector(".workspace");
  if(!creator || !preview) return;
  const presets = getPresets();
  const members = composition.members || [];
  const slotOrder = ["mainhand","offhand","head","armor","shoes","cape","bag","potion","food"];
  const slotLabels = {bag:"bag",head:"head",cape:"cape",mainhand:"weapon",armor:"armor",offhand:"offhand",potion:"potion",shoes:"shoes",food:"food"};
  preview.innerHTML = `
    <div class="composition-preview-head">
      <div>
        <div class="preview-kicker">${escapeHtml(t("compositionPreview"))}</div>
        <h2>${escapeHtml(composition.name)}</h2>
        <p>${members.length} ${escapeHtml(t("players"))}</p>
      </div>
      <button id="closeCompositionPreview" class="ghost" type="button">${escapeHtml(t("backToCreator"))}</button>
    </div>
    <div class="composition-builds">
      ${members.length ? members.map((member,index)=>{
        const preset = presets.find(p=>p.id===member.presetId);
        const build = preset?.build || {};
        return `<article class="composition-build-card">
          <header class="composition-build-header">
            <div class="composition-avatar">${index+1}</div>
            <div class="composition-build-info">
              <strong>${escapeHtml(member.role || "-")}</strong>
              <span>${escapeHtml(preset?.name || "-")}</span>
            </div>
          </header>
          <div class="composition-build-grid">
            ${slotOrder.map(slot=>{
              const item=build[slot];
              // En una composición no mostramos huecos vacíos. La secundaria solo
              // aparece cuando realmente existe una secundaria distinta del arma
              // (las armas a dos manos ocupan ambos huecos en el creador).
              if(slot === "offhand" && (!item || (build.mainhand && item.id === build.mainhand.id))) return "";
              if(!item) return "";
              const src=iconUrl(item.id,item.enchant||0,item.quality||1);
              return `<div class="composition-icon" title="${escapeHtml(item.name || "")}"><img src="${src}" alt="${escapeHtml(item.name || "")}" onerror="this.style.opacity='.25'"></div>`;
            }).join("")}
          </div>
        </article>`;
      }).join("") : `<div class="library-empty"><strong>${escapeHtml(t("noCompositions"))}</strong></div>`}
    </div>`;
  // La vista previa sustituye completamente al creador en el panel central.
  creator.classList.add("hidden");
  preview.classList.remove("hidden");
  workspace?.classList.add("preview-mode");
  $("#selector")?.classList.add("hidden");
  $("#itemEditor")?.classList.add("hidden");
  state.activeSlot = null;
  state.selectedBase = null;
  document.querySelectorAll(".slot").forEach(s=>s.classList.remove("selected"));
  $("#closeCompositionPreview").addEventListener("click",hideCompositionPreview);
}

function hideCompositionPreview(){
  viewedCompositionId=null;
  viewedZvZCompositionId=null;
  $("#compositionPreview")?.classList.add("hidden");
  $("#buildCreatorView")?.classList.remove("hidden");
  document.querySelector(".workspace")?.classList.remove("preview-mode");
  $("#selector")?.classList.add("hidden");
  $("#itemEditor")?.classList.add("hidden");
  state.activeSlot = null;
  state.selectedBase = null;
  document.querySelectorAll(".slot").forEach(s=>s.classList.remove("selected"));
}

function buildHasItems(){
  return Object.keys(state.build).some(k=>state.build[k]);
}

function saveCurrentPreset(){
  const name = (document.querySelector("#buildName").value || "").trim() || `Build ${getPresets().length + 1}`;
  const presets = getPresets();
  const preset = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2,7),
    name,
    createdAt: new Date().toISOString(),
    build: JSON.parse(JSON.stringify(state.build))
  };
  presets.unshift(preset);
  savePresets(presets.slice(0,50));
  renderPresets();
  $("#status").textContent = `${t("saved")}${name}`;
}

function loadPreset(id){
  const preset = getPresets().find(x=>x.id===id);
  if(!preset) return;
  state.build = JSON.parse(JSON.stringify(preset.build || {}));
  $("#buildName").value = preset.name || "";
  syncWeaponSlots();
  renderBuild();
  $("#status").textContent = `${t("selected")}${preset.name}`;
}

function deletePreset(id){
  savePresets(getPresets().filter(x=>x.id!==id));
  renderPresets();
}

function makeCopyId(prefix="copy"){
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`;
}

function duplicatePreset(id){
  const list=getPresets();
  const original=list.find(x=>x.id===id);
  if(!original) return;
  const copy={
    ...original,
    id:makeCopyId("preset"),
    name:`${original.name} (Copia)`,
    createdAt:new Date().toISOString(),
    build:JSON.parse(JSON.stringify(original.build||{}))
  };
  const index=list.findIndex(x=>x.id===id);
  list.splice(index+1,0,copy);
  savePresets(list.slice(0,50));
  renderPresets();
  setLibraryTab("presets");
}

function duplicateComposition(id){
  const list=getCompositions();
  const original=list.find(x=>x.id===id);
  if(!original) return;
  const copy={
    ...original,
    id:makeCopyId("composition"),
    name:`${original.name} (Copia)`,
    createdAt:new Date().toISOString(),
    members:(original.members||[]).map(m=>({...m,id:makeCopyId("member")}))
  };
  const index=list.findIndex(x=>x.id===id);
  list.splice(index+1,0,copy);
  saveCompositions(list.slice(0,50));
  renderCompositions();
  setLibraryTab("compositions");
}

function duplicateZvZ(id){
  const list=getZvZCompositions();
  const original=list.find(x=>x.id===id);
  if(!original) return;
  const copy={
    ...original,
    id:makeCopyId("zvz"),
    name:`${original.name} (Copia)`,
    createdAt:new Date().toISOString(),
    members:(original.members||[]).map(m=>({...m,id:makeCopyId("zvz-member")}))
  };
  const index=list.findIndex(x=>x.id===id);
  list.splice(index+1,0,copy);
  saveZvZCompositions(list.slice(0,50));
  renderZvZCompositions();
  setLibraryTab("zvz");
}

function renderPresets(){
  const box = $("#presetsList");
  const presets = getPresets();
  const count = $("#presetCount");
  if(count) count.textContent = presets.length;
  const compositionCount = $("#compositionCount");
  if(compositionCount) compositionCount.textContent = getCompositions().length;
  const zvzCount = $("#zvzCount");
  if(zvzCount) zvzCount.textContent = getZvZCompositions().length;
  if(!presets.length){
    box.innerHTML = `<div class="library-empty"><strong>${escapeHtml(t("noPresets"))}</strong><p>${escapeHtml(t("presetsHelp"))}</p></div>`;
    return;
  }
  box.innerHTML = presets.map(p=>{
    const count = Object.values(p.build || {}).filter(Boolean).length;
    return `<div class="preset-card">
      <div><strong>${escapeHtml(p.name)}</strong><small>${count}/9 slots</small></div>
      <details class="action-menu">
        <summary class="ghost action-menu-trigger" aria-label="Más opciones">...</summary>
        <div class="action-menu-dropdown">
          <button class="ghost" type="button" data-load-preset="${escapeHtml(p.id)}">${escapeHtml(t("load"))}</button>
          <button class="ghost" type="button" data-duplicate-preset="${escapeHtml(p.id)}">${escapeHtml(t("duplicate"))}</button>
          <button class="ghost danger" type="button" data-delete-preset="${escapeHtml(p.id)}">${escapeHtml(t("delete"))}</button>
        </div>
      </details>
    </div>`;
  }).join("");
  box.querySelectorAll("[data-load-preset]").forEach(b=>b.addEventListener("click",()=>loadPreset(b.dataset.loadPreset)));
  box.querySelectorAll("[data-duplicate-preset]").forEach(b=>b.addEventListener("click",()=>duplicatePreset(b.dataset.duplicatePreset)));
  box.querySelectorAll("[data-delete-preset]").forEach(b=>b.addEventListener("click",()=>deletePreset(b.dataset.deletePreset)));
}



function setLibraryTab(tab){
  if(tab !== "compositions" && tab !== "zvz") hideCompositionPreview();
  document.querySelectorAll("[data-library-tab]").forEach(b=>b.classList.toggle("active",b.dataset.libraryTab===tab));
  $("#presetsList").classList.toggle("hidden",tab!=="presets");
  $("#compositionsPanel").classList.toggle("hidden",tab!=="compositions");
  $("#zvzPanel").classList.toggle("hidden",tab!=="zvz");
  if(tab==="compositions"){
    if(!$("#compositionList")) resetCompositionPanel();
    renderCompositions();
  }
  if(tab==="zvz"){
    if(!$("#zvzList")) resetZvZPanel();
    renderZvZCompositions();
  }
}

document.querySelectorAll("[data-library-tab]").forEach(b=>b.addEventListener("click",()=>setLibraryTab(b.dataset.libraryTab)));
$("#newComposition")?.addEventListener("click",()=>openCompositionEditor());
$("#newZvZComposition")?.addEventListener("click",()=>openZvZEditor());

function applyI18n(){
  document.documentElement.lang = state.lang;
  document.querySelectorAll("[data-i18n]").forEach(el => el.textContent = t(el.dataset.i18n));
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => el.placeholder = t(el.dataset.i18nPlaceholder));
  document.querySelectorAll(".lang").forEach(b => b.classList.toggle("active", b.dataset.lang === state.lang));
  $("#status").textContent = state.items.length ? `${t("dataReady")}${state.items.length}` : t("loadingData");
  const selectorHelp = $(".selector p");
  if(selectorHelp) selectorHelp.textContent = state.activeSlot === "offhand" ? t("offhandCompatibility") : t("selectorHelp");
  renderBuild();
  renderPresets();
  renderCompositions();
  renderZvZCompositions();
}

function getName(item){
  const names = item.LocalizedNames || item.localizedNames || {};
  return names[state.lang === "es" ? "ES-ES" : "EN-US"] ||
         names[state.lang === "es" ? "ES" : "EN"] ||
         names["EN-US"] || names["ES-ES"] || item.Name || item.name || item.UniqueName || item.Index;
}

function normalize(raw){
  const arr = Array.isArray(raw) ? raw : (raw.items || raw.data || []);
  return arr.map(x => ({
    id: x.UniqueName || x.uniqueName || x.Index || x.index || x.item_id || x.id,
    name: x.LocalizedNames ? getName(x) : (x.name || x.Name || x.UniqueName || x.Index),
    names: x.LocalizedNames || x.localizedNames || {},
    cat: x.ShopCategory || x.shop_category || x.category || "",
    subcat: x.ShopSubCategory || x.shop_subcategory || x.subcategory || "",
    maxQuality: Number(x.MaxQualityLevel ?? x.max_quality_level ?? 5)
  })).filter(x => x.id);
}

function fallbackItems(){
  return [
    {UniqueName:"T4_MAIN_SWORD",LocalizedNames:{"EN-US":"Broadsword","ES-ES":"Espada ancha"},ShopCategory:"Weapons",ShopSubCategory:"Sword",MaxQualityLevel:5},
    {UniqueName:"T4_MAIN_SWORD_CLARENS",LocalizedNames:{"EN-US":"Clarent Blade","ES-ES":"Espada Clarent"},ShopCategory:"Weapons",ShopSubCategory:"Sword",MaxQualityLevel:5},
    {UniqueName:"T4_MAIN_DAGGER_HELL",LocalizedNames:{"EN-US":"Bloodletter","ES-ES":"Sangradora"},ShopCategory:"Weapons",ShopSubCategory:"Dagger",MaxQualityLevel:5},
    {UniqueName:"T4_2H_BOW",LocalizedNames:{"EN-US":"Bow","ES-ES":"Arco"},ShopCategory:"Weapons",ShopSubCategory:"Bow",MaxQualityLevel:5},
    {UniqueName:"T4_2H_LONGBOW",LocalizedNames:{"EN-US":"Longbow","ES-ES":"Arco largo"},ShopCategory:"Weapons",ShopSubCategory:"Bow",MaxQualityLevel:5},
    {UniqueName:"T4_2H_AXE",LocalizedNames:{"EN-US":"Battleaxe","ES-ES":"Hacha de batalla"},ShopCategory:"Weapons",ShopSubCategory:"Axe",MaxQualityLevel:5}
  ];
}

function iconUrl(id, enchant=0, quality=1){
  const cleanId = String(id).replace(/@\d+$/,"");
  const suffix = Number(enchant) > 0 ? `@${Number(enchant)}` : "";
  // Albion Render expects the enchantment in the item id. Keep the URL simple.
  return `https://render.albiononline.com/v1/item/${encodeURIComponent(cleanId + suffix)}.png?quality=${Number(quality)}`;
}

function parseItemVariant(id){
  const value = String(id);
  const tierMatch = value.match(/^T(\d+)/i);
  const enchantMatch = value.match(/@(\d+)$/);
  return {
    tier: tierMatch ? Number(tierMatch[1]) : 4,
    enchant: enchantMatch ? Number(enchantMatch[1]) : 0,
    baseId: value.replace(/^T\d+/i,"").replace(/@\d+$/,"")
  };
}

function itemText(item){
  return `${item.id} ${item.cat} ${item.subcat} ${getName(item)}`.toLowerCase();
}

function isArtifact(item){
  const id = String(item?.id || "").toUpperCase();
  const text = itemText(item);
  return id.includes("ARTEFACT") || id.includes("ARTIFACT") ||
         text.includes("artifact") || text.includes("artefact");
}

// The raw Albion dump contains thousands of non-equipable entries mixed with
// the shop categories: quest tokens, resources, seeds, crafting artefacts,
// tools, furniture, etc.  These must never reach the build selector.
function isNonEquipable(item){
  if(!item) return true;
  const id = String(item.id || "").toUpperCase();
  const text = itemText(item).toLowerCase();
  const blocked = [
    "QUESTITEM", "QUEST_ITEM", "_QUEST_", "QUEST_", "_TOKEN", "TOKEN_",
    "_SEED", "SEED_", "_ARTEFACT", "ARTEFACT_", "_ARTIFACT", "ARTIFACT_",
    "_RESOURCE", "RESOURCE_", "_MATERIAL", "MATERIAL_", "_RECIPE", "RECIPE_",
    "_TOOL_", "_TOOL", "TOOL_", "_FURNITURE", "FURNITURE_", "_CHEST", "CHEST_",
    "_JOURNAL", "JOURNAL_", "_TROPHY", "TROPHY_", "_SCROLL", "SCROLL_",
    "_CURRENCY", "CURRENCY_", "_MOUNT", "MOUNT_", "_FISH", "FISH_",
    "_FISHING", "FISHING_", "_FARM", "FARM_", "_REFINED", "REFINED_"
  ];
  if(blocked.some(x=>id.includes(x))) return true;
  const textBlocked = [
    "questitem", "quest token", "token", "seed", "artefact", "artifact",
    "resource", "material", "recipe", "tracking kit", "tool", "furniture",
    "journal", "trophy", "scroll", "currency", "mount", "fish", "fishing"
  ];
  return textBlocked.some(x=>text.includes(x));
}

const WEAPON_CATEGORY_ORDER = [
  "Swords", "Axes", "Maces", "Hammers", "Crossbows", "Bows", "Spears",
  "Quarterstaffs", "Daggers", "Fire Staffs", "Frost Staffs", "Holy Staffs",
  "Nature Staffs", "Arcane Staffs", "Cursed Staffs", "Shapeshifter Staffs", "War Gloves"
];

const WEAPON_CATEGORY_NAMES = {
  es: {
    Swords:"Espadas", Axes:"Hachas", Maces:"Mazas", Hammers:"Martillos",
    Crossbows:"Ballestas", Bows:"Arcos", Spears:"Lanzas", Quarterstaffs:"Bastones de cuarto",
    Daggers:"Dagas", "Fire Staffs":"Bastones de fuego", "Frost Staffs":"Bastones de hielo",
    "Holy Staffs":"Bastones sagrados", "Nature Staffs":"Bastones de naturaleza",
    "Arcane Staffs":"Bastones arcanos", "Cursed Staffs":"Bastones malditos",
    "Shapeshifter Staffs":"Bastones de cambiaformas", "War Gloves":"Guantes de guerra"
  },
  en: {
    Swords:"Swords", Axes:"Axes", Maces:"Maces", Hammers:"Hammers",
    Crossbows:"Crossbows", Bows:"Bows", Spears:"Spears", Quarterstaffs:"Quarterstaffs",
    Daggers:"Daggers", "Fire Staffs":"Fire Staffs", "Frost Staffs":"Frost Staffs",
    "Holy Staffs":"Holy Staffs", "Nature Staffs":"Nature Staffs", "Arcane Staffs":"Arcane Staffs",
    "Cursed Staffs":"Cursed Staffs", "Shapeshifter Staffs":"Shapeshifter Staffs", "War Gloves":"War Gloves"
  }
};

const OFFHAND_CATEGORY_ORDER = ["Shields", "Tomes", "Torches", "Orbs", "Muisaks", "Mistcallers", "Cryptcandles", "Taproots", "Facebreakers", "Sacred Scepters"];

const OFFHAND_CATEGORY_NAMES = {
  es: { Shields:"Escudos", Tomes:"Libros", Torches:"Antorchas", Orbs:"Orbes", Muisaks:"Muisaks", Mistcallers:"Llamadores de niebla", Cryptcandles:"Velas cripticas", Taproots:"Raíces", Facebreakers:"Rompecaras", "Sacred Scepters":"Cetros sagrados" },
  en: { Shields:"Shields", Tomes:"Tomes", Torches:"Torches", Orbs:"Orbs", Muisaks:"Muisaks", Mistcallers:"Mistcallers", Cryptcandles:"Cryptcandles", Taproots:"Taproots", Facebreakers:"Facebreakers", "Sacred Scepters":"Sacred Scepters" }
};

function prettyCategory(value){
  return WEAPON_CATEGORY_NAMES[state.lang]?.[value] || OFFHAND_CATEGORY_NAMES[state.lang]?.[value] || value;
}

function weaponCategoryKey(item){
  const id = equipmentBaseId(item).replace(/^T\d+_/i, "");
  const rest = id.replace(/^(MAIN_|2H_)/i, "").toUpperCase();
  const sub = String(item.subcat || "").toLowerCase().replace(/[^a-z0-9]/g, "");
  const text = `${rest} ${sub}`;

  if(/SHAPESHIFTER|PROWLINGSTAFF|PRIMALSTAFF|BLOODMOON|EARTHRUNE|STILLGAZE|ROOTBOUND|ROT_CALLER|ROTCHALLER|FORGEBARK|FLAMEWALKER/.test(text)) return "Shapeshifter Staffs";
  if(/KNUCKLE|CESTUS|BRACER|FIST|GLOVE|GAUNTLET/.test(text)) return "War Gloves";
  if(/CROSSBOW|1HCROSSBOW|BOLTCASTER|SIEGE/.test(text)) return "Crossbows";
  if(/DAGGER|DAGGERPAIR|BLOODLETTER|DEATHGIVER|DEMONFANG|TWINSLAYER|BRIDLEDFURY|CLAW/.test(text)) return "Daggers";
  if(/QUARTERSTAFF|IRONCLAD|DOUBLEBLADED|BLACKMONK|SOULSCYTHE|STAFFOFBALANCE|GRAILSEEKER|PHANTOMTWINBLADE/.test(text)) return "Quarterstaffs";
  if(/NATURESTAFF|WILDSTAFF|GREATNATURE|FORGEBARK|ROOTBOUND|ROT_CALLER|ROTCHALLER/.test(text)) return "Nature Staffs";
  if(/HOLYSTAFF|HALLOWFALL|DIVINES|REDEMPTION|LIFECURSE|FALLEN|DEMONIC/.test(text)) return "Holy Staffs";
  if(/FROSTSTAFF|GLACIAL|HOARFROST|CHILLHOWL|PERMAFROST|ICY/.test(text)) return "Frost Staffs";
  if(/FIRESTAFF|FLAMEWALKER|DAWNS|INFERNAL|BRIMSTONE|WILDFIRE/.test(text)) return "Fire Staffs";
  if(/CURSESTAFF|DEMONIC|GREATCURSED|DAMNATION|CURSE/.test(text)) return "Cursed Staffs";
  if(/ARCANESTAFF|ENIGMATIC|EVENSONG|WITCHWORK|OCCULT/.test(text)) return "Arcane Staffs";
  if(/SWORD|CLAYMORE|CARVING|CLARENT|GALATINE|KINGMAKER|DUALSWORD|DUAL SWORD|INFINITYBLADE|REALM/.test(text)) return "Swords";
  if(/AXE|HALBERD|SCYTHE|BEARPAWS|CARRIONCALLER|CRYSTALREAPER|REALMBREAKER|GREATAxe/.test(text)) return "Axes";
  if(/MACE|HEAVYMACE|FLAIL|CAMLAN|BEDROCK|INCUBUS|MORNINGS/.test(text)) return "Maces";
  if(/HAMMER|POLEHAMMER|GREAT HAMMER|TOMBHAMMER|JUDICATOR|FORGEMACE/.test(text)) return "Hammers";
  if(/BOW|LONGBOW|WARBOW|WHISPERING|WAILING|BADON|BOW/.test(text)) return "Bows";
  if(/SPEAR|PIKE|GLAIVE|HERONSPEAR|SPIRITHUNTER|TRIDENT|DAYBREAKER|RIFTGLAIVE/.test(text)) return "Spears";
  return null;
}

function offhandCategoryKey(item){
  const id = equipmentBaseId(item).replace(/^T\d+_/i, "").toUpperCase();
  if(/SHIELD/.test(id)) return "Shields";
  if(/TOME|BOOK|JOURNAL/.test(id)) return "Tomes";
  if(/TORCH/.test(id)) return "Torches";
  if(/ORB/.test(id)) return "Orbs";
  if(/MUISAK/.test(id)) return "Muisaks";
  if(/MISTCALLER/.test(id)) return "Mistcallers";
  if(/CRYPTCANDLE/.test(id)) return "Cryptcandles";
  if(/TAPROOT/.test(id)) return "Taproots";
  if(/FACEBREAKER/.test(id)) return "Facebreakers";
  if(/SACRED.*SCEPTER|SCEPTER/.test(id)) return "Sacred Scepters";
  return null;
}

function normalizedCategory(item){
  if(!item) return "";
  const slot = state.activeSlot;
  if(slot === "mainhand"){
    const key = weaponCategoryKey(item);
    return key ? prettyCategory(key) : "";
  }
  if(slot === "offhand"){
    const key = offhandCategoryKey(item);
    return key ? prettyCategory(key) : "";
  }
  // Non-weapon slots use simple, human-readable equipment families.
  const id = equipmentBaseId(item).replace(/^T\d+_/i, "").toUpperCase();
  const key = id.startsWith("HEAD_") ? "HEAD" : id.startsWith("ARMOR_") ? "ARMOR" : id.startsWith("SHOES_") ? "SHOES" : id.startsWith("BAG") ? "BAG" : id.startsWith("CAPE") ? "CAPE" : id.startsWith("POTION_") ? "POTION" : (id.startsWith("MEAL_") || id.startsWith("FOOD_") || id.startsWith("FISH_")) ? "FOOD" : "";
  const labels = {
    es:{HEAD:"Cascos",ARMOR:"Armaduras",SHOES:"Botas",BAG:"Bolsas",CAPE:"Capas",POTION:"Pociones",FOOD:"Comidas"},
    en:{HEAD:"Helmets",ARMOR:"Armor",SHOES:"Shoes",BAG:"Bags",CAPE:"Capes",POTION:"Potions",FOOD:"Food"}
  };
  return labels[state.lang]?.[key] || "";
}

function equipmentBaseId(item){
  return String(item?.id || "").toUpperCase().replace(/@\d+$/,"" );
}

function hasGearPrefix(item, prefixes){
  const id = equipmentBaseId(item);
  if(!/^T\d+_/.test(id)) return false;
  const rest = id.replace(/^T\d+_/, "");
  return prefixes.some(prefix => rest.startsWith(prefix));
}

function matchesSlot(item, slot){
  // The build selector is intentionally a WHITELIST. Albion's dump contains
  // many thousands of non-build entries, so only the real equipment/consumable
  // UniqueName families below are allowed into these nine slots.
  if(!item || isArtifact(item) || isNonEquipable(item)) return false;

  if(slot === "mainhand") return isWeapon(item);
  if(slot === "offhand") return /^(T\d+_)OFF_/.test(equipmentBaseId(item));

  if(slot === "head")   return hasGearPrefix(item,["HEAD_"]);
  if(slot === "armor")  return hasGearPrefix(item,["ARMOR_"]);
  if(slot === "shoes")  return hasGearPrefix(item,["SHOES_"]);
  if(slot === "bag")    return hasGearPrefix(item,["BAG"]);
  if(slot === "cape")   return hasGearPrefix(item,["CAPE"]);

  // Consumables: MEAL_ is Albion's normal cooked-food family. FOOD_ is kept
  // as a forward-compatible family, and FISH_ covers fish that can be placed
  // in the Food slot in build data.
  if(slot === "food")   return hasGearPrefix(item,["MEAL_","FOOD_","FISH_"]);
  if(slot === "potion") return hasGearPrefix(item,["POTION_"]);

  return false;
}

function isWeapon(item){
  if(!item || isArtifact(item) || isNonEquipable(item)) return false;

  const id = equipmentBaseId(item);
  if(!/^T\d+_/.test(id)) return false;
  const rest = id.replace(/^T\d+_/, "");

  // Albion's real equipable weapon families are MAIN_ and 2H_. This is much
  // safer than maintaining a hand-written list of weapon families: it keeps
  // new weapons (including newer weapon lines) working automatically.
  // Gathering/crafting tools also use 2H_, so explicitly exclude TOOL_ here.
  if(rest.startsWith("MAIN_")) return true;
  if(rest.startsWith("2H_") && !rest.startsWith("2H_TOOL_")) return true;

  return false;
}

function isTwoHandedWeapon(item){
  if(!item || isArtifact(item)) return false;
  const id = String(item.id).toUpperCase();
  // Albion UniqueName uses the 2H marker for weapons occupying both slots.
  return /(^|_)2H(_|$)/.test(id) || /_2H$/.test(id);
}

function isOneHandedWeapon(item){
  return !!item && isWeapon(item) && !isTwoHandedWeapon(item);
}

function canUseOffhand(){
  return isOneHandedWeapon(state.build.mainhand);
}

// There is no weapon-family whitelist here: with a one-handed weapon,
// any valid Albion off-hand can be selected.
function isCompatibleOffhand(item){
  return canUseOffhand() && matchesSlot(item,"offhand");
}

function clearInvalidOffhand(){
  const weapon = state.build.mainhand;
  if(!weapon) {
    if(state.build.offhand?._twoHandedWeapon) delete state.build.offhand;
    return;
  }

  if(isTwoHandedWeapon(weapon)) {
    state.build.offhand = {...weapon, _twoHandedWeapon:true};
  } else if(state.build.offhand?._twoHandedWeapon) {
    delete state.build.offhand;
  }
}

function cloneBuildItem(data){
  return data ? {...data} : null;
}

function syncWeaponSlots(){
  clearInvalidOffhand();
}

function fillCategories(){
  const select = $("#category");
  const source = state.activeSlot === "offhand"
    ? state.items.filter(x=>isCompatibleOffhand(x))
    : state.items.filter(x=>matchesSlot(x,state.activeSlot));
  const cats = [...new Set(source.map(normalizedCategory).filter(Boolean))];
  if(state.activeSlot === "mainhand") {
    const order = WEAPON_CATEGORY_ORDER.map(k=>prettyCategory(k));
    cats.sort((a,b)=>order.indexOf(a)-order.indexOf(b));
  } else if(state.activeSlot === "offhand") {
    const order = OFFHAND_CATEGORY_ORDER.map(k=>prettyCategory(k));
    cats.sort((a,b)=>order.indexOf(a)-order.indexOf(b));
  } else {
    cats.sort((a,b)=>a.localeCompare(b));
  }
  const current = select.value;
  select.innerHTML = `<option value="">${t("allCategories")}</option>` +
    cats.map(c=>`<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`).join("");
  if(cats.includes(current)) select.value = current;
}

function escapeHtml(s){
  return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));
}

function filter(){
  const q = $("#search").value.trim().toLowerCase();
  const cat = $("#category").value;

  if(state.activeSlot === "offhand" && !canUseOffhand()){
    state.filtered = [];
    renderResults();
    return;
  }

  const source = state.items.filter(item =>
    state.activeSlot === "offhand" ? isCompatibleOffhand(item) : matchesSlot(item,state.activeSlot)
  );

  const seen = new Set();
  state.filtered = source.filter(item=>{
    const baseId = equipmentBaseId(item);
    if(seen.has(baseId)) return false;
    seen.add(baseId);

    const name = getName(item).toLowerCase();
    const catOk = !cat || normalizedCategory(item) === cat;
    return catOk && (!q || name.includes(q));
  }).slice(0,100);

  renderResults();
}

function renderResults(){
  const box = $("#results");
  if (!state.filtered.length){
    const message = state.activeSlot === "offhand" && !canUseOffhand()
      ? (!state.build.mainhand ? t("offhandNeedsWeapon") : t("offhandLocked"))
      : t("noResults");
    box.innerHTML = `<div class="loading">${escapeHtml(message)}</div>`;
    return;
  }
  box.innerHTML = state.filtered.map((item,i)=>`
    <button class="result" type="button" data-result="${i}" title="${escapeHtml(getName(item))}">
      <img src="${iconUrl(item.id)}" alt="">
      <span><strong>${escapeHtml(getName(item))}</strong></span>
    </button>
  `).join("");
  box.querySelectorAll("[data-result]").forEach(btn=>{
    btn.addEventListener("click",()=>openEditor(state.filtered[Number(btn.dataset.result)]));
  });
}

function itemSupportsEnchant(slot){
  return !["food","potion"].includes(slot);
}

function itemSupportsQuality(slot){
  return !["food","potion"].includes(slot);
}

function qualityLabel(value){
  const labels = {
    es:{1:"Normal",2:"Buena",3:"Sobresaliente",4:"Excelente",5:"Obra maestra"},
    en:{1:"Normal",2:"Good",3:"Outstanding",4:"Excellent",5:"Masterpiece"}
  };
  return labels[state.lang]?.[value] || String(value);
}

function openEditor(item){
  const baseItem = {...item, id: equipmentBaseId(item)};
  state.selectedBase = baseItem;
  const variant = parseItemVariant(baseItem.id);
  const slot = state.activeSlot;
  const supportsEnchant = itemSupportsEnchant(slot);
  const supportsQuality = itemSupportsQuality(slot);

  $("#selector").classList.add("hidden");
  $("#itemEditor").classList.remove("hidden");

  $("#editorItem").innerHTML = `
    <img src="${iconUrl(baseItem.id, 0, 1)}" alt="" onerror="this.style.display='none'">
    <div class="editor-item-copy">
      <span class="editor-slot-label">${escapeHtml(t(SLOT_LABELS[slot]))}</span>
      <strong>${escapeHtml(getName(baseItem))}</strong>
      <small>${escapeHtml(t("chooseVariant"))}</small>
    </div>`;

  $("#tier").innerHTML = [4,5,6,7,8]
    .map(n=>`<option value="${n}" ${n===variant.tier?"selected":""}>T${n}</option>`).join("");

  $("#enchant").innerHTML = [0,1,2,3,4]
    .map(n=>`<option value="${n}">.${n}</option>`).join("");
  $("#enchant").value = "0";
  $("#enchant").disabled = !supportsEnchant;

  const maxQuality = Math.max(1, Math.min(5, Number(baseItem.maxQuality || 5)));
  $("#quality").innerHTML = Array.from({length:maxQuality},(_,i)=>{
    const v=i+1;
    return `<option value="${v}">${escapeHtml(qualityLabel(v))}</option>`;
  }).join("");
  $("#quality").value = "1";
  $("#quality").disabled = !supportsQuality;

  $("#editorNote").textContent = supportsEnchant && supportsQuality
    ? t("equipmentVariantHelp")
    : t("consumableVariantHelp");

  updateEditorPreview();
}

function baseIdForTier(item,tier){
  return item.id.replace(/^T\d+/,`T${tier}`);
}

function updateEditorPreview(){
  if(!state.selectedBase) return;
  const id = baseIdForTier(state.selectedBase, Number($("#tier").value));
  const enc = $("#enchant").disabled ? 0 : Number($("#enchant").value);
  const quality = $("#quality").disabled ? 1 : Number($("#quality").value);
  $("#editorItem img").src = iconUrl(id,enc,quality);
}

function addItem(){
  if(!state.selectedBase) return;

  const parsed = parseItemVariant(state.selectedBase.id);
  const tier = Number($("#tier").value);
  const enchant = $("#enchant").disabled ? 0 : Number($("#enchant").value);
  const quality = $("#quality").disabled ? 1 : Number($("#quality").value);
  const id = baseIdForTier(state.selectedBase,tier);

  const buildItem = {
    baseId: parsed.baseId,
    id,
    name:getName(state.selectedBase),
    tier,
    enchant,
    quality,
    icon:iconUrl(id,enchant,quality)
  };

  state.build[state.activeSlot] = buildItem;

  // Albion lets one-handed weapons use an off-hand of the player's choice.
  // Two-handed weapons occupy both slots, so mirror them into off-hand and lock it.
  if(state.activeSlot === "mainhand") {
    clearInvalidOffhand();
  }

  $("#itemEditor").classList.add("hidden");
  $("#selector").classList.remove("hidden");
  renderBuild();
  $("#status").textContent = `${t("selected")}${getName(state.selectedBase)} T${tier}${enchant ? "."+enchant : ""}`;
}

function renderBuild(){
  document.querySelectorAll(".slot").forEach(slot=>{
    const slotName = slot.dataset.slot;
    const data = state.build[slotName];
    const holder = slot.querySelector(".slot-item");
    const lockedTwoHanded = slotName === "offhand" && data?._twoHandedWeapon;
    const lockedNoWeapon = slotName === "offhand" && !state.build.mainhand;
    const locked = !!lockedTwoHanded || !!lockedNoWeapon;

    slot.classList.toggle("locked", locked);
    slot.title = lockedTwoHanded ? t("twoHanded") : (lockedNoWeapon ? t("offhandNeedsWeapon") : "");

    if(!data){
      holder.innerHTML = lockedNoWeapon
        ? `<span class="muted">🔒</span>`
        : `<span class="muted">+</span>`;
      return;
    }

    const src = iconUrl(data.id,data.enchant,data.quality);
    holder.innerHTML = `
      <div>
        <img src="${src}" alt="${escapeHtml(data.name)}"
             onerror="this.alt='';this.style.opacity='.35'">
        <div class="slot-name">${escapeHtml(data.name)}<br>T${data.tier}.${data.enchant}</div>
        ${lockedTwoHanded ? `<div class="slot-lock">${escapeHtml(t("twoHanded"))}</div>` : ""}
      </div>`;
  });
}


let voiceRecognition = null;
let voiceResults = [];

function normalizeVoiceText(value){
  return String(value||"")
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g,"")
    .replace(/[.,]/g," ")
    .replace(/\s+/g," ")
    .trim();
}

function voiceNumberWords(text){
  return normalizeVoiceText(text)
    .replace(/\buno\b/g,"1").replace(/\bdos\b/g,"2").replace(/\btres\b/g,"3")
    .replace(/\bcuatro\b/g,"4").replace(/\bcinco\b/g,"5").replace(/\bseis\b/g,"6")
    .replace(/\bsiete\b/g,"7").replace(/\bocho\b/g,"8").replace(/\bnueve\b/g,"9")
    .replace(/\bcero\b/g,"0")
    .replace(/\s+/g," ").trim();
}

function voiceVariant(text){
  const s=voiceNumberWords(text);
  let tier=null,enchant=0;
  let m=s.match(/\b(?:t|tier)\s*([4-8])(?:\s*(?:punto|dot)\s*([0-4]))?\b/);
  if(!m) m=s.match(/\b([4-8])\s*(?:punto|dot)\s*([0-4])\b/);
  if(!m) m=s.match(/\b(?:t|tier)?\s*([4-8])\s+([0-4])\b/);
  if(m){ tier=Number(m[1]); enchant=Number(m[2]||0); }
  return {tier,enchant};
}

function voiceCleanName(text){
  const s=voiceNumberWords(text);
  return s
    .replace(/\b(?:t|tier)\s*[4-8](?:\s*(?:punto|dot)\s*[0-4])?\b/g," ")
    .replace(/\b[4-8]\s*(?:punto|dot)\s*[0-4]\b/g," ")
    .replace(/\b(?:t|tier)?\s*[4-8]\s+[0-4]\b/g," ")
    .replace(/\b(?:punto|dot|nivel|tier)\b/g," ")
    .replace(/\b(?:quiero|ponme|pon|dame|usar|usa|con|llevar|llevo|ademas|además|una|un|la|el|las|los|de|del|of|the|a|an)\b/g," ")
    // Conservamos las palabras de equipamiento (capucha, espada, capa, etc.).
    // Muchos nombres reales de Albion contienen precisamente esas palabras
    // (por ejemplo, "Capucha de erudito"), y quitarlas provoca empates.
    .replace(/\s+/g," ").trim();
}

function voiceSlotFromText(text){
  const s=normalizeVoiceText(text);
  if(/\b(capa|capas|cape)\b/.test(s)) return "cape";
  if(/\b(bolsa|bolsas|bag|bags)\b/.test(s)) return "bag";
  if(/\b(pocion|pociones|potion|potions)\b/.test(s)) return "potion";
  if(/\b(guiso|comida|comidas|estofado|food|stew)\b/.test(s)) return "food";
  if(/\b(sandalia|sandalias|botas|zapatos|shoes|boots)\b/.test(s)) return "shoes";
  if(/\b(capucha|casco|cascos|cabeza|helmet|helmets|hood|head)\b/.test(s)) return "head";
  if(/\b(armadura|pecho|chaqueta|tunica|robe|armor|armour|chest|jacket)\b/.test(s)) return "armor";
  if(/\b(secundaria|secundario|escudo|tomo|antorcha|orbe|offhand|shield|tome|torch|orb)\b/.test(s)) return "offhand";
  if(/\b(arma|armas|espada|espadas|daga|dagas|hacha|hachas|maza|mazas|martillo|martillos|lanza|lanzas|arco|arcos|ballesta|ballestas|baston|bastones|guante|guantes|sword|swords|dagger|daggers|axe|axes|mace|maces|hammer|hammers|spear|spears|bow|bows|crossbow|crossbows|staff|staffs|glove|gloves|weapon)\b/.test(s)) return "mainhand";
  return null;
}

function voiceSegments(transcript){
  const text=normalizeVoiceText(transcript)
    .replace(/\b(quiero|una|un|build|con|ponme|pon|dame|usar|usa|llevar|llevo|ademas|además|y)\b/g," ")
    .replace(/\s+/g," ").trim();
  const marker=/\b(?:capa|capas|cape|bolsa|bolsas|bag|bags|pocion|pociones|potion|potions|guiso|comida|comidas|estofado|food|stew|sandalia|sandalias|botas|zapatos|shoes|boots|capucha|casco|cascos|cabeza|helmet|helmets|hood|head|armadura|pecho|chaqueta|tunica|robe|armor|armour|chest|jacket|secundaria|secundario|escudo|tomo|antorcha|orbe|offhand|shield|tome|torch|orb|arma|armas|espada|espadas|daga|dagas|hacha|hachas|maza|mazas|martillo|martillos|lanza|lanzas|arco|arcos|ballesta|ballestas|baston|bastones|guante|guantes|sword|swords|dagger|daggers|axe|axes|mace|maces|hammer|hammers|spear|spears|bow|bows|crossbow|crossbows|staff|staffs|glove|gloves|weapon)\b/g;
  const matches=[...text.matchAll(marker)];
  if(!matches.length) return text?[text]:[];
  const out=[];
  for(let i=0;i<matches.length;i++){
    const a=matches[i].index;
    const b=i+1<matches.length?matches[i+1].index:text.length;
    const part=text.slice(a,b).trim();
    if(part) out.push(part);
  }
  return out;
}

function voiceWordSimilarity(a,b){
  a=normalizeVoiceText(a); b=normalizeVoiceText(b);
  if(a===b) return 1;
  const m=a.length,n=b.length;
  if(!m||!n) return 0;
  const prev=new Array(n+1); for(let j=0;j<=n;j++) prev[j]=j;
  for(let i=1;i<=m;i++){
    const cur=new Array(n+1); cur[0]=i;
    for(let j=1;j<=n;j++) cur[j]=Math.min(cur[j-1]+1,prev[j]+1,prev[j-1]+(a[i-1]===b[j-1]?0:1));
    for(let j=0;j<=n;j++) prev[j]=cur[j];
  }
  return 1-prev[n]/Math.max(m,n);
}

function voiceItemNames(item){
  const out=[];
  const add=v=>{ if(v && !out.includes(v)) out.push(v); };
  add(getName(item));
  add(item.name);
  const names=item.names || item.LocalizedNames || item.localizedNames || {};
  Object.values(names).forEach(add);
  return out.map(normalizeVoiceText).filter(Boolean);
}

function voiceSlotForItem(item){
  const id=equipmentBaseId(item).replace(/^T\d+_/i,"");
  if(/^HEAD_/i.test(id)) return "head";
  if(/^ARMOR_/i.test(id)) return "armor";
  if(/^SHOES_/i.test(id)) return "shoes";
  if(/^CAPE/i.test(id)) return "cape";
  if(/^BAG/i.test(id)) return "bag";
  if(/^POTION_/i.test(id)) return "potion";
  if(/^(MEAL_|FOOD_|FISH_)/i.test(id)) return "food";
  if(/^OFF_/i.test(id)) return "offhand";
  if(isWeapon(item)) return "mainhand";
  return null;
}

function voiceQueryTokens(text){
  return normalizeVoiceText(text)
    .replace(/\b(?:quiero|ponme|pon|dame|usar|usa|llevar|llevo|ademas|además|una|un|la|el|las|los|de|del|con|y|and|a|an|the|of)\b/g," ")
    .split(/\s+/).filter(Boolean)
    .filter(t=>t.length>1 && !/^\d+$/.test(t));
}

function voiceCandidates(segment){
  const spokenSlot=voiceSlotFromText(segment);
  const variant=voiceVariant(segment);
  const query=voiceCleanName(segment);
  const qTokens=voiceQueryTokens(query);
  const candidates=[];

  for(const item of state.items){
    const itemSlot=voiceSlotForItem(item);
    if(!itemSlot) continue;
    if(spokenSlot && itemSlot!==spokenSlot) continue;
    if(itemSlot==="offhand" && !canUseOffhand()) continue;

    // Prefer the exact spoken tier when one was provided.
    if(variant.tier){
      const itemTier=parseItemVariant(item.id).tier;
      if(itemTier!==variant.tier) continue;
    }

    const names=voiceItemNames(item);
    let best=0;
    for(const name of names){
      const nTokens=voiceQueryTokens(name);
      if(!nTokens.length || !qTokens.length) continue;
      let matched=0, score=0;
      for(const qt of qTokens){
        let ws=0;
        for(const nt of nTokens){
          ws=Math.max(ws,voiceWordSimilarity(qt,nt));
          if(normalizeVoiceText(nt).startsWith(normalizeVoiceText(qt)) || normalizeVoiceText(qt).startsWith(normalizeVoiceText(nt))) ws=Math.max(ws,0.92);
        }
        if(ws>=0.45){matched++; score+=ws;}
      }
      const coverage=matched/qTokens.length;
      // No aceptamos un objeto que solo comparta una palabra del nombre.
      // Por ejemplo, "capucha de erudito" no puede acabar en "hábito de erudito":
      // ambos comparten "erudito", pero falta "capucha".
      if(qTokens.length > 1 && coverage < 0.999) continue;
      score=score*25 + coverage*70;
      const nq=normalizeVoiceText(name);
      const qq=normalizeVoiceText(query);
      if(nq===qq) score+=180;
      else if(qq && nq.includes(qq)) score+=130;
      best=Math.max(best,score);
    }
    if(best>35) candidates.push({item,slot:itemSlot,score:best,tier:variant.tier,enchant:variant.enchant});
  }

  candidates.sort((a,b)=>b.score-a.score);
  // One result per actual item family; the tier has already been filtered above.
  const seen=new Set();
  return candidates.filter(c=>{
    const key=c.slot+"|"+equipmentBaseId(c.item);
    if(seen.has(key)) return false;
    seen.add(key); return true;
  }).slice(0,12);
}

function parseVoiceBuild(transcript){
  const parsed=[],ambiguous=[];
  for(const segment of voiceSegments(transcript)){
    const candidates=voiceCandidates(segment);
    if(!candidates.length){ambiguous.push(segment);continue;}
    const best=candidates[0];
    const second=candidates[1];
    if(second && best.score-second.score<5){ambiguous.push(segment);continue;}
    parsed.push({segment,slot:best.slot,item:best.item,tier:best.tier||parseItemVariant(best.item.id).tier,enchant:best.enchant||0,quality:1});
  }
  return {parsed,ambiguous};
}

function renderVoiceMatches(result){
  const box=$("#voiceMatches"); if(!box)return;
  if(!result.parsed.length && !result.ambiguous.length){box.innerHTML=`<div class="loading">${escapeHtml(t("voiceNothing"))}</div>`;return;}
  const rows=result.parsed.map(x=>`<div class="voice-match"><span>${escapeHtml(t(SLOT_LABELS[x.slot]))}</span><strong>${escapeHtml(getName(x.item))}</strong><small>T${x.tier}${x.enchant?"."+x.enchant:""}</small></div>`).join("");
  const bad=result.ambiguous.length?`<div class="voice-ambiguous"><strong>${escapeHtml(t("voiceAmbiguous"))}</strong><span>${escapeHtml(result.ambiguous.join(" · "))}</span></div>`:"";
  box.innerHTML=rows+bad;
}

function startVoiceRecognition(){
  const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
  if(!SR){$("#voiceStatus").textContent=t("voiceUnsupported");return;}
  if(voiceRecognition){try{voiceRecognition.stop();}catch{} voiceRecognition=null;}
  voiceRecognition=new SR();
  voiceRecognition.lang=state.lang==="es"?"es-ES":"en-US";
  voiceRecognition.interimResults=false;
  voiceRecognition.continuous=false;
  voiceRecognition.maxAlternatives=3;
  $("#voiceStatus").textContent=t("voiceStarting");
  $("#startVoice").innerHTML=`🎙️ <span>${escapeHtml(t("stopListening"))}</span>`;
  voiceRecognition.onstart=()=>{$("#voiceStatus").textContent=t("voiceListening");};
  voiceRecognition.onaudiostart=()=>{$("#voiceStatus").textContent=t("voiceAudioStart");};
  voiceRecognition.onspeechstart=()=>{$("#voiceStatus").textContent=t("voiceListening");};
  voiceRecognition.onresult=e=>{
    const transcript=Array.from(e.results).map(r=>r[0].transcript).join(" ").trim();
    $("#voiceTranscript").textContent=transcript||t("voiceNoMatch");
    if(transcript){
      voiceResults=parseVoiceBuild(transcript);
      renderVoiceMatches(voiceResults);
      $("#applyVoice").disabled=!voiceResults.parsed.length;
    }
  };
  voiceRecognition.onnomatch=()=>{
    $("#voiceStatus").textContent=t("voiceNoMatch");
  };
  voiceRecognition.onerror=e=>{
    const messages={
      "not-allowed":"Permiso de micrófono denegado.",
      "audio-capture":"No se ha encontrado ningún micrófono.",
      "no-speech":"No he detectado voz. Pulsa Escuchar y habla.",
      "network":"Error de red del reconocimiento de voz.",
      "aborted":"Reconocimiento detenido."
    };
    $("#voiceStatus").textContent=messages[e.error]||`Error de voz: ${e.error}`;
    $("#startVoice").innerHTML=`🎙️ <span>${escapeHtml(t("startListening"))}</span>`;
  };
  voiceRecognition.onend=()=>{
    $("#startVoice").innerHTML=`🎙️ <span>${escapeHtml(t("startListening"))}</span>`;
    voiceRecognition=null;
  };
  try{
    voiceRecognition.start();
  }catch(e){
    $("#voiceStatus").textContent=t("voiceStartError");
    $("#startVoice").innerHTML=`🎙️ <span>${escapeHtml(t("startListening"))}</span>`;
    voiceRecognition=null;
  }
}

function applyVoiceBuild(){
  if(!voiceResults.length && !voiceResults.parsed?.length)return;
  for(const x of voiceResults.parsed){
    const id=baseIdForTier(x.item,x.tier);
    state.build[x.slot]={baseId:parseItemVariant(id).baseId,id,name:getName(x.item),tier:x.tier,enchant:x.enchant,quality:x.quality,icon:iconUrl(id,x.enchant,x.quality)};
  }
  clearInvalidOffhand(); renderBuild(); $("#voiceStatus").textContent=t("voiceApplied");
  $("#voiceBuildPanel").classList.add("hidden");
}

async function loadItems(){
  $("#status").textContent = t("loadingData");
  try{
    const urls = [
      "https://raw.githubusercontent.com/ao-data/ao-bin-dumps/master/formatted/items.json",
      "https://raw.githubusercontent.com/broderickhyman/ao-bin-dumps/master/formatted/items.json"
    ];
    let raw = null;
    for(const url of urls){
      try{
        const res = await fetch(url,{cache:"no-store"});
        if(res.ok){ raw = await res.json(); break; }
      }catch{}
    }
    if(!raw) throw new Error("No se pudo cargar items.json");
    state.items = normalize(raw);
  }catch(err){
    state.items = normalize(fallbackItems());
    $("#status").textContent = `${t("loadingData")} (modo demo)`;
  }
  fillCategories();
  filter();
  applyI18n();
}

document.querySelectorAll(".lang").forEach(b=>b.addEventListener("click",()=>{
  state.lang=b.dataset.lang; fillCategories(); filter(); applyI18n();
}));
document.querySelectorAll(".slot").forEach(slot=>slot.addEventListener("click",()=>{
  // Off-hand can only be edited when a one-handed weapon is equipped.
  if(slot.dataset.slot === "offhand" && !canUseOffhand()) {
    state.activeSlot = "offhand";
    renderBuild();
    filter();
    return;
  }

  state.activeSlot=slot.dataset.slot;
  document.querySelectorAll(".slot").forEach(s=>s.classList.toggle("selected",s===slot));
  state.selectedBase=null;
  $("#compositionPreview")?.classList.add("hidden");
  $("#selector")?.classList.remove("hidden");
  $("#itemEditor")?.classList.add("hidden");
  $(".selector p").textContent = state.activeSlot === "offhand" ? t("offhandCompatibility") : t("selectorHelp");
  $("#search").value="";
  $("#category").value="";
  fillCategories();
  filter();
}));
$("#search").addEventListener("input",filter);
$("#category").addEventListener("change",filter);
$("#closeSelector").addEventListener("click",()=>{
  state.activeSlot=null;
  state.selectedBase=null;
  $("#selector").classList.add("hidden");
  $("#itemEditor").classList.add("hidden");
  document.querySelectorAll(".slot").forEach(s=>s.classList.remove("selected"));
});
$("#cancelEditor").addEventListener("click",()=>{$("#itemEditor").classList.add("hidden"); if(state.activeSlot) $("#selector").classList.remove("hidden"); $("#enchant").disabled=false;state.selectedBase=null});
$("#addItem").addEventListener("click",addItem);
$("#savePreset").addEventListener("click",()=>{ if(buildHasItems()) saveCurrentPreset(); else $("#status").textContent=t("noPresets"); });
$("#newBuild").addEventListener("click",()=>{ state.build={}; $("#buildName").value=""; renderBuild(); $("#status").textContent=""; });
["tier","enchant","quality"].forEach(id=>$("#"+id).addEventListener("change",updateEditorPreview));


$("#exportAll")?.addEventListener("click",exportAllData);
$("#importAll")?.addEventListener("click",()=>$("#importFile")?.click());
$("#importFile")?.addEventListener("change",e=>{ importAllData(e.target.files?.[0]); e.target.value=""; });

$("#voiceBuild")?.addEventListener("click",()=>{$("#voiceBuildPanel").classList.toggle("hidden");});
$("#closeVoiceBuild")?.addEventListener("click",()=>{$("#voiceBuildPanel").classList.add("hidden");});
$("#startVoice")?.addEventListener("click",()=>{ if(voiceRecognition){try{voiceRecognition.stop();}catch{}} else startVoiceRecognition(); });
$("#applyVoice")?.addEventListener("click",applyVoiceBuild);

syncWeaponSlots();
applyI18n();
renderPresets();
renderZvZCompositions();
$("#selector")?.classList.add("hidden");
$("#itemEditor")?.classList.add("hidden");
loadItems();
