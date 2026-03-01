// Garden Gnome Software - Skin
// Pano2VR 8.0 beta 2/22072
// Filename: material_dusk.ggsk
// Generated 2026-03-01T17:01:18Z

function pano2vrSkin(player,base) {
	player.addVariable('vis_sounds_splashscreen', 2, false, { ignoreInState: 1  });
	player.addVariable('vis_skin', 2, false, { ignoreInState: 1  });
	player.addVariable('vis_hotspots', 2, true, { ignoreInState: 0  });
	player.addVariable('vis_languages', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_pdf_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_url_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_popup_file', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_popup_url', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_popup_youtube', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_popup_vimeo', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_thumbs', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_info', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_image', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_pdf', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_youtube', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_vimeo', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_video_file', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_video_url', 2, false, { ignoreInState: 0  });
	player.addVariable('toggle_audio', 2, true, { ignoreInState: 0  });
	player.addVariable('open_info_hotspots', 0, "", { ignoreInState: 0  });
	player.addVariable('open_image_hotspots', 0, "", { ignoreInState: 0  });
	player.addVariable('open_video_youtube_hotspots', 0, "", { ignoreInState: 0  });
	player.addVariable('open_video_vimeo_hotspots', 0, "", { ignoreInState: 0  });
	player.addVariable('open_video_file_hotspots', 0, "", { ignoreInState: 0  });
	player.addVariable('open_video_url_hotspots', 0, "", { ignoreInState: 0  });
	player.addVariable('hide_lottie_index', 1, 0, { ignoreInState: 0  });
	player.addVariable('opt_proj_title', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_fullscreen', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_gyro', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_url_popup', 2, true, { ignoreInState: 1  });
	player.addVariable('vis_menu', 2, false, { ignoreInState: 1  });
	player.addVariable('has_fullscreen', 2, true, { ignoreInState: 1  });
	player.addVariable('sounds_splashscreen_accepted', 2, false, { ignoreInState: 0  });
	player.addVariable('resp_desktop', 2, false, { ignoreInState: 1  });
	player.addVariable('resp_tablet', 2, false, { ignoreInState: 1  });
	player.addVariable('resp_phone', 2, false, { ignoreInState: 1  });
	player.addVariable('vis_phone_thumbs', 2, false, { ignoreInState: 0  });
	player.addVariable('model_loading', 2, false, { ignoreInState: 0  });
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressedKey = 0;
	var skinKeyPressedText = '';
	this.player=player;
	var pano=player;
	player.setApiVersion(7);
	this.rasterizeHTML = player.getRasterizeHTML();
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	me.fontsLoaded=0;
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i,hs,el,els,elo,ela,geometry,material;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	this._=function(text, params) {
		return player._(text, params);
	}
	
	player.setMargins({'left': {'value': 0, 'unit': 'px'}, 'top': {'value': 0, 'unit': 'px'}, 'right': {'value': 0, 'unit': 'px'}, 'bottom': {'value': 0, 'unit': 'px'}});
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		if (player.is3dModel()) {
			let hg = player.get3dHotspotGroup();
			if (hg) {
				let startObject = null;
				if (startElement !== undefined && startElement != me.divSkin) {
					if (startElement.ggId) {
						hg.traverse(function(el) {
							if (el.userData && el.userData.ggId === startElement.ggId) {
								startObject = el;
							}
						});
					}
				} else {
					startObject = hg;
				}
				if (startObject) {
					startObject.traverse(function(el) {
						if (el.userData && el.userData.ggUpdatePosition) {
							el.userData.ggUpdatePosition();
						}
					});
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('languagechanged', this.languageChanged);
	
	this.getClassStyles = function(className) {
		className = '.' + className;
		for (let sheet of document.styleSheets) {
			try {
				for (let rule of sheet.cssRules || sheet.rules) {
					if (rule.selectorText === className) {
						return rule.style;
					}
				}
			} catch (e) {
				console.warn("Cannot access stylesheet: ", e);
			}
		}
		return null;
	};
	this.paintTextDivToCanvas = function(el, stylesString, textureHeightFromEl, autoSize, scrollbar) {
		const skinStyles = skin.getClassStyles('ggskin');
		const skinTextStyles = skin.getClassStyles('ggskin_text');
		const skinStylesString = skinStyles ? skinStyles.cssText : '';
		const skinTextStylesString = skinTextStyles ? skinTextStyles.cssText : '';
		let elementStylesString = '';
		if (Array.isArray(el.userData.cssClasses)) {
			el.userData.cssClasses.forEach(function(className) {
				const classStyles = skin.getClassStyles(className);
				if (classStyles) {
					elementStylesString += classStyles.cssText;
				}
			});
		}
		const outerDiv = document.createElement('div');
		const textDiv = document.createElement('div');
		textDiv.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
		textDiv.style = skinStylesString + skinTextStylesString + elementStylesString + stylesString;
		textDiv.innerHTML = el.userData.ggText;
		textDiv.style.position = 'absolute';
		textDiv.style.left = '0px';
		textDiv.style.top = '0px';
		const styleTag = document.createElement('style');
		styleTag.type = 'text/css';
		styleTag.appendChild(document.createTextNode("@font-face { font-family: 'Varela Round'; font-style: normal; font-weight: 400; src: local(''), url('fonts/varela-round-latin-regular.woff2') format('woff2'); } @font-face { font-family: 'Noto Sans'; font-style: normal; font-weight: 300; src: local(''), url('fonts/noto-sans-latin-300.woff2') format('woff2'); } @font-face { font-family: 'Noto Sans'; font-style: normal; font-weight: 600; src: local(''), url('fonts/noto-sans-latin-600.woff2') format('woff2'); }"));
		outerDiv.appendChild(styleTag);
		outerDiv.appendChild(textDiv);
		document.body.appendChild(outerDiv);
		el.userData.boxWidthCanv = textDiv.clientWidth;
		el.userData.totalHeightCanv = textDiv.clientHeight;
		elStyle = window.getComputedStyle(textDiv);
		const lineHeight = elStyle.lineHeight;
		if (lineHeight !== 'normal') {
			el.userData.lineHeight = parseFloat(lineHeight);
		} else {
			el.userData.lineHeight = parseFloat(elStyle.fontSize) * 1.2;
		}
		var canv = el.userData.tmpCanvas;
		var ctx = el.userData.tmpCanvasContext;
		canv.width = textDiv.clientWidth * 2;
		canv.height = textDiv.clientHeight * 2;
		ctx.clearRect(0, 0, canv.width, canv.height);
		if (autoSize) {
			el.userData.boxHeightCanv = el.userData.totalHeightCanv;
		} else {
			el.userData.boxHeightCanv = el.userData.height;
		}
		if (scrollbar && textDiv.clientHeight > el.userData.height) {
			el.userData.textCanvas.width = el.userData.width * 2;
		} else {
			el.userData.textCanvas.width = el.userData.boxWidthCanv * 2;
		}
		el.userData.textCanvas.height = el.userData.boxHeightCanv * 2;
		this.rasterizeHTML.drawHTML(outerDiv.innerHTML, canv, {zoom: 2, baseUrl: player.getBasePath() }).then((renderResult) => {
			el.userData.ggTextureFromCanvas();
		}, (err) => {
			console.error('Error rendering HTML to canvas:', err);
		});
		document.body.removeChild(outerDiv);
	};
	this.rectMaxRadius = function(el) {
		return Math.min(el.userData.width / 2.0 + (el.userData.borderWidth.left + el.userData.borderWidth.right) / 2.0, el.userData.height / 2.0 + (el.userData.borderWidth.top + el.userData.borderWidth.bottom) / 2.0);
	}
	this.rectCalcBorderRadiiInnerShape = function(el) {
		let maxRad = skin.rectMaxRadius(el);
		let bwTopLeft = (el.userData.borderWidth.top + el.userData.borderWidth.left) / 2.0;
		let brTopLeft = Math.max(el.userData.borderRadius.topLeft - bwTopLeft, 0.0);
		brTopLeft = Math.min(brTopLeft, maxRad - bwTopLeft);
		let bwTopRight = (el.userData.borderWidth.top + el.userData.borderWidth.right) / 2.0;
		let brTopRight = Math.max(el.userData.borderRadius.topRight - bwTopRight, 0.0);
		brTopRight = Math.min(brTopRight, maxRad - bwTopRight);
		let bwBottomRight = (el.userData.borderWidth.bottom + el.userData.borderWidth.right) / 2.0;
		let brBottomRight = Math.max(el.userData.borderRadius.bottomRight - bwBottomRight, 0.0);
		brBottomRight = Math.min(brBottomRight, maxRad - bwBottomRight);
		let bwBottomLeft = (el.userData.borderWidth.bottom + el.userData.borderWidth.left) / 2.0;
		let brBottomLeft = Math.max(el.userData.borderRadius.bottomLeft - bwBottomLeft, 0.0);
		brBottomLeft = Math.min(brBottomLeft, maxRad - bwBottomLeft);
		el.userData.borderRadiusInnerShape = {
			topLeft: brTopLeft,
			topRight: brTopRight,
			bottomRight: brBottomRight,
			bottomLeft: brBottomLeft
		};
	}
	this.rectHasRoundedCorners = function(el) {
		return (el.userData.borderRadius.topLeft > 0 || el.userData.borderRadius.topRight > 0 || el.userData.borderRadius.bottomRight > 0 || el.userData.borderRadius.bottomLeft > 0);
	}
	this.disposeGeometryAndMaterial = function(el) {
		if (el.geometry) el.geometry.dispose();
		el.geometry = null;
		if (el.material) el.material.dispose();
	}
	this.removeChildren = function(el, filter) {
		if (filter === undefined) filter ='^.*$';
		const pattern = new RegExp(filter);
		for (let i = el.children.length - 1; i >= 0; i--) {
			let child = el.children[i];
			if (pattern.test(child.name)) {
				if (child.isMesh) {
					skin.disposeGeometryAndMaterial(child);
				}
				el.remove(child);
			}
		}
	};
	this.getDepthFrom = function(root, object) {
		let depth = 0;
		let current = object;
		while (current && current !== root) {
			if (current.userData && current.userData.hasOwnProperty('ggId')) depth++;
			current = current.parent;
		}
		return current === root ? depth : -1;
	};
	this.getElementVrPosition = function(el, x, y) {
		var vrPos = {};
		var renderableEl = el.parent && (el.parent.type == 'Mesh' || el.parent.type == 'Group');
		switch (el.userData.hanchor) {
			case 0:
			vrPos.x = (0) - ((renderableEl ? el.parent.userData.width : 800) / 200.0) + (x / 100.0) + (el.userData.width / 200.0);
			break;
			case 1:
			vrPos.x = (0) + (x / 100.0);
			break;
			case 2:
			vrPos.x = (0) + ((renderableEl ? el.parent.userData.width : 800) / 200.0) - (x / 100.0) - (el.userData.width / 200.0);
			break;
		}
		switch (el.userData.vanchor) {
			case 0:
			vrPos.y = (0) + ((renderableEl ? el.parent.userData.height : 600) / 200.0) - (y / 100.0) - (el.userData.height / 200.0);
			break;
			case 1:
			vrPos.y = (0) - (y / 100.0);
			break;
			case 2:
			vrPos.y = (0) - ((renderableEl ? el.parent.userData.height : 600) / 200.0) + (y / 100.0) + (el.userData.height / 200.0);
			break;
		}
		vrPos.x += el.userData.curScaleOffX;
		vrPos.y += el.userData.curScaleOffY;
		return vrPos;
	}
	this.addSkin=function() {
		var hs='';
		var el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
		this.ggCurrentTime=new Date().getTime();
		me._variable_vis_sounds_splashscreen = {};
		me._variable_vis_sounds_splashscreen.ggCurrentLogicState = -1;
		me._variable_vis_sounds_splashscreen.logicBlock = function() {
			var newLogicState_vis_sounds_splashscreen;
			if (
				((player.getHasSounds() == true)) && 
				((player.getSoundsPermitted() != 1)) && 
				((player.getVariableValue('sounds_splashscreen_accepted') == false))
			)
			{
				newLogicState_vis_sounds_splashscreen = 0;
			}
			else {
				newLogicState_vis_sounds_splashscreen = -1;
			}
			if (me._variable_vis_sounds_splashscreen.ggCurrentLogicState != newLogicState_vis_sounds_splashscreen) {
				me._variable_vis_sounds_splashscreen.ggCurrentLogicState = newLogicState_vis_sounds_splashscreen;
				if (me._variable_vis_sounds_splashscreen.ggCurrentLogicState == 0) {
					player.setVariableValue('vis_sounds_splashscreen', true);
				}
				else {
					player.setVariableValue('vis_sounds_splashscreen', false);
				}
			}
		}
		me._variable_vis_skin = {};
		me._variable_vis_skin.ggCurrentLogicState = -1;
		me._variable_vis_skin.logicBlock = function() {
			var newLogicState_vis_skin;
			if (
				((player.getVariableValue('vis_languages') == false)) && 
				((player.getVariableValue('vis_pdf_popup') == false)) && 
				((player.getVariableValue('vis_url_popup') == false)) && 
				((player.getVariableValue('vis_video_popup_file') == false)) && 
				((player.getVariableValue('vis_video_popup_url') == false)) && 
				((player.getVariableValue('vis_video_popup_youtube') == false)) && 
				((player.getVariableValue('vis_video_popup_vimeo') == false)) && 
				((player.getVariableValue('vis_phone_thumbs') == false)) && 
				((player.getVariableValue('vis_phone_info') == false)) && 
				((player.getVariableValue('vis_phone_image') == false)) && 
				((player.getVariableValue('vis_phone_pdf') == false)) && 
				((player.getVariableValue('vis_phone_youtube') == false)) && 
				((player.getVariableValue('vis_phone_vimeo') == false)) && 
				((player.getVariableValue('vis_phone_video_file') == false)) && 
				((player.getVariableValue('vis_phone_video_url') == false)) && 
				((player.getVariableValue('vis_sounds_splashscreen') == false))
			)
			{
				newLogicState_vis_skin = 0;
			}
			else {
				newLogicState_vis_skin = -1;
			}
			if (me._variable_vis_skin.ggCurrentLogicState != newLogicState_vis_skin) {
				me._variable_vis_skin.ggCurrentLogicState = newLogicState_vis_skin;
				if (me._variable_vis_skin.ggCurrentLogicState == 0) {
					player.setVariableValue('vis_skin', true);
				}
				else {
					player.setVariableValue('vis_skin', false);
				}
			}
		}
		me._variable_has_fullscreen = {};
		me._variable_has_fullscreen.ggCurrentLogicState = -1;
		me._variable_has_fullscreen.logicBlock = function() {
			var newLogicState_has_fullscreen;
			if (
				((player.getOS() == 4)) && 
				((player.getOS() != 6))
			)
			{
				newLogicState_has_fullscreen = 0;
			}
			else {
				newLogicState_has_fullscreen = -1;
			}
			if (me._variable_has_fullscreen.ggCurrentLogicState != newLogicState_has_fullscreen) {
				me._variable_has_fullscreen.ggCurrentLogicState = newLogicState_has_fullscreen;
				if (me._variable_has_fullscreen.ggCurrentLogicState == 0) {
					player.setVariableValue('has_fullscreen', false);
				}
				else {
					player.setVariableValue('has_fullscreen', true);
				}
			}
		}
		me._variable_resp_desktop = {};
		me._variable_resp_desktop.ggCurrentLogicState = -1;
		me._variable_resp_desktop.logicBlock = function() {
			var newLogicState_resp_desktop;
			if (
				((player.getViewerSize(true).width > 1024))
			)
			{
				newLogicState_resp_desktop = 0;
			}
			else {
				newLogicState_resp_desktop = -1;
			}
			if (me._variable_resp_desktop.ggCurrentLogicState != newLogicState_resp_desktop) {
				me._variable_resp_desktop.ggCurrentLogicState = newLogicState_resp_desktop;
				if (me._variable_resp_desktop.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_desktop', true);
				}
				else {
					player.setVariableValue('resp_desktop', false);
				}
			}
		}
		me._variable_resp_tablet = {};
		me._variable_resp_tablet.ggCurrentLogicState = -1;
		me._variable_resp_tablet.logicBlock = function() {
			var newLogicState_resp_tablet;
			if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicState_resp_tablet = 0;
			}
			else {
				newLogicState_resp_tablet = -1;
			}
			if (me._variable_resp_tablet.ggCurrentLogicState != newLogicState_resp_tablet) {
				me._variable_resp_tablet.ggCurrentLogicState = newLogicState_resp_tablet;
				if (me._variable_resp_tablet.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_tablet', true);
				}
				else {
					player.setVariableValue('resp_tablet', false);
				}
			}
		}
		me._variable_resp_phone = {};
		me._variable_resp_phone.ggCurrentLogicState = -1;
		me._variable_resp_phone.logicBlock = function() {
			var newLogicState_resp_phone;
			if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicState_resp_phone = 0;
			}
			else {
				newLogicState_resp_phone = -1;
			}
			if (me._variable_resp_phone.ggCurrentLogicState != newLogicState_resp_phone) {
				me._variable_resp_phone.ggCurrentLogicState = newLogicState_resp_phone;
				if (me._variable_resp_phone.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_phone', true);
				}
				else {
					player.setVariableValue('resp_phone', false);
				}
			}
		}
		el=me._safe_area_main=document.createElement('div');
		el.ggId="safe_area_main";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='height : calc(100% - env(safe-area-inset-top) - env(safe-area-inset-bottom));';
		hs+='left : env(safe-area-inset-left);';
		hs+='position : absolute;';
		hs+='top : env(safe-area-inset-top);';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - env(safe-area-inset-left) - env(safe-area-inset-right));';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._safe_area_main.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._safe_area_main.ggUpdatePosition=function (useTransition) {
		}
		el=me._menu_bg_safe_area=document.createElement('div');
		el.ggId="menu_bg_safe_area";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 16px;';
		hs+='left : -200px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 72px;';
		hs+='visibility : hidden;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu_bg_safe_area.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_bg_safe_area.logicBlock_size = function() {
			var newConditionsTrueSize = [];
			var deltaW = 0;
			var deltaH = 0;
			if (
				((player.getVariableValue('opt_fullscreen') == true)) && 
				((player.getVariableValue('has_fullscreen') == true))
			)
			{
				newConditionsTrueSize.push(0);
			}
			if (
				((player.getHasSounds() == true))
			)
			{
				newConditionsTrueSize.push(1);
			}
			if (
				((player.hasVR() == true))
			)
			{
				newConditionsTrueSize.push(2);
			}
			if (
				((player.getVariableValue('opt_gyro') == true)) && 
				((player.getGyroAvailable() == true))
			)
			{
				newConditionsTrueSize.push(3);
			}
			if (
				((player.getPointHotspotIds().length > 0))
			)
			{
				newConditionsTrueSize.push(4);
			}
			if (
				((player.getProjectTranslations().length > 1))
			)
			{
				newConditionsTrueSize.push(5);
			}
			if (JSON.stringify(me._menu_bg_safe_area.ggConditionsTrueSize) != JSON.stringify(newConditionsTrueSize)) {
				me._menu_bg_safe_area.ggConditionsTrueSize = newConditionsTrueSize;
				me._menu_bg_safe_area.style.transition='width 500ms ease 0ms, height 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._menu_bg_safe_area.ggConditionsTrueSize.includes(0)) {
					deltaW += 0;
					deltaH += 48;
				}
				if (me._menu_bg_safe_area.ggConditionsTrueSize.includes(1)) {
					deltaW += 0;
					deltaH += 48;
				}
				if (me._menu_bg_safe_area.ggConditionsTrueSize.includes(2)) {
					deltaW += 0;
					deltaH += 48;
				}
				if (me._menu_bg_safe_area.ggConditionsTrueSize.includes(3)) {
					deltaW += 0;
					deltaH += 48;
				}
				if (me._menu_bg_safe_area.ggConditionsTrueSize.includes(4)) {
					deltaW += 0;
					deltaH += 48;
				}
				if (me._menu_bg_safe_area.ggConditionsTrueSize.includes(5)) {
					deltaW += 0;
					deltaH += 48;
				}
					me._menu_bg_safe_area.style.width=(200+deltaW) + 'px';
					me._menu_bg_safe_area.style.height=(16+deltaH) + 'px';
					setTimeout(function() {skin.updateSize(me._menu_bg_safe_area);}, 550);
			}
		}
		me._menu_bg_safe_area.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._menu_bg_safe_area.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._menu_bg_safe_area.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._menu_bg_safe_area.style.transition='width 500ms ease 0ms, height 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._menu_bg_safe_area.ggCurrentLogicStateVisible == 0) {
					me._menu_bg_safe_area.style.visibility=(Number(me._menu_bg_safe_area.style.opacity)>0||!me._menu_bg_safe_area.style.opacity)?'inherit':'hidden';
					me._menu_bg_safe_area.ggVisible=true;
				}
				else {
					me._menu_bg_safe_area.style.visibility="hidden";
					me._menu_bg_safe_area.ggVisible=false;
				}
			}
		}
		me._menu_bg_safe_area.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_menu') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._menu_bg_safe_area.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._menu_bg_safe_area.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._menu_bg_safe_area.style.transition='width 500ms ease 0ms, height 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._menu_bg_safe_area.ggCurrentLogicStateAlpha == 0) {
					me._menu_bg_safe_area.style.visibility=me._menu_bg_safe_area.ggVisible?'inherit':'hidden';
					me._menu_bg_safe_area.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._menu_bg_safe_area.style.opacity == 0.0) { me._menu_bg_safe_area.style.visibility="hidden"; } }, 505);
					me._menu_bg_safe_area.style.opacity=0;
				}
			}
		}
		me._menu_bg_safe_area.ggUpdatePosition=function (useTransition) {
		}
		me._safe_area_main.appendChild(me._menu_bg_safe_area);
		el=me._menu=document.createElement('div');
		el.ggId="menu";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 16px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 72px;';
		hs+='visibility : hidden;';
		hs+='width : 72px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu.logicBlock_size = function() {
			var newConditionsTrueSize = [];
			var deltaW = 0;
			var deltaH = 0;
			if (
				((player.getVariableValue('opt_fullscreen') == true)) && 
				((player.getVariableValue('has_fullscreen') == true))
			)
			{
				newConditionsTrueSize.push(0);
			}
			if (
				((player.getHasSounds() == true))
			)
			{
				newConditionsTrueSize.push(1);
			}
			if (
				((player.hasVR() == true))
			)
			{
				newConditionsTrueSize.push(2);
			}
			if (
				((player.getVariableValue('opt_gyro') == true)) && 
				((player.getGyroAvailable() == true))
			)
			{
				newConditionsTrueSize.push(3);
			}
			if (
				((player.getPointHotspotIds().length > 0))
			)
			{
				newConditionsTrueSize.push(4);
			}
			if (
				((player.getProjectTranslations().length > 1))
			)
			{
				newConditionsTrueSize.push(5);
			}
			if (JSON.stringify(me._menu.ggConditionsTrueSize) != JSON.stringify(newConditionsTrueSize)) {
				me._menu.ggConditionsTrueSize = newConditionsTrueSize;
				me._menu.style.transition='width 500ms ease 0ms, height 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._menu.ggConditionsTrueSize.includes(0)) {
					deltaW += 0;
					deltaH += 48;
				}
				if (me._menu.ggConditionsTrueSize.includes(1)) {
					deltaW += 0;
					deltaH += 48;
				}
				if (me._menu.ggConditionsTrueSize.includes(2)) {
					deltaW += 0;
					deltaH += 48;
				}
				if (me._menu.ggConditionsTrueSize.includes(3)) {
					deltaW += 0;
					deltaH += 48;
				}
				if (me._menu.ggConditionsTrueSize.includes(4)) {
					deltaW += 0;
					deltaH += 48;
				}
				if (me._menu.ggConditionsTrueSize.includes(5)) {
					deltaW += 0;
					deltaH += 48;
				}
					me._menu.style.width=(72+deltaW) + 'px';
					me._menu.style.height=(16+deltaH) + 'px';
					setTimeout(function() {skin.updateSize(me._menu);}, 550);
			}
		}
		me._menu.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._menu.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._menu.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._menu.style.transition='width 500ms ease 0ms, height 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._menu.ggCurrentLogicStateVisible == 0) {
					me._menu.style.visibility=(Number(me._menu.style.opacity)>0||!me._menu.style.opacity)?'inherit':'hidden';
					me._menu.ggVisible=true;
				}
				else {
					me._menu.style.visibility="hidden";
					me._menu.ggVisible=false;
				}
			}
		}
		me._menu.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_menu') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._menu.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._menu.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._menu.style.transition='width 500ms ease 0ms, height 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._menu.ggCurrentLogicStateAlpha == 0) {
					me._menu.style.visibility=me._menu.ggVisible?'inherit':'hidden';
					me._menu.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._menu.style.opacity == 0.0) { me._menu.style.visibility="hidden"; } }, 505);
					me._menu.style.opacity=0;
				}
			}
		}
		me._menu.ggUpdatePosition=function (useTransition) {
		}
		el=me._languages=document.createElement('div');
		els=me._languages__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MCA0MDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDQwIDQwIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNmZmZmZmY7fQo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTIyLjIsMzYuN2MtMC42LDAtMS4xLTAuMi0xLjQtMC42Yy0wLjMtMC40LTAuMy0wLjktMC4xLTEuNmw2LjEtMTYuMmMwLjItMC40LDAuNS0wLjgsMC45LTEuMSAgYzAuNS0wLjMsMC45LTAuNSwxLjQtMC41YzAuNSwwLDAuOSwwLjIsMS40LDAuNWMwLjUsMC4zLDAuOCwwLjcsMC45LDEuMWw2LjIsMTYuMWMwLjIsMC42LDAuMiwxLjItMC4xLDEuNiAgYy0wLjMsMC40LTAuOCwwLjctMS41LDAuN2MtMC4zLDAtMC42LTAuMS0wLjktMC4zcy0wLjUtMC40'+
			'LTAuNi0wLjhsLTEuNC00LjJoLThsLTEuNSw0LjJjLTAuMSwwLjMtMC4zLDAuNS0wLjYsMC43ICBDMjIuOCwzNi42LDIyLjUsMzYuNywyMi4yLDM2Ljd6IE0yNi4xLDI4LjVIMzJsLTIuOS04LjFIMjlMMjYuMSwyOC41eiBNMTIsMTQuMmMwLjQsMC44LDAuOSwxLjUsMS40LDIuMWMwLjUsMC43LDEuMSwxLjQsMS43LDIuMSAgYzEuMi0xLjMsMi4zLTIuNywzLjEtNC4xYzAuOC0xLjQsMS41LTIuOSwyLjEtNC40SDMuM2MtMC41LDAtMC45LTAuMi0xLjItMC41UzEuNyw4LjgsMS43LDguM2MwLTAuNSwwLjItMC45LDAuNS0xLjIgIHMwLjctMC41LDEuMi0wLjVoMTBWNWMwLTAuNSwwLjItMC45LDAuNS'+
			'0xLjJjMC4zLTAuMywwLjctMC41LDEuMi0wLjVzMC45LDAuMiwxLjIsMC41YzAuMywwLjMsMC41LDAuNywwLjUsMS4ydjEuN2gxMCAgYzAuNSwwLDAuOSwwLjIsMS4yLDAuNWMwLjMsMC4zLDAuNSwwLjcsMC41LDEuMmMwLDAuNS0wLjIsMC45LTAuNSwxLjJjLTAuMywwLjMtMC43LDAuNS0xLjIsMC41aC0zLjFjLTAuNiwxLjktMS40LDMuOC0yLjQsNS43ICBjLTEsMS44LTIuMiwzLjYtMy43LDUuM2w0LDQuMWwtMS4yLDMuNEwxNSwyMy4zbC03LjIsNy4yQzcuNSwzMC44LDcuMSwzMSw2LjcsMzFjLTAuNCwwLTAuOC0wLjItMS4xLTAuNUM1LjIsMzAuMiw1LDI5LjgsNSwyOS40ICBjMC0wLjUsMC4y'+
			'LTAuOCwwLjUtMS4xbDcuMy03LjNjLTAuNy0wLjktMS40LTEuNy0yLTIuNmMtMC42LTAuOS0xLjItMS44LTEuOC0yLjdDOC43LDE1LDguNywxNC40LDksMTRjMC4zLTAuNCwwLjgtMC43LDEuNS0wLjcgIGMwLjMsMCwwLjYsMC4xLDAuOSwwLjNDMTEuNiwxMy44LDExLjksMTQsMTIsMTQuMnoiLz4KPC9zdmc+Cg==';
		me._languages__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._languages__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MCA0MDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDQwIDQwIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNkZmUwMzY7fQo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTIyLjIsMzYuN2MtMC42LDAtMS4xLTAuMi0xLjQtMC42Yy0wLjMtMC40LTAuMy0wLjktMC4xLTEuNmw2LjEtMTYuMmMwLjItMC40LDAuNS0wLjgsMC45LTEuMSAgYzAuNS0wLjMsMC45LTAuNSwxLjQtMC41YzAuNSwwLDAuOSwwLjIsMS40LDAuNWMwLjUsMC4zLDAuOCwwLjcsMC45LDEuMWw2LjIsMTYuMWMwLjIsMC42LDAuMiwxLjItMC4xLDEuNiAgYy0wLjMsMC40LTAuOCwwLjctMS41LDAuN2MtMC4zLDAtMC42LTAuMS0wLjktMC4zcy0wLjUtMC40'+
			'LTAuNi0wLjhsLTEuNC00LjJoLThsLTEuNSw0LjJjLTAuMSwwLjMtMC4zLDAuNS0wLjYsMC43ICBDMjIuOCwzNi42LDIyLjUsMzYuNywyMi4yLDM2Ljd6IE0yNi4xLDI4LjVIMzJsLTIuOS04LjFIMjlMMjYuMSwyOC41eiBNMTIsMTQuMmMwLjQsMC44LDAuOSwxLjUsMS40LDIuMWMwLjUsMC43LDEuMSwxLjQsMS43LDIuMSAgYzEuMi0xLjMsMi4zLTIuNywzLjEtNC4xYzAuOC0xLjQsMS41LTIuOSwyLjEtNC40SDMuM2MtMC41LDAtMC45LTAuMi0xLjItMC41UzEuNyw4LjgsMS43LDguM2MwLTAuNSwwLjItMC45LDAuNS0xLjIgIHMwLjctMC41LDEuMi0wLjVoMTBWNWMwLTAuNSwwLjItMC45LDAuNS'+
			'0xLjJjMC4zLTAuMywwLjctMC41LDEuMi0wLjVzMC45LDAuMiwxLjIsMC41YzAuMywwLjMsMC41LDAuNywwLjUsMS4ydjEuN2gxMCAgYzAuNSwwLDAuOSwwLjIsMS4yLDAuNWMwLjMsMC4zLDAuNSwwLjcsMC41LDEuMmMwLDAuNS0wLjIsMC45LTAuNSwxLjJjLTAuMywwLjMtMC43LDAuNS0xLjIsMC41aC0zLjFjLTAuNiwxLjktMS40LDMuOC0yLjQsNS43ICBjLTEsMS44LTIuMiwzLjYtMy43LDUuM2w0LDQuMWwtMS4yLDMuNEwxNSwyMy4zbC03LjIsNy4yQzcuNSwzMC44LDcuMSwzMSw2LjcsMzFjLTAuNCwwLTAuOC0wLjItMS4xLTAuNUM1LjIsMzAuMiw1LDI5LjgsNSwyOS40ICBjMC0wLjUsMC4y'+
			'LTAuOCwwLjUtMS4xbDcuMy03LjNjLTAuNy0wLjktMS40LTEuNy0yLTIuNmMtMC42LTAuOS0xLjItMS44LTEuOC0yLjdDOC43LDE1LDguNywxNC40LDksMTRjMC4zLTAuNCwwLjgtMC43LDEuNS0wLjcgIGMwLjMsMCwwLjYsMC4xLDAuOSwwLjNDMTEuNiwxMy44LDExLjksMTQsMTIsMTQuMnoiLz4KPC9zdmc+Cg==';
		me._languages__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="languages";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 16px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._languages.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._languages.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getVariableValue('opt_fullscreen') == true)) && 
				((player.getVariableValue('has_fullscreen') == true))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (
				((player.getHasSounds() == true))
			)
			{
				newConditionsTruePosition.push(1);
			}
			if (
				((player.hasVR() == true))
			)
			{
				newConditionsTruePosition.push(2);
			}
			if (
				((player.getVariableValue('opt_gyro') == true)) && 
				((player.getGyroAvailable() == true))
			)
			{
				newConditionsTruePosition.push(3);
			}
			if (
				((player.getPointHotspotIds().length > 0))
			)
			{
				newConditionsTruePosition.push(4);
			}
			if (JSON.stringify(me._languages.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._languages.ggConditionsTruePosition = newConditionsTruePosition;
				me._languages.style.transition='right 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._languages.ggConditionsTruePosition.includes(0)) {
					deltaX += 0;
					deltaY += 48;
				}
				if (me._languages.ggConditionsTruePosition.includes(1)) {
					deltaX += 0;
					deltaY += 48;
				}
				if (me._languages.ggConditionsTruePosition.includes(2)) {
					deltaX += 0;
					deltaY += 48;
				}
				if (me._languages.ggConditionsTruePosition.includes(3)) {
					deltaX += 0;
					deltaY += 48;
				}
				if (me._languages.ggConditionsTruePosition.includes(4)) {
					deltaX += 0;
					deltaY += 48;
				}
					me._languages.style.right=(20+deltaX) + 'px';
					me._languages.style.top=(16+deltaY) + 'px';
			}
		}
		me._languages.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getProjectTranslations().length > 1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._languages.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._languages.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._languages.style.transition='right 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._languages.ggCurrentLogicStateAlpha == 0) {
					me._languages.style.visibility=me._languages.ggVisible?'inherit':'hidden';
					me._languages.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._languages.style.opacity == 0.0) { me._languages.style.visibility="hidden"; } }, 505);
					me._languages.style.opacity=0;
				}
			}
		}
		me._languages.onclick=function (e) {
			player.setVariableValue('vis_languages', true);
		}
		me._languages.onmouseenter=function (e) {
			me._languages__img.style.visibility='hidden';
			me._languages__imgo.style.visibility='inherit';
			me.elementMouseOver['languages']=true;
		}
		me._languages.onmouseleave=function (e) {
			me._languages__img.style.visibility='inherit';
			me._languages__imgo.style.visibility='hidden';
			me.elementMouseOver['languages']=false;
		}
		me._languages.ggUpdatePosition=function (useTransition) {
		}
		me._menu.appendChild(me._languages);
		el=me._hotspots_toggle=document.createElement('div');
		el.ggId="hotspots_toggle";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 16px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspots_toggle.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._hotspots_toggle.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getVariableValue('opt_fullscreen') == true)) && 
				((player.getVariableValue('has_fullscreen') == true))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (
				((player.getHasSounds() == true))
			)
			{
				newConditionsTruePosition.push(1);
			}
			if (
				((player.hasVR() == true))
			)
			{
				newConditionsTruePosition.push(2);
			}
			if (
				((player.getVariableValue('opt_gyro') == true)) && 
				((player.getGyroAvailable() == true))
			)
			{
				newConditionsTruePosition.push(3);
			}
			if (JSON.stringify(me._hotspots_toggle.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._hotspots_toggle.ggConditionsTruePosition = newConditionsTruePosition;
				me._hotspots_toggle.style.transition='right 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hotspots_toggle.ggConditionsTruePosition.includes(0)) {
					deltaX += 0;
					deltaY += 48;
				}
				if (me._hotspots_toggle.ggConditionsTruePosition.includes(1)) {
					deltaX += 0;
					deltaY += 48;
				}
				if (me._hotspots_toggle.ggConditionsTruePosition.includes(2)) {
					deltaX += 0;
					deltaY += 48;
				}
				if (me._hotspots_toggle.ggConditionsTruePosition.includes(3)) {
					deltaX += 0;
					deltaY += 48;
				}
					me._hotspots_toggle.style.right=(20+deltaX) + 'px';
					me._hotspots_toggle.style.top=(16+deltaY) + 'px';
			}
		}
		me._hotspots_toggle.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getPointHotspotIds().length > 0))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hotspots_toggle.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hotspots_toggle.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hotspots_toggle.style.transition='right 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._hotspots_toggle.ggCurrentLogicStateAlpha == 0) {
					me._hotspots_toggle.style.visibility=me._hotspots_toggle.ggVisible?'inherit':'hidden';
					me._hotspots_toggle.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._hotspots_toggle.style.opacity == 0.0) { me._hotspots_toggle.style.visibility="hidden"; } }, 505);
					me._hotspots_toggle.style.opacity=0;
				}
			}
		}
		me._hotspots_toggle.onclick=function (e) {
			player.setVariableValue('vis_hotspots', !player.getVariableValue('vis_hotspots'));
		}
		me._hotspots_toggle.ggUpdatePosition=function (useTransition) {
		}
		el=me._hotspots_on=document.createElement('div');
		els=me._hotspots_on__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiBoZWlnaHQ9IjE4cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE4cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJNMCAwaDI0djI0SDBWMHoiIGZpbGw9Im5vbmUiLz4KIDxwYXRoIGQ9Ik0xMiA0QzcgNCAyLjczIDcuMTEgMSAxMS41IDIuNzMgMTUuODkgNyAxOSAxMiAxOXM5LjI3LTMuMTEgMTEtNy41QzIxLjI3IDcuMTEgMTcgNCAxMiA0em0wIDEyLjVjLTIuNzYgMC01LTIuMjQtNS01czIuMjQtNSA1LTUgNSAyLjI0IDUgNS0yLjI0IDUtNSA1em0wLThjLTEuNjYgMC0zIDEuMzQtMyAzczEuMzQgMyAzIDMgMy'+
			'0xLjM0IDMtMy0xLjM0LTMtMy0zeiIvPgo8L3N2Zz4K';
		me._hotspots_on__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._hotspots_on__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOCAxODsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE4IDE4IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojZGZlMDM2O30mI3hkOwo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTAsMGgxOHYxOEgwVjB6Ii8+CiA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNOSwzQzUuMiwzLDIsNS4zLDAuOCw4LjZDMiwxMS45LDUuMiwxNC4yLDksMTQuMnM3LTIuMyw4LjItNS42QzE2LDUuMywxMi44LDMsOSwzeiBNOSwxMi40JiN4ZDsmI3hhOyYjeDk7Yy0yLjEsMC0zLjgtMS43LTMuOC0zLjhTNi45LDQuOSw5LDQuOXMzLjgsMS43LDMuOCwzLjhTMTEuMSwxMi40LDksMTIuNHogTTksNi40'+
			'Yy0xLjIsMC0yLjIsMS0yLjIsMi4yczEsMi4yLDIuMiwyLjJzMi4yLTEsMi4yLTIuMiYjeGQ7JiN4YTsmI3g5O1MxMC4yLDYuNCw5LDYuNHoiLz4KPC9zdmc+Cg==';
		me._hotspots_on__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="hotspots_on";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspots_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._hotspots_on.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_hotspots') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hotspots_on.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hotspots_on.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hotspots_on.style.transition='';
				if (me._hotspots_on.ggCurrentLogicStateVisible == 0) {
					me._hotspots_on.style.visibility=(Number(me._hotspots_on.style.opacity)>0||!me._hotspots_on.style.opacity)?'inherit':'hidden';
					me._hotspots_on.ggVisible=true;
				}
				else {
					me._hotspots_on.style.visibility="hidden";
					me._hotspots_on.ggVisible=false;
				}
			}
		}
		me._hotspots_on.onmouseenter=function (e) {
			me._hotspots_on__img.style.visibility='hidden';
			me._hotspots_on__imgo.style.visibility='inherit';
			me.elementMouseOver['hotspots_on']=true;
		}
		me._hotspots_on.onmouseleave=function (e) {
			me._hotspots_on__img.style.visibility='inherit';
			me._hotspots_on__imgo.style.visibility='hidden';
			me.elementMouseOver['hotspots_on']=false;
		}
		me._hotspots_on.ggUpdatePosition=function (useTransition) {
		}
		me._hotspots_toggle.appendChild(me._hotspots_on);
		el=me._hotspots_off=document.createElement('div');
		els=me._hotspots_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiBoZWlnaHQ9IjE4cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE4cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJNMCAwaDI0djI0SDBWMHptMCAwaDI0djI0SDBWMHptMCAwaDI0djI0SDBWMHptMCAwaDI0djI0SDBWMHoiIGZpbGw9Im5vbmUiLz4KIDxwYXRoIGQ9Ik0xMiA2LjVjMi43NiAwIDUgMi4yNCA1IDUgMCAuNTEtLjEgMS0uMjQgMS40NmwzLjA2IDMuMDZjMS4zOS0xLjIzIDIuNDktMi43NyAzLjE4LTQuNTNDMjEuMjcgNy4xMSAxNyA0IDEyIDRjLTEuMjcgMC0yLjQ5LjItMy42NC41N2wyLjE3IDIuMT'+
			'djLjQ3LS4xNC45Ni0uMjQgMS40Ny0uMjR6TTIuNzEgMy4xNmMtLjM5LjM5LS4zOSAxLjAyIDAgMS40MWwxLjk3IDEuOTdDMy4wNiA3LjgzIDEuNzcgOS41MyAxIDExLjUgMi43MyAxNS44OSA3IDE5IDEyIDE5YzEuNTIgMCAyLjk3LS4zIDQuMzEtLjgybDIuNzIgMi43MmMuMzkuMzkgMS4wMi4zOSAxLjQxIDAgLjM5LS4zOS4zOS0xLjAyIDAtMS40MUw0LjEzIDMuMTZjLS4zOS0uMzktMS4wMy0uMzktMS40MiAwek0xMiAxNi41Yy0yLjc2IDAtNS0yLjI0LTUtNSAwLS43Ny4xOC0xLjUuNDktMi4xNGwxLjU3IDEuNTdjLS4wMy4xOC0uMDYuMzctLjA2LjU3IDAgMS42NiAxLjM0IDMgMyAzIC4yIDAg'+
			'LjM4LS4wMy41Ny0uMDdMMTQuMTQgMTZjLS42NS4zMi0xLjM3LjUtMi4xNC41em0yLjk3LTUuMzNjLS4xNS0xLjQtMS4yNS0yLjQ5LTIuNjQtMi42NGwyLjY0IDIuNjR6Ii8+Cjwvc3ZnPgo=';
		me._hotspots_off__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._hotspots_off__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOCAxODsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE4IDE4IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojZGZlMDM2O30mI3hkOwo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTAsMGgxOHYxOEgwVjB6IE0wLDBoMTh2MThIMFYweiBNMCwwaDE4djE4SDBWMHogTTAsMGgxOHYxOEgwVjB6Ii8+CiA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNOSw0LjljMi4xLDAsMy44LDEuNywzLjgsMy44YzAsMC40LTAuMSwwLjgtMC4yLDEuMWwyLjMsMi4zYzEtMC45LDEuOS0yLjEsMi40LTMuNEMxNiw1LjMsMTIuOCwzLDksMyYjeGQ7JiN4YTsmI3g5O0M4LDMsNy4xLDMuMSw2LjMsMy40'+
			'bDEuNiwxLjZDOC4yLDUsOC42LDQuOSw5LDQuOXogTTIsMi40QzEuNywyLjcsMS43LDMuMSwyLDMuNGwxLjUsMS41Yy0xLjIsMS0yLjIsMi4yLTIuOCwzLjcmI3hkOyYjeGE7JiN4OTtDMiwxMS45LDUuMiwxNC4yLDksMTQuMmMxLjEsMCwyLjItMC4yLDMuMi0wLjZsMiwyYzAuMywwLjMsMC44LDAuMywxLjEsMHMwLjMtMC44LDAtMS4xTDMuMSwyLjRDMi44LDIuMSwyLjMsMi4xLDIsMi40eiBNOSwxMi40JiN4ZDsmI3hhOyYjeDk7Yy0yLjEsMC0zLjgtMS43LTMuOC0zLjhDNS4yLDgsNS40LDcuNSw1LjYsN2wxLjIsMS4yYzAsMC4xLDAsMC4zLDAsMC40YzAsMS4yLDEsMi4yLDIuMiwyLjJjMC4yLD'+
			'AsMC4zLDAsMC40LTAuMWwxLjIsMS4yJiN4ZDsmI3hhOyYjeDk7QzEwLjEsMTIuMiw5LjYsMTIuNCw5LDEyLjR6IE0xMS4yLDguNGMtMC4xLTEuMS0wLjktMS45LTItMkwxMS4yLDguNHoiLz4KPC9zdmc+Cg==';
		me._hotspots_off__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="hotspots_off";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspots_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._hotspots_off.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_hotspots') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hotspots_off.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hotspots_off.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hotspots_off.style.transition='';
				if (me._hotspots_off.ggCurrentLogicStateVisible == 0) {
					me._hotspots_off.style.visibility="hidden";
					me._hotspots_off.ggVisible=false;
				}
				else {
					me._hotspots_off.style.visibility=(Number(me._hotspots_off.style.opacity)>0||!me._hotspots_off.style.opacity)?'inherit':'hidden';
					me._hotspots_off.ggVisible=true;
				}
			}
		}
		me._hotspots_off.onmouseenter=function (e) {
			me._hotspots_off__img.style.visibility='hidden';
			me._hotspots_off__imgo.style.visibility='inherit';
			me.elementMouseOver['hotspots_off']=true;
		}
		me._hotspots_off.onmouseleave=function (e) {
			me._hotspots_off__img.style.visibility='inherit';
			me._hotspots_off__imgo.style.visibility='hidden';
			me.elementMouseOver['hotspots_off']=false;
		}
		me._hotspots_off.ggUpdatePosition=function (useTransition) {
		}
		me._hotspots_toggle.appendChild(me._hotspots_off);
		me._menu.appendChild(me._hotspots_toggle);
		el=me._gyro_toggle=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="gyro_toggle";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 16px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._gyro_toggle.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._gyro_toggle.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getVariableValue('opt_fullscreen') == true)) && 
				((player.getVariableValue('has_fullscreen') == true))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (
				((player.getHasSounds() == true))
			)
			{
				newConditionsTruePosition.push(1);
			}
			if (
				((player.hasVR() == true))
			)
			{
				newConditionsTruePosition.push(2);
			}
			if (JSON.stringify(me._gyro_toggle.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._gyro_toggle.ggConditionsTruePosition = newConditionsTruePosition;
				me._gyro_toggle.style.transition='right 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._gyro_toggle.ggConditionsTruePosition.includes(0)) {
					deltaX += 0;
					deltaY += 48;
				}
				if (me._gyro_toggle.ggConditionsTruePosition.includes(1)) {
					deltaX += 0;
					deltaY += 48;
				}
				if (me._gyro_toggle.ggConditionsTruePosition.includes(2)) {
					deltaX += 0;
					deltaY += 48;
				}
					me._gyro_toggle.style.right=(20+deltaX) + 'px';
					me._gyro_toggle.style.top=(16+deltaY) + 'px';
			}
		}
		me._gyro_toggle.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('opt_gyro') == true)) && 
				((player.getGyroAvailable() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._gyro_toggle.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._gyro_toggle.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._gyro_toggle.style.transition='right 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._gyro_toggle.ggCurrentLogicStateAlpha == 0) {
					me._gyro_toggle.style.visibility=me._gyro_toggle.ggVisible?'inherit':'hidden';
					me._gyro_toggle.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._gyro_toggle.style.opacity == 0.0) { me._gyro_toggle.style.visibility="hidden"; } }, 505);
					me._gyro_toggle.style.opacity=0;
				}
			}
		}
		me._gyro_toggle.onclick=function (e) {
			player.setUseGyro(!(player.getUseGyro()));
		}
		me._gyro_toggle.ggUpdatePosition=function (useTransition) {
		}
		el=me._gyro_on=document.createElement('div');
		els=me._gyro_on__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xX2NvcHkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI0IDI0OyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluay'+
			'IgeT0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojRkZGRkZGO30mI3hkOwo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTIyLjMsMTJjMC01LjQtNC4yLTkuOS05LjYtMTAuM1YxLjFjMC0wLjQtMC4zLTAuNy0wLjctMC43cy0wLjcsMC4zLTAuNywwLjd2MC42QzUuNiwyLjEsMS4zLDcsMS42LDEyLjYmI3hkOyYjeGE7JiN4OTtjMC4zLDUuMiw0LjUsOS4zLDkuNiw5LjZ2MC42YzAsMC40LDAuMywwLjcsMC43LDAuN3MwLjctMC4zLDAuNy0wLjdsMCwwdi0wLjZDMTguMSwyMS45LDIyLjMsMTcuNCwyMi4zLDEyeiBNMTkuMyw4JiN4ZDsmI3hhOyYj'+
			'eDk7Yy0yLjEtMS00LjMtMS42LTYuNi0xLjZWMy43QzE1LjUsNCwxOCw1LjYsMTkuMyw4TDE5LjMsOHogTTExLjMsMy43djIuN0M5LDYuNCw2LjgsNyw0LjcsOEM2LDUuNiw4LjUsNCwxMS4zLDMuN0wxMS4zLDMuN3omI3hkOyYjeGE7JiN4OTsgTTEyLDIwLjNjLTMsMC01LjgtMS43LTcuMy00LjNjMS4xLDAuNiwyLjIsMSwzLjQsMS4yYzEsMC4yLDIuMSwwLjMsMy4xLDAuNHYxLjdjMCwwLjMsMC4yLDAuNSwwLjUsMC41YzAuMSwwLDAuMy0wLjEsMC40LTAuMiYjeGQ7JiN4YTsmI3g5O2wyLjgtMi44YzAuMi0wLjIsMC4yLTAuNSwwLTAuN2MwLDAsMCwwLDAsMGwtMi44LTIuOGMtMC4yLTAuMi0wLj'+
			'UtMC4yLTAuNywwYy0wLjEsMC4xLTAuMSwwLjItMC4xLDAuNHYxLjljLTAuOSwwLTEuOC0wLjEtMi43LTAuMyYjeGQ7JiN4YTsmI3g5O2MtMi45LTAuNi00LjktMS45LTQuOS0zLjNjMC0xLjYsMy4xLTMuNCw3LjYtMy42VjEyYzAsMC40LDAuMywwLjcsMC43LDAuN3MwLjctMC4zLDAuNy0wLjdWOC40YzQuNSwwLjIsNy42LDIsNy42LDMuNiYjeGQ7JiN4YTsmI3g5O2MwLDEuMS0xLjQsMi4yLTMuNiwyLjlsLTAuNiwwLjJjLTAuNSwwLjEtMC45LDAuNy0wLjcsMS4yYzAsMCwwLDAsMCwwYzAuMSwwLjUsMC43LDAuOSwxLjIsMC43YzAsMCwwLDAsMCwwJiN4ZDsmI3hhOyYjeDk7YzAuMi0wLjEsMC41'+
			'LTAuMSwwLjctMC4yYzAuNy0wLjIsMS40LTAuNSwyLTAuOEMxNy44LDE4LjcsMTUsMjAuMywxMiwyMC4zeiIvPgo8L3N2Zz4K';
		me._gyro_on__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._gyro_on__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xX2NvcHkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI0IDI0OyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluay'+
			'IgeT0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojZGZlMDM2O30mI3hkOwo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTIyLjMsMTJjMC01LjQtNC4yLTkuOS05LjYtMTAuM1YxLjFjMC0wLjQtMC4zLTAuNy0wLjctMC43cy0wLjcsMC4zLTAuNywwLjd2MC42QzUuNiwyLjEsMS4zLDcsMS42LDEyLjYmI3hkOyYjeGE7JiN4OTtjMC4zLDUuMiw0LjUsOS4zLDkuNiw5LjZ2MC42YzAsMC40LDAuMywwLjcsMC43LDAuN3MwLjctMC4zLDAuNy0wLjdsMCwwdi0wLjZDMTguMSwyMS45LDIyLjMsMTcuNCwyMi4zLDEyeiBNMTkuMyw4JiN4ZDsmI3hhOyYj'+
			'eDk7Yy0yLjEtMS00LjMtMS42LTYuNi0xLjZWMy43QzE1LjUsNCwxOCw1LjYsMTkuMyw4TDE5LjMsOHogTTExLjMsMy43djIuN0M5LDYuNCw2LjgsNyw0LjcsOEM2LDUuNiw4LjUsNCwxMS4zLDMuN0wxMS4zLDMuN3omI3hkOyYjeGE7JiN4OTsgTTEyLDIwLjNjLTMsMC01LjgtMS43LTcuMy00LjNjMS4xLDAuNiwyLjIsMSwzLjQsMS4yYzEsMC4yLDIuMSwwLjMsMy4xLDAuNHYxLjdjMCwwLjMsMC4yLDAuNSwwLjUsMC41YzAuMSwwLDAuMy0wLjEsMC40LTAuMiYjeGQ7JiN4YTsmI3g5O2wyLjgtMi44YzAuMi0wLjIsMC4yLTAuNSwwLTAuN2MwLDAsMCwwLDAsMGwtMi44LTIuOGMtMC4yLTAuMi0wLj'+
			'UtMC4yLTAuNywwYy0wLjEsMC4xLTAuMSwwLjItMC4xLDAuNHYxLjljLTAuOSwwLTEuOC0wLjEtMi43LTAuMyYjeGQ7JiN4YTsmI3g5O2MtMi45LTAuNi00LjktMS45LTQuOS0zLjNjMC0xLjYsMy4xLTMuNCw3LjYtMy42VjEyYzAsMC40LDAuMywwLjcsMC43LDAuN3MwLjctMC4zLDAuNy0wLjdWOC40YzQuNSwwLjIsNy42LDIsNy42LDMuNiYjeGQ7JiN4YTsmI3g5O2MwLDEuMS0xLjQsMi4yLTMuNiwyLjlsLTAuNiwwLjJjLTAuNSwwLjEtMC45LDAuNy0wLjcsMS4yYzAsMCwwLDAsMCwwYzAuMSwwLjUsMC43LDAuOSwxLjIsMC43YzAsMCwwLDAsMCwwJiN4ZDsmI3hhOyYjeDk7YzAuMi0wLjEsMC41'+
			'LTAuMSwwLjctMC4yYzAuNy0wLjIsMS40LTAuNSwyLTAuOEMxNy44LDE4LjcsMTUsMjAuMywxMiwyMC4zeiIvPgo8L3N2Zz4K';
		me._gyro_on__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="gyro_on";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._gyro_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._gyro_on.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getUseGyro() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._gyro_on.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._gyro_on.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._gyro_on.style.transition='';
				if (me._gyro_on.ggCurrentLogicStateVisible == 0) {
					me._gyro_on.style.visibility="hidden";
					me._gyro_on.ggVisible=false;
				}
				else {
					me._gyro_on.style.visibility=(Number(me._gyro_on.style.opacity)>0||!me._gyro_on.style.opacity)?'inherit':'hidden';
					me._gyro_on.ggVisible=true;
				}
			}
		}
		me._gyro_on.onmouseenter=function (e) {
			me._gyro_on__img.style.visibility='hidden';
			me._gyro_on__imgo.style.visibility='inherit';
			me.elementMouseOver['gyro_on']=true;
		}
		me._gyro_on.onmouseleave=function (e) {
			me._gyro_on__img.style.visibility='inherit';
			me._gyro_on__imgo.style.visibility='hidden';
			me.elementMouseOver['gyro_on']=false;
		}
		me._gyro_on.ggUpdatePosition=function (useTransition) {
		}
		me._gyro_toggle.appendChild(me._gyro_on);
		el=me._gyro_off=document.createElement('div');
		els=me._gyro_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDI0IDI0IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9JiN4ZDsKPC9zdHlsZT4KIDxnIGlkPSJMYXllcl8zIj4KICA8Zz4KICAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTE5LjMsMTkuM0wxOS4zLDE5LjNsLTEuNC0xLjRsMCwwTDE2LjksMTdsMCwwbC0xLjQtMS40bDAsMEwxMywxM0wzLjUsMy41Yy0wLjQtMC40LTEtMC40LTEuNCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC40LDAuNC0wLjQsMSwwLDEuNGwxLjMsMS4zQzIuMyw3LjksMS43LDEwLDEuNywxMmMwLDUuNCw0LjIsOS45LDkuNiwxMC4zdjAuNmMwLDAuNCwwLjMsMC43LDAuNywwLjdz'+
			'MC43LTAuMywwLjctMC43bDAsMHYtMC42JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxLjgtMC4xLDMuNS0wLjcsNS0xLjdsMS4zLDEuM2MwLjQsMC40LDEuMSwwLjMsMS40LTAuMWMwLjMtMC40LDAuMy0wLjksMC0xLjNMMTkuMywxOS4zeiBNNC45LDcuN0w1LDcuOEw0LjcsOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDNC44LDcuOSw0LjgsNy44LDQuOSw3Ljd6IE0zLjcsMTJjMC0wLjksMS4xLTIsMi44LTIuN2w0LjgsNC44djEuNWMtMC45LDAtMS44LTAuMS0yLjctMC4zQzUuNywxNC43LDMuNywxMy4zLDMuNywxMnogTTEyLDIwLjMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0zLDAtNS'+
			'44LTEuNy03LjMtNC4zYzEuMSwwLjYsMi4yLDEsMy40LDEuMmMxLDAuMiwyLjEsMC4zLDMuMSwwLjR2MS43YzAsMC4zLDAuMiwwLjUsMC41LDAuNWMwLjEsMCwwLjMtMC4xLDAuNC0wLjJsMi4zLTIuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtsMS44LDEuOEMxNSwxOS45LDEzLjUsMjAuMywxMiwyMC4zeiIvPgogICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNy44LDQuOGMxLjEtMC42LDIuMy0xLDMuNS0xLjF2Mi43Yy0wLjYsMC0xLjIsMC4xLTEuOCwwLjJsMy4yLDMuMlY4LjRjNC41LDAuMiw3LjYsMiw3LjYsMy42JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLDAuOS0xLjEsMS45LTIuOCwy'+
			'LjZsMS41LDEuNWwwLjItMC4xYzAsMC4xLTAuMSwwLjEtMC4xLDAuMmwxLjUsMS41YzMuMi00LjcsMS45LTExLjEtMi44LTE0LjNjLTEuNS0xLTMuMi0xLjYtNS4xLTEuN1YxLjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAtMC40LTAuMy0wLjctMC43LTAuN3MtMC43LDAuMy0wLjcsMC43djAuNmMtMS44LDAuMS0zLjUsMC43LTUsMS43TDcuOCw0Ljh6IE0xMi43LDMuN0MxNS41LDQsMTgsNS42LDE5LjMsOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTItMS00LjMtMS42LTYuNi0xLjZWMy43eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._gyro_off__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._gyro_off__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDI0IDI0IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I2RmZTAzNjt9JiN4ZDsKPC9zdHlsZT4KIDxnIGlkPSJMYXllcl8zIj4KICA8Zz4KICAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTE5LjMsMTkuM0wxOS4zLDE5LjNsLTEuNC0xLjRsMCwwTDE2LjksMTdsMCwwbC0xLjQtMS40bDAsMEwxMywxM0wzLjUsMy41Yy0wLjQtMC40LTEtMC40LTEuNCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC40LDAuNC0wLjQsMSwwLDEuNGwxLjMsMS4zQzIuMyw3LjksMS43LDEwLDEuNywxMmMwLDUuNCw0LjIsOS45LDkuNiwxMC4zdjAuNmMwLDAuNCwwLjMsMC43LDAuNywwLjdz'+
			'MC43LTAuMywwLjctMC43bDAsMHYtMC42JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxLjgtMC4xLDMuNS0wLjcsNS0xLjdsMS4zLDEuM2MwLjQsMC40LDEuMSwwLjMsMS40LTAuMWMwLjMtMC40LDAuMy0wLjksMC0xLjNMMTkuMywxOS4zeiBNNC45LDcuN0w1LDcuOEw0LjcsOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDNC44LDcuOSw0LjgsNy44LDQuOSw3Ljd6IE0zLjcsMTJjMC0wLjksMS4xLTIsMi44LTIuN2w0LjgsNC44djEuNWMtMC45LDAtMS44LTAuMS0yLjctMC4zQzUuNywxNC43LDMuNywxMy4zLDMuNywxMnogTTEyLDIwLjMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0zLDAtNS'+
			'44LTEuNy03LjMtNC4zYzEuMSwwLjYsMi4yLDEsMy40LDEuMmMxLDAuMiwyLjEsMC4zLDMuMSwwLjR2MS43YzAsMC4zLDAuMiwwLjUsMC41LDAuNWMwLjEsMCwwLjMtMC4xLDAuNC0wLjJsMi4zLTIuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtsMS44LDEuOEMxNSwxOS45LDEzLjUsMjAuMywxMiwyMC4zeiIvPgogICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNy44LDQuOGMxLjEtMC42LDIuMy0xLDMuNS0xLjF2Mi43Yy0wLjYsMC0xLjIsMC4xLTEuOCwwLjJsMy4yLDMuMlY4LjRjNC41LDAuMiw3LjYsMiw3LjYsMy42JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLDAuOS0xLjEsMS45LTIuOCwy'+
			'LjZsMS41LDEuNWwwLjItMC4xYzAsMC4xLTAuMSwwLjEtMC4xLDAuMmwxLjUsMS41YzMuMi00LjcsMS45LTExLjEtMi44LTE0LjNjLTEuNS0xLTMuMi0xLjYtNS4xLTEuN1YxLjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAtMC40LTAuMy0wLjctMC43LTAuN3MtMC43LDAuMy0wLjcsMC43djAuNmMtMS44LDAuMS0zLjUsMC43LTUsMS43TDcuOCw0Ljh6IE0xMi43LDMuN0MxNS41LDQsMTgsNS42LDE5LjMsOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTItMS00LjMtMS42LTYuNi0xLjZWMy43eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._gyro_off__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="gyro_off";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._gyro_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._gyro_off.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getUseGyro() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._gyro_off.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._gyro_off.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._gyro_off.style.transition='';
				if (me._gyro_off.ggCurrentLogicStateVisible == 0) {
					me._gyro_off.style.visibility=(Number(me._gyro_off.style.opacity)>0||!me._gyro_off.style.opacity)?'inherit':'hidden';
					me._gyro_off.ggVisible=true;
				}
				else {
					me._gyro_off.style.visibility="hidden";
					me._gyro_off.ggVisible=false;
				}
			}
		}
		me._gyro_off.onmouseenter=function (e) {
			me._gyro_off__img.style.visibility='hidden';
			me._gyro_off__imgo.style.visibility='inherit';
			me.elementMouseOver['gyro_off']=true;
		}
		me._gyro_off.onmouseleave=function (e) {
			me._gyro_off__img.style.visibility='inherit';
			me._gyro_off__imgo.style.visibility='hidden';
			me.elementMouseOver['gyro_off']=false;
		}
		me._gyro_off.ggUpdatePosition=function (useTransition) {
		}
		me._gyro_toggle.appendChild(me._gyro_off);
		me._menu.appendChild(me._gyro_toggle);
		el=me._vr=document.createElement('div');
		els=me._vr__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDI0IDI0IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9JiN4ZDsKPC9zdHlsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMi4yLDcuNmMtMC4yLTAuOS0xLjEtMS41LTItMS41SDE4Yy0xLjUtMS41LTMuNi0yLjUtNi0yLjVzLTQuNSwxLTYsMi41SDMuOGMtMC45LDAtMS44LDAuNi0yLDEuNSYjeGQ7JiN4YTsmI3g5O2MtMC4zLDAuOS0wLjQsMi4xLTAuNCwzLjZjMCwxLjQsMC4xLDIuNiwwLjQsMy42YzAuMiwwLjksMS4xLDEuNSwyLDEuNWgwLjljMS41LDIuNSw0LjIsNC4yLDcuMyw0LjJzNS44LTEuNyw3LjMtNC4yaDAuOSYjeGQ7JiN4YTsmI3g5O2Mw'+
			'LjksMCwxLjgtMC42LDItMS41YzAuMy0wLjksMC40LTIuMSwwLjQtMy42QzIyLjYsOS43LDIyLjUsOC41LDIyLjIsNy42eiBNMTEuMSwxMi43TDExLjEsMTIuN0wxMS4xLDEyLjdMMTEuMSwxMi43eiBNMjAuMywxNC4yJiN4ZDsmI3hhOyYjeDk7TDIwLjMsMTQuMmgtNS4xbC0xLjYtMi4xYy0wLjQtMC41LTEtMC44LTEuNi0wLjhsMCwwYy0wLjYsMC0xLjIsMC4zLTEuNiwwLjhsLTEuOCwyLjJIMy44YzAsMC0wLjEsMC0wLjEtMC4xJiN4ZDsmI3hhOyYjeDk7Yy0wLjEtMC41LTAuMy0xLjUtMC4zLTNzMC4yLTIuNSwwLjMtM2wwLjEtMC4xaDE2LjRjMCwwLDAuMSwwLDAuMSwwLjFjMC4xLDAuNSwwLj'+
			'MsMS41LDAuMywzQzIwLjYsMTIuNywyMC40LDEzLjcsMjAuMywxNC4yeiIvPgo8L3N2Zz4K';
		me._vr__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._vr__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDI0IDI0IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I2RmZTAzNjt9JiN4ZDsKPC9zdHlsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMi4yLDcuNmMtMC4yLTAuOS0xLjEtMS41LTItMS41SDE4Yy0xLjUtMS41LTMuNi0yLjUtNi0yLjVzLTQuNSwxLTYsMi41SDMuOGMtMC45LDAtMS44LDAuNi0yLDEuNSYjeGQ7JiN4YTsmI3g5O2MtMC4zLDAuOS0wLjQsMi4xLTAuNCwzLjZjMCwxLjQsMC4xLDIuNiwwLjQsMy42YzAuMiwwLjksMS4xLDEuNSwyLDEuNWgwLjljMS41LDIuNSw0LjIsNC4yLDcuMyw0LjJzNS44LTEuNyw3LjMtNC4yaDAuOSYjeGQ7JiN4YTsmI3g5O2Mw'+
			'LjksMCwxLjgtMC42LDItMS41YzAuMy0wLjksMC40LTIuMSwwLjQtMy42QzIyLjYsOS43LDIyLjUsOC41LDIyLjIsNy42eiBNMTEuMSwxMi43TDExLjEsMTIuN0wxMS4xLDEyLjdMMTEuMSwxMi43eiBNMjAuMywxNC4yJiN4ZDsmI3hhOyYjeDk7TDIwLjMsMTQuMmgtNS4xbC0xLjYtMi4xYy0wLjQtMC41LTEtMC44LTEuNi0wLjhsMCwwYy0wLjYsMC0xLjIsMC4zLTEuNiwwLjhsLTEuOCwyLjJIMy44YzAsMC0wLjEsMC0wLjEtMC4xJiN4ZDsmI3hhOyYjeDk7Yy0wLjEtMC41LTAuMy0xLjUtMC4zLTNzMC4yLTIuNSwwLjMtM2wwLjEtMC4xaDE2LjRjMCwwLDAuMSwwLDAuMSwwLjFjMC4xLDAuNSwwLj'+
			'MsMS41LDAuMywzQzIwLjYsMTIuNywyMC40LDEzLjcsMjAuMywxNC4yeiIvPgo8L3N2Zz4K';
		me._vr__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="vr";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 16px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._vr.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._vr.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getVariableValue('opt_fullscreen') == true)) && 
				((player.getVariableValue('has_fullscreen') == true))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (
				((player.getHasSounds() == true))
			)
			{
				newConditionsTruePosition.push(1);
			}
			if (JSON.stringify(me._vr.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._vr.ggConditionsTruePosition = newConditionsTruePosition;
				me._vr.style.transition='right 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._vr.ggConditionsTruePosition.includes(0)) {
					deltaX += 0;
					deltaY += 48;
				}
				if (me._vr.ggConditionsTruePosition.includes(1)) {
					deltaX += 0;
					deltaY += 48;
				}
					me._vr.style.right=(20+deltaX) + 'px';
					me._vr.style.top=(16+deltaY) + 'px';
			}
		}
		me._vr.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.hasVR() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._vr.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._vr.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._vr.style.transition='right 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._vr.ggCurrentLogicStateAlpha == 0) {
					me._vr.style.visibility=me._vr.ggVisible?'inherit':'hidden';
					me._vr.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._vr.style.opacity == 0.0) { me._vr.style.visibility="hidden"; } }, 505);
					me._vr.style.opacity=0;
				}
			}
		}
		me._vr.onclick=function (e) {
			player.enterVR();
		}
		me._vr.onmouseenter=function (e) {
			me._vr__img.style.visibility='hidden';
			me._vr__imgo.style.visibility='inherit';
			me.elementMouseOver['vr']=true;
		}
		me._vr.onmouseleave=function (e) {
			me._vr__img.style.visibility='inherit';
			me._vr__imgo.style.visibility='hidden';
			me.elementMouseOver['vr']=false;
		}
		me._vr.ggUpdatePosition=function (useTransition) {
		}
		me._menu.appendChild(me._vr);
		el=me._audio_toggle=document.createElement('div');
		el.ggId="audio_toggle";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 16px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._audio_toggle.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._audio_toggle.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getVariableValue('opt_fullscreen') == true)) && 
				((player.getVariableValue('has_fullscreen') == true))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (JSON.stringify(me._audio_toggle.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._audio_toggle.ggConditionsTruePosition = newConditionsTruePosition;
				me._audio_toggle.style.transition='right 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._audio_toggle.ggConditionsTruePosition.includes(0)) {
					deltaX += 0;
					deltaY += 48;
				}
					me._audio_toggle.style.right=(20+deltaX) + 'px';
					me._audio_toggle.style.top=(16+deltaY) + 'px';
			}
		}
		me._audio_toggle.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getHasSounds() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._audio_toggle.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._audio_toggle.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._audio_toggle.style.transition='right 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._audio_toggle.ggCurrentLogicStateAlpha == 0) {
					me._audio_toggle.style.visibility=me._audio_toggle.ggVisible?'inherit':'hidden';
					me._audio_toggle.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._audio_toggle.style.opacity == 0.0) { me._audio_toggle.style.visibility="hidden"; } }, 505);
					me._audio_toggle.style.opacity=0;
				}
			}
		}
		me._audio_toggle.onclick=function (e) {
			player.toggleMuted("_all");
			player.setVariableValue('toggle_audio', !player.getVariableValue('toggle_audio'));
		}
		me._audio_toggle.ggUpdatePosition=function (useTransition) {
		}
		el=me._audio_on=document.createElement('div');
		els=me._audio_on__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgZmlsbD0id2hpdGUiIGhlaWdodD0iMThweCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMThweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnPgogIDxyZWN0IGZpbGw9Im5vbmUiIGhlaWdodD0iMjQiIHdpZHRoPSIyNCIvPgogPC9nPgogPGc+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0zLDEwdjRjMCwwLjU1LDAuNDUsMSwxLDFoM2wzLjI5LDMuMjljMC42MywwLjYzLDEuNzEsMC4xOCwxLjcxLTAuNzFWNi40MWMwLTAuODktMS4wOC0xLjM0LTEuNzEtMC43MUw3LDlINCBDMy40NSw5LDMsOS40NSwzLD'+
			'EweiBNMTYuNSwxMmMwLTEuNzctMS4wMi0zLjI5LTIuNS00LjAzdjguMDVDMTUuNDgsMTUuMjksMTYuNSwxMy43NywxNi41LDEyeiBNMTQsNC40NXYwLjIgYzAsMC4zOCwwLjI1LDAuNzEsMC42LDAuODVDMTcuMTgsNi41MywxOSw5LjA2LDE5LDEycy0xLjgyLDUuNDctNC40LDYuNWMtMC4zNiwwLjE0LTAuNiwwLjQ3LTAuNiwwLjg1djAuMiBjMCwwLjYzLDAuNjMsMS4wNywxLjIxLDAuODVDMTguNiwxOS4xMSwyMSwxNS44NCwyMSwxMnMtMi40LTcuMTEtNS43OS04LjRDMTQuNjMsMy4zNywxNCwzLjgyLDE0LDQuNDV6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._audio_on__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._audio_on__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOCAxODsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE4IDE4IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojZGZlMDM2O30mI3hkOwo8L3N0eWxlPgogPGc+CiAgPHJlY3QgY2xhc3M9InN0MCIgaGVpZ2h0PSIxOCIgd2lkdGg9IjE4Ii8+CiA8L2c+CiA8Zz4KICA8Zz4KICAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTIuMiw3LjV2M2MwLDAuNCwwLjMsMC44LDAuOCwwLjhoMi4ybDIuNSwyLjVDOC4yLDE0LjIsOSwxMy45LDksMTMuMlY0LjhjMC0wLjctMC44LTEtMS4zLTAuNUw1LjIsNi44SDMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzIuNiw2LjgsMi4yLDcuMSwyLjIsNy41eiBN'+
			'MTIuNCw5YzAtMS4zLTAuOC0yLjUtMS45LTN2NkMxMS42LDExLjUsMTIuNCwxMC4zLDEyLjQsOXogTTEwLjUsMy4zdjAuMWMwLDAuMywwLjIsMC41LDAuNSwwLjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzEuOSwwLjgsMy4zLDIuNywzLjMsNC45cy0xLjQsNC4xLTMuMyw0LjljLTAuMywwLjEtMC41LDAuNC0wLjUsMC42djAuMWMwLDAuNSwwLjUsMC44LDAuOSwwLjZjMi41LTEsNC4zLTMuNCw0LjMtNi4zJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O1MxNCwzLjcsMTEuNCwyLjdDMTEsMi41LDEwLjUsMi45LDEwLjUsMy4zeiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._audio_on__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="audio_on";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._audio_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._audio_on.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('toggle_audio') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._audio_on.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._audio_on.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._audio_on.style.transition='';
				if (me._audio_on.ggCurrentLogicStateVisible == 0) {
					me._audio_on.style.visibility=(Number(me._audio_on.style.opacity)>0||!me._audio_on.style.opacity)?'inherit':'hidden';
					me._audio_on.ggVisible=true;
				}
				else {
					me._audio_on.style.visibility="hidden";
					me._audio_on.ggVisible=false;
				}
			}
		}
		me._audio_on.onmouseenter=function (e) {
			me._audio_on__img.style.visibility='hidden';
			me._audio_on__imgo.style.visibility='inherit';
			me.elementMouseOver['audio_on']=true;
		}
		me._audio_on.onmouseleave=function (e) {
			me._audio_on__img.style.visibility='inherit';
			me._audio_on__imgo.style.visibility='hidden';
			me.elementMouseOver['audio_on']=false;
		}
		me._audio_on.ggUpdatePosition=function (useTransition) {
		}
		me._audio_toggle.appendChild(me._audio_on);
		el=me._audio_off=document.createElement('div');
		els=me._audio_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgZmlsbD0id2hpdGUiIGhlaWdodD0iMThweCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMThweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnPgogIDxyZWN0IGZpbGw9Im5vbmUiIGhlaWdodD0iMjQiIHdpZHRoPSIyNCIvPgogPC9nPgogPGc+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0xNi4yNSwxMy40MkMxNi40LDEyLjk3LDE2LjUsMTIuNSwxNi41LDEyYzAtMS43Ny0xLjAyLTMuMjktMi41LTQuMDN2My4yTDE2LjI1LDEzLjQyeiIvPgogICA8cGF0aCBkPSJNMTksMTJjMCwxLjIxLTAuMzEsMi4zNC'+
			'0wLjg1LDMuMzJsMS40NiwxLjQ2QzIwLjQ4LDE1LjM5LDIxLDEzLjc2LDIxLDEyYzAtMy44My0yLjQtNy4xMS01Ljc4LTguNCBDMTQuNjMsMy4zNywxNCwzLjgzLDE0LDQuNDZ2MC4xOWMwLDAuMzgsMC4yNSwwLjcxLDAuNjEsMC44NUMxNy4xOCw2LjU0LDE5LDkuMDYsMTksMTJ6Ii8+CiAgIDxwYXRoIGQ9Ik0yLjEsMy41MUwyLjEsMy41MWMtMC4zOSwwLjM5LTAuMzksMS4wMiwwLDEuNDFMNi4xNyw5SDRjLTAuNTUsMC0xLDAuNDUtMSwxdjRjMCwwLjU1LDAuNDUsMSwxLDFoM2wzLjI5LDMuMjkgYzAuNjMsMC42MywxLjcxLDAuMTgsMS43MS0wLjcxdi0yLjc2bDMuMzIsMy4zMmMtMC4yMywwLjEz'+
			'LTAuNDcsMC4yNC0wLjcxLDAuMzVjLTAuMzcsMC4xNi0wLjYsMC41Mi0wLjYsMC45MXYwIGMwLDAuNywwLjcsMS4yLDEuMzUsMC45NGMwLjUtMC4yLDAuOTktMC40NSwxLjQ0LTAuNzNsMi4yOCwyLjI4YzAuMzksMC4zOSwxLjAyLDAuMzksMS40MSwwbDAsMGMwLjM5LTAuMzksMC4zOS0xLjAyLDAtMS40MSBMMy41MSwzLjUxQzMuMTIsMy4xMiwyLjQ5LDMuMTIsMi4xLDMuNTF6Ii8+CiAgIDxwYXRoIGQ9Ik0xMiw5LjE3VjYuNDFjMC0wLjg5LTEuMDgtMS4zNC0xLjcxLTAuNzFMOS40MSw2LjU5TDEyLDkuMTd6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._audio_off__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._audio_off__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOCAxODsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE4IDE4IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojZGZlMDM2O30mI3hkOwo8L3N0eWxlPgogPGc+CiAgPHJlY3QgY2xhc3M9InN0MCIgaGVpZ2h0PSIxOCIgd2lkdGg9IjE4Ii8+CiA8L2c+CiA8Zz4KICA8Zz4KICAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTEyLjIsMTAuMWMwLjEtMC4zLDAuMi0wLjcsMC4yLTEuMWMwLTEuMy0wLjgtMi41LTEuOS0zdjIuNEwxMi4yLDEwLjF6Ii8+CiAgIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xNC4yLDljMCwwLjktMC4yLDEuOC0wLjYsMi41bDEuMSwxLjFjMC43LTEsMS0yLjMsMS0zLjZj'+
			'MC0yLjktMS44LTUuMy00LjMtNi4zYy0wLjQtMC4yLTAuOSwwLjItMC45LDAuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTt2MC4xYzAsMC4zLDAuMiwwLjUsMC41LDAuNkMxMi45LDQuOSwxNC4yLDYuOCwxNC4yLDl6Ii8+CiAgIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xLjYsMi42TDEuNiwyLjZjLTAuMywwLjMtMC4zLDAuOCwwLDEuMWwzLjEsMy4xSDNjLTAuNCwwLTAuOCwwLjMtMC44LDAuOHYzYzAsMC40LDAuMywwLjgsMC44LDAuOGgyLjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7bDIuNSwyLjVDOC4yLDE0LjIsOSwxMy45LDksMTMuMnYtMi4xbDIuNSwyLjVjLTAuMiwwLjEtMC40LDAuMi'+
			'0wLjUsMC4zYy0wLjMsMC4xLTAuNCwwLjQtMC40LDAuN2wwLDBjMCwwLjUsMC41LDAuOSwxLDAuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC40LTAuMSwwLjctMC4zLDEuMS0wLjVsMS43LDEuN2MwLjMsMC4zLDAuOCwwLjMsMS4xLDBsMCwwYzAuMy0wLjMsMC4zLTAuOCwwLTEuMUwyLjYsMi42QzIuMywyLjMsMS45LDIuMywxLjYsMi42eiIvPgogICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNOSw2LjlWNC44YzAtMC43LTAuOC0xLTEuMy0wLjVMNy4xLDQuOUw5LDYuOXoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._audio_off__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="audio_off";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._audio_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._audio_off.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('toggle_audio') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._audio_off.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._audio_off.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._audio_off.style.transition='';
				if (me._audio_off.ggCurrentLogicStateVisible == 0) {
					me._audio_off.style.visibility="hidden";
					me._audio_off.ggVisible=false;
				}
				else {
					me._audio_off.style.visibility=(Number(me._audio_off.style.opacity)>0||!me._audio_off.style.opacity)?'inherit':'hidden';
					me._audio_off.ggVisible=true;
				}
			}
		}
		me._audio_off.onmouseenter=function (e) {
			me._audio_off__img.style.visibility='hidden';
			me._audio_off__imgo.style.visibility='inherit';
			me.elementMouseOver['audio_off']=true;
		}
		me._audio_off.onmouseleave=function (e) {
			me._audio_off__img.style.visibility='inherit';
			me._audio_off__imgo.style.visibility='hidden';
			me.elementMouseOver['audio_off']=false;
		}
		me._audio_off.ggUpdatePosition=function (useTransition) {
		}
		me._audio_toggle.appendChild(me._audio_off);
		me._menu.appendChild(me._audio_toggle);
		el=me._fullscreen_toggle=document.createElement('div');
		el.ggId="fullscreen_toggle";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 16px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._fullscreen_toggle.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._fullscreen_toggle.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('opt_fullscreen') == true)) && 
				((player.getVariableValue('has_fullscreen') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._fullscreen_toggle.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._fullscreen_toggle.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._fullscreen_toggle.style.transition='opacity 500ms ease 0ms';
				if (me._fullscreen_toggle.ggCurrentLogicStateAlpha == 0) {
					me._fullscreen_toggle.style.visibility=me._fullscreen_toggle.ggVisible?'inherit':'hidden';
					me._fullscreen_toggle.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._fullscreen_toggle.style.opacity == 0.0) { me._fullscreen_toggle.style.visibility="hidden"; } }, 505);
					me._fullscreen_toggle.style.opacity=0;
				}
			}
		}
		me._fullscreen_toggle.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._fullscreen_toggle.ggUpdatePosition=function (useTransition) {
		}
		el=me._fullscreen_exit=document.createElement('div');
		els=me._fullscreen_exit__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgZmlsbD0id2hpdGUiIGhlaWdodD0iMThweCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMThweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnPgogIDxwYXRoIGQ9Ik0wLDBoMjR2MjRIMFYweiIgZmlsbD0ibm9uZSIvPgogPC9nPgogPGc+CiAgPGc+CiAgIDxnPgogICAgPHBhdGggZD0iTTYsMTZoMnYyYzAsMC41NSwwLjQ1LDEsMSwxbDAsMGMwLjU1LDAsMS0wLjQ1LDEtMXYtM2MwLTAuNTUtMC40NS0xLTEtMUg2Yy0wLjU1LDAtMSwwLjQ1LTEsMWwwLDBDNSwxNS41NSw1LjQ1LDE2LDYsMTYgei'+
			'BNOCw4SDZDNS40NSw4LDUsOC40NSw1LDlsMCwwYzAsMC41NSwwLjQ1LDEsMSwxaDNjMC41NSwwLDEtMC40NSwxLTFWNmMwLTAuNTUtMC40NS0xLTEtMWwwLDBDOC40NSw1LDgsNS40NSw4LDZWOHogTTE1LDE5IEwxNSwxOWMwLjU1LDAsMS0wLjQ1LDEtMXYtMmgyYzAuNTUsMCwxLTAuNDUsMS0xbDAsMGMwLTAuNTUtMC40NS0xLTEtMWgtM2MtMC41NSwwLTEsMC40NS0xLDF2M0MxNCwxOC41NSwxNC40NSwxOSwxNSwxOXogTTE2LDggVjZjMC0wLjU1LTAuNDUtMS0xLTFsMCwwYy0wLjU1LDAtMSwwLjQ1LTEsMXYzYzAsMC41NSwwLjQ1LDEsMSwxaDNjMC41NSwwLDEtMC40NSwxLTFsMCwwYzAtMC41'+
			'NS0wLjQ1LTEtMS0xSDE2eiIvPgogICA8L2c+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._fullscreen_exit__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._fullscreen_exit__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOCAxODsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE4IDE4IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojZGZlMDM2O30mI3hkOwo8L3N0eWxlPgogPGc+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTAsMGgxOHYxOEgwVjB6Ii8+CiA8L2c+CiA8Zz4KICA8Zz4KICAgPGc+CiAgICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNC41LDEySDZ2MS41YzAsMC40LDAuMywwLjgsMC44LDAuOGwwLDBjMC40LDAsMC44LTAuMywwLjgtMC44di0yLjJjMC0wLjQtMC4zLTAuOC0wLjgtMC44SDQuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC40LDAtMC44LDAuMy0wLjgsMC44bDAs'+
			'MEMzLjgsMTEuNyw0LjEsMTIsNC41LDEyeiBNNiw2SDQuNUM0LjEsNiwzLjgsNi4zLDMuOCw2LjhsMCwwYzAsMC40LDAuMywwLjgsMC44LDAuOGgyLjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC40LDAsMC44LTAuMywwLjgtMC44VjQuNWMwLTAuNC0wLjMtMC44LTAuOC0wLjhsMCwwQzYuMywzLjgsNiw0LjEsNiw0LjVWNnogTTExLjIsMTQuMkwxMS4yLDE0LjJjMC40LDAsMC44LTAuMywwLjgtMC44VjEyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7aDEuNWMwLjQsMCwwLjgtMC4zLDAuOC0wLjhsMCwwYzAtMC40LTAuMy0wLjgtMC44LTAuOGgtMi4yYy0wLjQsMC0wLjgsMC'+
			'4zLTAuOCwwLjh2Mi4yQzEwLjUsMTMuOSwxMC44LDE0LjIsMTEuMiwxNC4yeiBNMTIsNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O1Y0LjVjMC0wLjQtMC4zLTAuOC0wLjgtMC44bDAsMGMtMC40LDAtMC44LDAuMy0wLjgsMC44djIuMmMwLDAuNCwwLjMsMC44LDAuOCwwLjhoMi4yYzAuNCwwLDAuOC0wLjMsMC44LTAuOGwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMC0wLjQtMC4zLTAuOC0wLjgtMC44SDEyeiIvPgogICA8L2c+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._fullscreen_exit__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="fullscreen_exit";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._fullscreen_exit.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._fullscreen_exit.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._fullscreen_exit.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._fullscreen_exit.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._fullscreen_exit.style.transition='';
				if (me._fullscreen_exit.ggCurrentLogicStateVisible == 0) {
					me._fullscreen_exit.style.visibility=(Number(me._fullscreen_exit.style.opacity)>0||!me._fullscreen_exit.style.opacity)?'inherit':'hidden';
					me._fullscreen_exit.ggVisible=true;
				}
				else {
					me._fullscreen_exit.style.visibility="hidden";
					me._fullscreen_exit.ggVisible=false;
				}
			}
		}
		me._fullscreen_exit.onmouseenter=function (e) {
			me._fullscreen_exit__img.style.visibility='hidden';
			me._fullscreen_exit__imgo.style.visibility='inherit';
			me.elementMouseOver['fullscreen_exit']=true;
		}
		me._fullscreen_exit.onmouseleave=function (e) {
			me._fullscreen_exit__img.style.visibility='inherit';
			me._fullscreen_exit__imgo.style.visibility='hidden';
			me.elementMouseOver['fullscreen_exit']=false;
		}
		me._fullscreen_exit.ggUpdatePosition=function (useTransition) {
		}
		me._fullscreen_toggle.appendChild(me._fullscreen_exit);
		el=me._fullscreen_enter=document.createElement('div');
		els=me._fullscreen_enter__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgZmlsbD0id2hpdGUiIGhlaWdodD0iMThweCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMThweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnPgogIDxwYXRoIGQ9Ik0wLDBoMjR2MjRIMFYweiIgZmlsbD0ibm9uZSIvPgogPC9nPgogPGc+CiAgPGc+CiAgIDxnPgogICAgPHBhdGggZD0iTTYsMTRMNiwxNGMtMC41NSwwLTEsMC40NS0xLDF2M2MwLDAuNTUsMC40NSwxLDEsMWgzYzAuNTUsMCwxLTAuNDUsMS0xbDAsMGMwLTAuNTUtMC40NS0xLTEtMUg3di0yIEM3LDE0LjQ1LDYuNTUsMTQsNiwxNH'+
			'ogTTYsMTBMNiwxMGMwLjU1LDAsMS0wLjQ1LDEtMVY3aDJjMC41NSwwLDEtMC40NSwxLTFsMCwwYzAtMC41NS0wLjQ1LTEtMS0xSDZDNS40NSw1LDUsNS40NSw1LDZ2MyBDNSw5LjU1LDUuNDUsMTAsNiwxMHogTTE3LDE3aC0yYy0wLjU1LDAtMSwwLjQ1LTEsMWwwLDBjMCwwLjU1LDAuNDUsMSwxLDFoM2MwLjU1LDAsMS0wLjQ1LDEtMXYtM2MwLTAuNTUtMC40NS0xLTEtMWwwLDAgYy0wLjU1LDAtMSwwLjQ1LTEsMVYxN3ogTTE0LDZMMTQsNmMwLDAuNTUsMC40NSwxLDEsMWgydjJjMCwwLjU1LDAuNDUsMSwxLDFsMCwwYzAuNTUsMCwxLTAuNDUsMS0xVjZjMC0wLjU1LTAuNDUtMS0xLTFoLTMgQzE0'+
			'LjQ1LDUsMTQsNS40NSwxNCw2eiIvPgogICA8L2c+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._fullscreen_enter__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._fullscreen_enter__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOCAxODsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE4IDE4IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojZGZlMDM2O30mI3hkOwo8L3N0eWxlPgogPGc+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTAsMGgxOHYxOEgwVjB6Ii8+CiA8L2c+CiA8Zz4KICA8Zz4KICAgPGc+CiAgICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNC41LDEwLjVMNC41LDEwLjVjLTAuNCwwLTAuOCwwLjMtMC44LDAuOHYyLjJjMCwwLjQsMC4zLDAuOCwwLjgsMC44aDIuMmMwLjQsMCwwLjgtMC4zLDAuOC0wLjhsMCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAtMC40LTAuMy0wLjgtMC44LTAu'+
			'OEg1LjJ2LTEuNUM1LjIsMTAuOCw0LjksMTAuNSw0LjUsMTAuNXogTTQuNSw3LjVMNC41LDcuNWMwLjQsMCwwLjgtMC4zLDAuOC0wLjhWNS4yaDEuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjQsMCwwLjgtMC4zLDAuOC0wLjhsMCwwYzAtMC40LTAuMy0wLjgtMC44LTAuOEg0LjVjLTAuNCwwLTAuOCwwLjMtMC44LDAuOHYyLjJDMy44LDcuMiw0LjEsNy41LDQuNSw3LjV6IE0xMi44LDEyLjhoLTEuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MtMC40LDAtMC44LDAuMy0wLjgsMC44bDAsMGMwLDAuNCwwLjMsMC44LDAuOCwwLjhoMi4yYzAuNCwwLDAuOC0wLjMsMC44LT'+
			'AuOHYtMi4yYzAtMC40LTAuMy0wLjgtMC44LTAuOGwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTAuNCwwLTAuOCwwLjMtMC44LDAuOFYxMi44eiBNMTAuNSw0LjVMMTAuNSw0LjVjMCwwLjQsMC4zLDAuOCwwLjgsMC44aDEuNXYxLjVjMCwwLjQsMC4zLDAuOCwwLjgsMC44bDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLjQsMCwwLjgtMC4zLDAuOC0wLjhWNC41YzAtMC40LTAuMy0wLjgtMC44LTAuOGgtMi4yQzEwLjgsMy44LDEwLjUsNC4xLDEwLjUsNC41eiIvPgogICA8L2c+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._fullscreen_enter__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="fullscreen_enter";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._fullscreen_enter.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._fullscreen_enter.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._fullscreen_enter.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._fullscreen_enter.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._fullscreen_enter.style.transition='';
				if (me._fullscreen_enter.ggCurrentLogicStateVisible == 0) {
					me._fullscreen_enter.style.visibility="hidden";
					me._fullscreen_enter.ggVisible=false;
				}
				else {
					me._fullscreen_enter.style.visibility=(Number(me._fullscreen_enter.style.opacity)>0||!me._fullscreen_enter.style.opacity)?'inherit':'hidden';
					me._fullscreen_enter.ggVisible=true;
				}
			}
		}
		me._fullscreen_enter.onmouseenter=function (e) {
			me._fullscreen_enter__img.style.visibility='hidden';
			me._fullscreen_enter__imgo.style.visibility='inherit';
			me.elementMouseOver['fullscreen_enter']=true;
		}
		me._fullscreen_enter.onmouseleave=function (e) {
			me._fullscreen_enter__img.style.visibility='inherit';
			me._fullscreen_enter__imgo.style.visibility='hidden';
			me.elementMouseOver['fullscreen_enter']=false;
		}
		me._fullscreen_enter.ggUpdatePosition=function (useTransition) {
		}
		me._fullscreen_toggle.appendChild(me._fullscreen_enter);
		me._menu.appendChild(me._fullscreen_toggle);
		me._safe_area_main.appendChild(me._menu);
		el=me._menu_toggle_bg=document.createElement('div');
		el.ggId="menu_toggle_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 72px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 72px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu_toggle_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_toggle_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._menu_toggle_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._menu_toggle_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._menu_toggle_bg.style.transition='';
				if (me._menu_toggle_bg.ggCurrentLogicStateVisible == 0) {
					me._menu_toggle_bg.style.visibility=(Number(me._menu_toggle_bg.style.opacity)>0||!me._menu_toggle_bg.style.opacity)?'inherit':'hidden';
					me._menu_toggle_bg.ggVisible=true;
				}
				else {
					me._menu_toggle_bg.style.visibility="hidden";
					me._menu_toggle_bg.ggVisible=false;
				}
			}
		}
		me._menu_toggle_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._menu_toggle=document.createElement('div');
		el.ggId="menu_toggle";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu_toggle.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_toggle.ggUpdatePosition=function (useTransition) {
		}
		el=me._menu_close_anim=document.createElement('div');
		el.ggLottie = lottie.loadAnimation({
			container: el,
			path: basePath + 'images/menu_close_anim.json',
			autoplay: false,
			loop: 0,
			rendererSettings: {
				preserveAspectRatio: 'none'
			}
		});
		el.ggLottie.setDirection(-1);
		el.ggLottie.addEventListener('data_ready', function() {
			me._menu_close_anim.ggLottie.goToAndStop(me._menu_close_anim.ggLottie.getDuration(true), true);
		});
		el.ggId="menu_close_anim";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_lottie ";
		el.ggType='lottie';
		el.userData=el;
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu_close_anim.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_close_anim.onclick=function (e) {
			player.setVariableValue('vis_menu', false);
			me._menu_close_anim.ggLottie.loop = 0;
			me._menu_close_anim.ggLottie.play();
			me._menu_open_anim.ggLottie.stop();
			player.setVariableValue('hide_lottie_index', Number("2.00"));
			me._menu_toggle_timer.ggTimeout=Number("0.4") * 1000.0;
			me._menu_toggle_timer.ggTimestamp=skin.ggCurrentTime;
		}
		me._menu_close_anim.onmouseenter=function (e) {
			me.elementMouseOver['menu_close_anim']=true;
			me._menu_toggle_off_active.logicBlock_visible();
		}
		me._menu_close_anim.onmouseleave=function (e) {
			me.elementMouseOver['menu_close_anim']=false;
			me._menu_toggle_off_active.logicBlock_visible();
		}
		me._menu_close_anim.ggUpdatePosition=function (useTransition) {
		}
		el=me._menu_toggle_off_active=document.createElement('div');
		els=me._menu_toggle_off_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjZGZlMDM2IiBmaWxsLW9wYWNpdHk9IjEiIGhlaWdodD0iMThweCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMThweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMFYweiIgZmlsbD0ibm9uZSIvPgogPHBhdGggZD0iTTE4LjMgNS43MWMtLjM5LS4zOS0xLjAyLS4zOS0xLjQxIDBMMTIgMTAuNTkgNy4xMSA1LjdjLS4zOS0uMzktMS4wMi0uMzktMS40MSAwLS4zOS4zOS0uMzkgMS4wMiAwIDEuNDFMMTAuNTkgMTIgNS43IDE2Ljg5Yy0uMzkuMzktLjM5IDEuMDIgMCAxLjQxLjM5LjM5IDEuMDIuMzkgMS40MSAwTD'+
			'EyIDEzLjQxbDQuODkgNC44OWMuMzkuMzkgMS4wMi4zOSAxLjQxIDAgLjM5LS4zOS4zOS0xLjAyIDAtMS40MUwxMy40MSAxMmw0Ljg5LTQuODljLjM4LS4zOC4zOC0xLjAyIDAtMS40eiIvPgo8L3N2Zz4K';
		me._menu_toggle_off_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="menu_toggle_off_active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='z-index: 1;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu_toggle_off_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_toggle_off_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['menu_close_anim'] == true)) && 
				((player.getVariableValue('hide_lottie_index') != Number("2")))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._menu_toggle_off_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._menu_toggle_off_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._menu_toggle_off_active.style.transition='';
				if (me._menu_toggle_off_active.ggCurrentLogicStateVisible == 0) {
					me._menu_toggle_off_active.style.visibility=(Number(me._menu_toggle_off_active.style.opacity)>0||!me._menu_toggle_off_active.style.opacity)?'inherit':'hidden';
					me._menu_toggle_off_active.ggVisible=true;
				}
				else {
					me._menu_toggle_off_active.style.visibility="hidden";
					me._menu_toggle_off_active.ggVisible=false;
				}
			}
		}
		me._menu_toggle_off_active.ggUpdatePosition=function (useTransition) {
		}
		me._menu_close_anim.appendChild(me._menu_toggle_off_active);
		me._menu_toggle.appendChild(me._menu_close_anim);
		el=me._menu_open_anim=document.createElement('div');
		el.ggLottie = lottie.loadAnimation({
			container: el,
			path: basePath + 'images/menu_open_anim.json',
			autoplay: false,
			loop: 0,
			rendererSettings: {
				preserveAspectRatio: 'xMidYMid meet'
			}
		});
		el.ggId="menu_open_anim";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_lottie ";
		el.ggType='lottie';
		el.userData=el;
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu_open_anim.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_open_anim.onclick=function (e) {
			player.setVariableValue('vis_menu', true);
			me._menu_open_anim.ggLottie.loop = 0;
			me._menu_open_anim.ggLottie.play();
			me._menu_close_anim.ggLottie.goToAndStop(me._menu_close_anim.ggLottie.getDuration(true), true);
			player.setVariableValue('hide_lottie_index', Number("1.00"));
			me._menu_toggle_timer.ggTimeout=Number("0.4") * 1000.0;
			me._menu_toggle_timer.ggTimestamp=skin.ggCurrentTime;
		}
		me._menu_open_anim.onmouseenter=function (e) {
			me.elementMouseOver['menu_open_anim']=true;
			me._menu_toggle_on_active.logicBlock_visible();
		}
		me._menu_open_anim.onmouseleave=function (e) {
			me.elementMouseOver['menu_open_anim']=false;
			me._menu_toggle_on_active.logicBlock_visible();
		}
		me._menu_open_anim.ggUpdatePosition=function (useTransition) {
		}
		el=me._menu_toggle_on_active=document.createElement('div');
		els=me._menu_toggle_on_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgZmlsbD0iI2RmZTAzNiIgZmlsbC1vcGFjaXR5PSIxIiBoZWlnaHQ9IjE4cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE4cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8Zz4KICA8cGF0aCBkPSJNMCwwaDI0djI0SDBWMHoiIGZpbGw9Im5vbmUiLz4KIDwvZz4KIDxnPgogIDxnPgogICA8Zz4KICAgIDxwYXRoIGQ9Ik00LDE4aDE2YzAuNTUsMCwxLTAuNDUsMS0xbDAsMGMwLTAuNTUtMC40NS0xLTEtMUg0Yy0wLjU1LDAtMSwwLjQ1LTEsMWwwLDBDMywxNy41NSwzLjQ1LDE4LDQsMTh6IE00LD'+
			'EzaDE2IGMwLjU1LDAsMS0wLjQ1LDEtMWwwLDBjMC0wLjU1LTAuNDUtMS0xLTFINGMtMC41NSwwLTEsMC40NS0xLDFsMCwwQzMsMTIuNTUsMy40NSwxMyw0LDEzeiBNMyw3TDMsN2MwLDAuNTUsMC40NSwxLDEsMWgxNiBjMC41NSwwLDEtMC40NSwxLTFsMCwwYzAtMC41NS0wLjQ1LTEtMS0xSDRDMy40NSw2LDMsNi40NSwzLDd6Ii8+CiAgIDwvZz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._menu_toggle_on_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="menu_toggle_on_active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='z-index: 1;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu_toggle_on_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_toggle_on_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['menu_open_anim'] == true)) && 
				((player.getVariableValue('hide_lottie_index') != Number("1")))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._menu_toggle_on_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._menu_toggle_on_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._menu_toggle_on_active.style.transition='';
				if (me._menu_toggle_on_active.ggCurrentLogicStateVisible == 0) {
					me._menu_toggle_on_active.style.visibility=(Number(me._menu_toggle_on_active.style.opacity)>0||!me._menu_toggle_on_active.style.opacity)?'inherit':'hidden';
					me._menu_toggle_on_active.ggVisible=true;
				}
				else {
					me._menu_toggle_on_active.style.visibility="hidden";
					me._menu_toggle_on_active.ggVisible=false;
				}
			}
		}
		me._menu_toggle_on_active.onclick=function (e) {
			player.setVariableValue('vis_menu', true);
			me._menu_open_anim.ggLottie.loop = 0;
			me._menu_open_anim.ggLottie.play();
			me._menu_close_anim.ggLottie.goToAndStop(me._menu_close_anim.ggLottie.getDuration(true), true);
			player.setVariableValue('hide_lottie_index', Number("1.00"));
			me._menu_toggle_timer.ggTimeout=Number("0.5") * 1000.0;
			me._menu_toggle_timer.ggTimestamp=skin.ggCurrentTime;
		}
		me._menu_toggle_on_active.ggUpdatePosition=function (useTransition) {
		}
		me._menu_open_anim.appendChild(me._menu_toggle_on_active);
		me._menu_toggle.appendChild(me._menu_open_anim);
		el=me._menu_toggle_timer=document.createElement('div');
		el.ggTimestamp=0;
		el.ggLastIsActive=false;
		el.ggTimeout=5000;
		el.ggId="menu_toggle_timer";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		el.userData=el;
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu_toggle_timer.ggIsActive=function() {
			return (me._menu_toggle_timer.ggTimestamp + me._menu_toggle_timer.ggTimeout) >= skin.ggCurrentTime;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_toggle_timer.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._menu_toggle_timer.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._menu_toggle_timer.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._menu_toggle_timer.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._menu_toggle_timer.style.transition='';
				if (me._menu_toggle_timer.ggCurrentLogicStateVisible == 0) {
					me._menu_toggle_timer.style.visibility="hidden";
					me._menu_toggle_timer.ggVisible=false;
				}
				else {
					me._menu_toggle_timer.style.visibility=(Number(me._menu_toggle_timer.style.opacity)>0||!me._menu_toggle_timer.style.opacity)?'inherit':'hidden';
					me._menu_toggle_timer.ggVisible=true;
				}
			}
		}
		me._menu_toggle_timer.ggDeactivate=function () {
			if (
				(
					((player.getVariableValue('hide_lottie_index') == Number("1")))
				)
			) {
				me._menu_close_anim.style.transition='none';
				me._menu_close_anim.style.visibility=(Number(me._menu_close_anim.style.opacity)>0||!me._menu_close_anim.style.opacity)?'inherit':'hidden';
				me._menu_close_anim.ggVisible=true;
			}
			if (
				(
					((player.getVariableValue('hide_lottie_index') == Number("1")))
				)
			) {
				me._menu_open_anim.style.transition='none';
				me._menu_open_anim.style.visibility='hidden';
				me._menu_open_anim.ggVisible=false;
			}
			if (
				(
					((player.getVariableValue('hide_lottie_index') == Number("2")))
				)
			) {
				me._menu_open_anim.style.transition='none';
				me._menu_open_anim.style.visibility=(Number(me._menu_open_anim.style.opacity)>0||!me._menu_open_anim.style.opacity)?'inherit':'hidden';
				me._menu_open_anim.ggVisible=true;
			}
			if (
				(
					((player.getVariableValue('hide_lottie_index') == Number("2")))
				)
			) {
				me._menu_close_anim.style.transition='none';
				me._menu_close_anim.style.visibility='hidden';
				me._menu_close_anim.ggVisible=false;
			}
		}
		me._menu_toggle_timer.ggCurrentLogicStateVisible = -1;
		me._menu_toggle_timer.ggUpdateConditionTimer=function () {
			me._menu_toggle_timer.logicBlock_visible();
		}
		me._menu_toggle_timer.ggUpdatePosition=function (useTransition) {
		}
		me._menu_toggle.appendChild(me._menu_toggle_timer);
		me._menu_toggle_bg.appendChild(me._menu_toggle);
		me._safe_area_main.appendChild(me._menu_toggle_bg);
		el=me._menu_toggle_bg_safe_area=document.createElement('div');
		el.ggId="menu_toggle_bg_safe_area";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 72px;';
		hs+='left : -200px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu_toggle_bg_safe_area.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_toggle_bg_safe_area.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._menu_toggle_bg_safe_area.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._menu_toggle_bg_safe_area.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._menu_toggle_bg_safe_area.style.transition='';
				if (me._menu_toggle_bg_safe_area.ggCurrentLogicStateVisible == 0) {
					me._menu_toggle_bg_safe_area.style.visibility=(Number(me._menu_toggle_bg_safe_area.style.opacity)>0||!me._menu_toggle_bg_safe_area.style.opacity)?'inherit':'hidden';
					me._menu_toggle_bg_safe_area.ggVisible=true;
				}
				else {
					me._menu_toggle_bg_safe_area.style.visibility="hidden";
					me._menu_toggle_bg_safe_area.ggVisible=false;
				}
			}
		}
		me._menu_toggle_bg_safe_area.ggUpdatePosition=function (useTransition) {
		}
		me._safe_area_main.appendChild(me._menu_toggle_bg_safe_area);
		me.divSkin.appendChild(me._safe_area_main);
		el=me._safe_area_title_phone=document.createElement('div');
		el.ggId="safe_area_title_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='height : calc(100% - env(safe-area-inset-top) - env(safe-area-inset-bottom));';
		hs+='left : env(safe-area-inset-left);';
		hs+='position : absolute;';
		hs+='top : env(safe-area-inset-top);';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - env(safe-area-inset-left) - env(safe-area-inset-right));';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._safe_area_title_phone.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._safe_area_title_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._node_title_phone=document.createElement('div');
		els=me._node_title_phone__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node_title_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text varela title_shadow";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 25px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 65px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 100px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs='';
		hs+='box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 18px;';
		hs+='font-weight: 600;';
		hs+='text-align: right;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._node_title_phone.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._node_title_phone.ggUpdateText();
		player.addListener('changenode', function() {
			me._node_title_phone.ggUpdateText();
		});
		el.appendChild(els);
		me._node_title_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._node_title_phone.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player._(player.getNodeUserdata('_master').title) == ""))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._node_title_phone.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._node_title_phone.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._node_title_phone.style.transition='right 0s, top 0s';
				if (me._node_title_phone.ggCurrentLogicStatePosition == 0) {
					me._node_title_phone.style.right='20px';
					me._node_title_phone.style.top='20px';
				}
				else {
					me._node_title_phone.style.right='20px';
					me._node_title_phone.style.top='65px';
				}
			}
		}
		me._node_title_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_proj_title') == true)) && 
				((player.getVariableValue('vis_skin') == true)) && 
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node_title_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node_title_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node_title_phone.style.transition='right 0s, top 0s';
				if (me._node_title_phone.ggCurrentLogicStateVisible == 0) {
					me._node_title_phone.style.visibility=(Number(me._node_title_phone.style.opacity)>0||!me._node_title_phone.style.opacity)?'inherit':'hidden';
					me._node_title_phone.ggVisible=true;
				}
				else {
					me._node_title_phone.style.visibility="hidden";
					me._node_title_phone.ggVisible=false;
				}
			}
		}
		me._node_title_phone.ggUpdatePosition=function (useTransition) {
		}
		me._safe_area_title_phone.appendChild(me._node_title_phone);
		el=me._project_title_phone=document.createElement('div');
		els=me._project_title_phone__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="project_title_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text varela title_shadow";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 35px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 20px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 100px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs='';
		hs+='pointer-events: none;';
		hs+='box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 28px;';
		hs+='font-weight: 600;';
		hs+='text-align: right;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._project_title_phone.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(player.getNodeUserdata('_master').title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._project_title_phone.ggUpdateText();
		player.addListener('changenode', function() {
			me._project_title_phone.ggUpdateText();
		});
		el.appendChild(els);
		me._project_title_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._project_title_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_proj_title') == true)) && 
				((player.getVariableValue('vis_skin') == true)) && 
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._project_title_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._project_title_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._project_title_phone.style.transition='';
				if (me._project_title_phone.ggCurrentLogicStateVisible == 0) {
					me._project_title_phone.style.visibility=(Number(me._project_title_phone.style.opacity)>0||!me._project_title_phone.style.opacity)?'inherit':'hidden';
					me._project_title_phone.ggVisible=true;
				}
				else {
					me._project_title_phone.style.visibility="hidden";
					me._project_title_phone.ggVisible=false;
				}
			}
		}
		me._project_title_phone.ggUpdatePosition=function (useTransition) {
		}
		me._safe_area_title_phone.appendChild(me._project_title_phone);
		me.divSkin.appendChild(me._safe_area_title_phone);
		el=me._node_title=document.createElement('div');
		els=me._node_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text varela title_shadow";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 30px;';
		hs+='top : 130px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 130px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs='';
		hs+='pointer-events: none;';
		hs+='box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 35px;';
		hs+='font-weight: 600;';
		hs+='text-align: right;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._node_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._node_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._node_title.ggUpdateText();
		});
		el.appendChild(els);
		me._node_title.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._node_title.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player._(player.getNodeUserdata('_master').title) == ""))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._node_title.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._node_title.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._node_title.style.transition='right 0s, top 0s';
				if (me._node_title.ggCurrentLogicStatePosition == 0) {
					me._node_title.style.right='30px';
					me._node_title.style.top='30px';
				}
				else {
					me._node_title.style.right='30px';
					me._node_title.style.top='130px';
				}
			}
		}
		me._node_title.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_proj_title') == true)) && 
				((player.getVariableValue('vis_skin') == true)) && 
				((player.getVariableValue('resp_phone') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node_title.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node_title.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node_title.style.transition='right 0s, top 0s';
				if (me._node_title.ggCurrentLogicStateVisible == 0) {
					me._node_title.style.visibility=(Number(me._node_title.style.opacity)>0||!me._node_title.style.opacity)?'inherit':'hidden';
					me._node_title.ggVisible=true;
				}
				else {
					me._node_title.style.visibility="hidden";
					me._node_title.ggVisible=false;
				}
			}
		}
		me._node_title.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._node_title);
		el=me._project_title=document.createElement('div');
		els=me._project_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="project_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text varela title_shadow";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 70px;';
		hs+='position : absolute;';
		hs+='right : 30px;';
		hs+='top : 40px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 130px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs='';
		hs+='pointer-events: none;';
		hs+='box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 60px;';
		hs+='font-weight: 600;';
		hs+='text-align: right;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._project_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(player.getNodeUserdata('_master').title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._project_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._project_title.ggUpdateText();
		});
		el.appendChild(els);
		me._project_title.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._project_title.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_proj_title') == true)) && 
				((player.getVariableValue('vis_skin') == true)) && 
				((player.getVariableValue('resp_phone') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._project_title.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._project_title.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._project_title.style.transition='';
				if (me._project_title.ggCurrentLogicStateVisible == 0) {
					me._project_title.style.visibility=(Number(me._project_title.style.opacity)>0||!me._project_title.style.opacity)?'inherit':'hidden';
					me._project_title.ggVisible=true;
				}
				else {
					me._project_title.style.visibility="hidden";
					me._project_title.ggVisible=false;
				}
			}
		}
		me._project_title.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._project_title);
		el=me._thumbnail_menu=document.createElement('div');
		el.ggId="thumbnail_menu";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 170px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='max-width: 1225px';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_menu.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnail_menu.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_menu.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_menu.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_menu.style.transition='opacity 500ms ease 0ms';
				if (me._thumbnail_menu.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_menu.style.visibility=(Number(me._thumbnail_menu.style.opacity)>0||!me._thumbnail_menu.style.opacity)?'inherit':'hidden';
					me._thumbnail_menu.ggVisible=true;
				}
				else {
					me._thumbnail_menu.style.visibility="hidden";
					me._thumbnail_menu.ggVisible=false;
				}
			}
		}
		me._thumbnail_menu.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_menu') == true)) && 
				((player.getVariableValue('resp_phone') == false)) && 
				((player.getIsTour() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_menu.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_menu.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_menu.style.transition='opacity 500ms ease 0ms';
				if (me._thumbnail_menu.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_menu.style.visibility=me._thumbnail_menu.ggVisible?'inherit':'hidden';
					me._thumbnail_menu.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._thumbnail_menu.style.opacity == 0.0) { me._thumbnail_menu.style.visibility="hidden"; } }, 505);
					me._thumbnail_menu.style.opacity=0;
				}
			}
		}
		me._thumbnail_menu.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnail_scroller=document.createElement('div');
		els=me._thumbnail_scroller__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggInInteraction = false;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 154px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 224px;';
		hs+="";
		els.setAttribute('style',hs);
		me._thumbnail_scroller.ggScrollByX = function(diffX) {
			if(!me._thumbnail_scroller.ggHorScrollVisible || diffX == 0 || me._thumbnail_scroller.ggHPercentVisible >= 1.0) return;
			me._thumbnail_scroller.ggScrollPosX = (me._thumbnail_scroller__horScrollFg.offsetLeft + diffX);
			me._thumbnail_scroller.ggScrollPosX = Math.max(me._thumbnail_scroller.ggScrollPosX, 0);
			me._thumbnail_scroller.ggScrollPosX = Math.min(me._thumbnail_scroller.ggScrollPosX, me._thumbnail_scroller__horScrollBg.offsetWidth - me._thumbnail_scroller__horScrollFg.offsetWidth);
			me._thumbnail_scroller__horScrollFg.style.left = me._thumbnail_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_scroller.ggScrollPosX / (me._thumbnail_scroller__horScrollBg.offsetWidth - me._thumbnail_scroller__horScrollFg.offsetWidth);
			me._thumbnail_scroller__content.style.left = -(Math.round((me._thumbnail_scroller.ggContentWidth * (1.0 - me._thumbnail_scroller.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_scroller.ggContentLeftOffset + 'px';
			me._thumbnail_scroller.ggScrollPosXPercent = (me._thumbnail_scroller__horScrollFg.offsetLeft / me._thumbnail_scroller__horScrollBg.offsetWidth);
		}
		me._thumbnail_scroller.ggScrollByXSmooth = function(diffX) {
			if(!me._thumbnail_scroller.ggHorScrollVisible || diffX == 0 || me._thumbnail_scroller.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._thumbnail_scroller.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._thumbnail_scroller.ggScrollPosX >= me._thumbnail_scroller__horScrollBg.offsetWidth - me._thumbnail_scroller__horScrollFg.offsetWidth)) {
					me._thumbnail_scroller.ggScrollPosX = Math.min(me._thumbnail_scroller.ggScrollPosX, me._thumbnail_scroller__horScrollBg.offsetWidth - me._thumbnail_scroller__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._thumbnail_scroller.ggScrollPosX <= 0)) {
					me._thumbnail_scroller.ggScrollPosX = Math.max(me._thumbnail_scroller.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._thumbnail_scroller__horScrollFg.style.left = me._thumbnail_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_scroller.ggScrollPosX / (me._thumbnail_scroller__horScrollBg.offsetWidth - me._thumbnail_scroller__horScrollFg.offsetWidth);
			me._thumbnail_scroller__content.style.left = -(Math.round((me._thumbnail_scroller.ggContentWidth * (1.0 - me._thumbnail_scroller.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_scroller.ggContentLeftOffset + 'px';
			me._thumbnail_scroller.ggScrollPosXPercent = (me._thumbnail_scroller__horScrollFg.offsetLeft / me._thumbnail_scroller__horScrollBg.offsetWidth);
			}, 10);
		}
		me._thumbnail_scroller.ggScrollByY = function(diffY) {
			if(!me._thumbnail_scroller.ggVertScrollVisible || diffY == 0 || me._thumbnail_scroller.ggVPercentVisible >= 1.0) return;
			me._thumbnail_scroller.ggScrollPosY = (me._thumbnail_scroller__vertScrollFg.offsetTop + diffY);
			me._thumbnail_scroller.ggScrollPosY = Math.max(me._thumbnail_scroller.ggScrollPosY, 0);
			me._thumbnail_scroller.ggScrollPosY = Math.min(me._thumbnail_scroller.ggScrollPosY, me._thumbnail_scroller__vertScrollBg.offsetHeight - me._thumbnail_scroller__vertScrollFg.offsetHeight);
			me._thumbnail_scroller__vertScrollFg.style.top = me._thumbnail_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_scroller.ggScrollPosY / (me._thumbnail_scroller__vertScrollBg.offsetHeight - me._thumbnail_scroller__vertScrollFg.offsetHeight);
			me._thumbnail_scroller__content.style.top = -(Math.round((me._thumbnail_scroller.ggContentHeight * (1.0 - me._thumbnail_scroller.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_scroller.ggContentTopOffset + 'px';
			me._thumbnail_scroller.ggScrollPosYPercent = (me._thumbnail_scroller__vertScrollFg.offsetTop / me._thumbnail_scroller__vertScrollBg.offsetHeight);
		}
		me._thumbnail_scroller.ggScrollByYSmooth = function(diffY) {
			if(!me._thumbnail_scroller.ggVertScrollVisible || diffY == 0 || me._thumbnail_scroller.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._thumbnail_scroller.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._thumbnail_scroller.ggScrollPosY >= me._thumbnail_scroller__vertScrollBg.offsetHeight - me._thumbnail_scroller__vertScrollFg.offsetHeight)) {
					me._thumbnail_scroller.ggScrollPosY = Math.min(me._thumbnail_scroller.ggScrollPosY, me._thumbnail_scroller__vertScrollBg.offsetHeight - me._thumbnail_scroller__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._thumbnail_scroller.ggScrollPosY <= 0)) {
					me._thumbnail_scroller.ggScrollPosY = Math.max(me._thumbnail_scroller.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._thumbnail_scroller__vertScrollFg.style.top = me._thumbnail_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_scroller.ggScrollPosY / (me._thumbnail_scroller__vertScrollBg.offsetHeight - me._thumbnail_scroller__vertScrollFg.offsetHeight);
			me._thumbnail_scroller__content.style.top = -(Math.round((me._thumbnail_scroller.ggContentHeight * (1.0 - me._thumbnail_scroller.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_scroller.ggContentTopOffset + 'px';
			me._thumbnail_scroller.ggScrollPosYPercent = (me._thumbnail_scroller__vertScrollFg.offsetTop / me._thumbnail_scroller__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._thumbnail_scroller.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._thumbnail_scroller.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._thumbnail_scroller.ggHPercentVisible);
					me._thumbnail_scroller.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._thumbnail_scroller.clientWidth - (me._thumbnail_scroller.ggVertScrollVisible ? 5 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._thumbnail_scroller.clientWidth - (me._thumbnail_scroller.ggVertScrollVisible ? 5 : 0))) * me._thumbnail_scroller.ggHPercentVisible);
					me._thumbnail_scroller.ggScrollByXSmooth(diffX);
				}
			}
			if (me._thumbnail_scroller.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._thumbnail_scroller.ggVPercentVisible);
					me._thumbnail_scroller.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._thumbnail_scroller.clientHeight - (me._thumbnail_scroller.ggHorScrollVisible ? 5 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._thumbnail_scroller.clientHeight - (me._thumbnail_scroller.ggHorScrollVisible ? 5 : 0))) * me._thumbnail_scroller.ggVPercentVisible);
					me._thumbnail_scroller.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._thumbnail_scroller__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._thumbnail_scroller.ggDragInertiaX *= 0.96;
				me._thumbnail_scroller.ggDragInertiaY *= 0.96;
				me._thumbnail_scroller.ggScrollByX(me._thumbnail_scroller.ggDragInertiaX);
				me._thumbnail_scroller.ggScrollByY(me._thumbnail_scroller.ggDragInertiaY);
				if (Math.abs(me._thumbnail_scroller.ggDragInertiaX) < 1.0 && Math.abs(me._thumbnail_scroller.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._thumbnail_scroller.ggInInteraction = false;
			setTimeout(function() { me._thumbnail_scroller.ggIsDragging = false; }, 100);
		}
		me._thumbnail_scroller__content.mousetouchmove = e => {
			if (!me._thumbnail_scroller.ggInInteraction) return;
			e = e || window.event;
			if (e.buttons==0) {
				me._thumbnail_scroller__content.mousetouchend();
				return;
			}
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._thumbnail_scroller.ggDragStartX) > 10 || Math.abs(eventY - me._thumbnail_scroller.ggDragStartY) > 10) me._thumbnail_scroller.ggIsDragging = true;
			var diffX = (eventX - me._thumbnail_scroller.ggDragLastX) * me._thumbnail_scroller.ggHPercentVisible;
			var diffY = (eventY - me._thumbnail_scroller.ggDragLastY) * me._thumbnail_scroller.ggVPercentVisible;
			me._thumbnail_scroller.ggDragInertiaX = -diffX;
			me._thumbnail_scroller.ggDragInertiaY = -diffY;
			me._thumbnail_scroller.ggDragLastX = eventX;
			me._thumbnail_scroller.ggDragLastY = eventY;
			me._thumbnail_scroller.ggScrollByX(-diffX);
			me._thumbnail_scroller.ggScrollByY(-diffY);
		}
		me._thumbnail_scroller__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._thumbnail_scroller.ggDragLastX = me._thumbnail_scroller.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._thumbnail_scroller.ggDragLastY = me._thumbnail_scroller.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._thumbnail_scroller.ggInInteraction = true;
		}
		els.onmousedown = me._thumbnail_scroller__content.mousetouchstart;
		els.ontouchstart = me._thumbnail_scroller__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._thumbnail_scroller__content.mousetouchstart;
		}
		document.addEventListener('mouseup', me._thumbnail_scroller.contentMouseupListener = function() { me._thumbnail_scroller__content.mousetouchend(); });
		document.addEventListener('touchend', me._thumbnail_scroller.contentTouchendListener = function() { me._thumbnail_scroller__content.mousetouchend(); });
		document.addEventListener('mousemove', me._thumbnail_scroller.contentMousemoveListener = function() { me._thumbnail_scroller__content.mousetouchmove(); });
		document.addEventListener('touchmove', me._thumbnail_scroller.contentTouchmoveListener = function() { me._thumbnail_scroller__content.mousetouchmove(); });
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			document.addEventListener('pointerup', me._thumbnail_scroller.pointerupListener = function() { me._thumbnail_scroller__content.mousetouchend(); });
			document.addEventListener('pointermove', me._thumbnail_scroller.pointermoveListener = function() { me._thumbnail_scroller__content.mousetouchmove(); });
		}
		elHorScrollBg = me._thumbnail_scroller__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 804px; height: 5px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._thumbnail_scroller__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 804px; height: 5px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		me._thumbnail_scroller.ggScrollPosX = 0;
		me._thumbnail_scroller.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnail_scroller.ggDragLastX = e.clientX;
			document.addEventListener('mouseup', me._thumbnail_scroller.horMouseupListener = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_scroller.ggDragInertiaX *= 0.96;
					me._thumbnail_scroller.ggScrollByX(me._thumbnail_scroller.ggDragInertiaX);
					if (Math.abs(me._thumbnail_scroller.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.removeEventListener('mouseup', me._thumbnail_scroller.horMouseupListener);
				document.removeEventListener('mousemove', me._thumbnail_scroller.horMousemoveListener);
			});
			document.addEventListener('mousemove', me._thumbnail_scroller.horMousemoveListener = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._thumbnail_scroller.ggDragLastX;
				me._thumbnail_scroller.ggDragInertiaX = diffX;
				me._thumbnail_scroller.ggDragLastX = e.clientX;
				me._thumbnail_scroller.ggScrollByX(diffX);
			});
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnail_scroller.ggDragLastX = t ? t[0].clientX : e.clientX;
			me._thumbnail_scroller.horTouchEnd = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_scroller.ggDragInertiaX *= 0.96;
					me._thumbnail_scroller.ggScrollByX(me._thumbnail_scroller.ggDragInertiaX);
					if (Math.abs(me._thumbnail_scroller.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.removeEventListener('touchend', me._thumbnail_scroller.horTouchendListener);
				document.removeEventListener('touchmove', me._thumbnail_scroller.horTouchmoveListener);
				document.removeEventListener('pointerup', me._thumbnail_scroller.horPointerupListener);
				document.removeEventListener('pointermove', me._thumbnail_scroller.horPointermoveListener);
			}
			document.addEventListener('touchend', me._thumbnail_scroller.horTouchendListener = function() { me._thumbnail_scroller.horTouchEnd(); });
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.addEventListener('pointerup', me._thumbnail_scroller.horPointerupListener = function() { me._thumbnail_scroller.horTouchEnd(); });
			}
			me._thumbnail_scroller.horTouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._thumbnail_scroller.ggDragLastX;
				me._thumbnail_scroller.ggDragInertiaX = diffX;
				me._thumbnail_scroller.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._thumbnail_scroller.ggScrollByX(diffX);
			}
			document.addEventListener('touchmove', me._thumbnail_scroller.horTouchmoveListener = function(e) { me._thumbnail_scroller.horTouchmove(e); });
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.addEventListener('pointermove', me._thumbnail_scroller.horPointermoveListener = function(e) { me._thumbnail_scroller.horTouchmove(e); });
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elHorScrollFg.onpointerdown = elHorScrollFg.ontouchstart;
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._thumbnail_scroller.ggScrollWidth;
			if (e.offsetX < me._thumbnail_scroller.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_scroller.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnail_scroller__horScrollBg.getBoundingClientRect();
			var diffX = me._thumbnail_scroller.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._thumbnail_scroller.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_scroller.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._thumbnail_scroller.ggScrollByXSmooth(30 * me._thumbnail_scroller.ggHPercentVisible * wheelDelta);
		});
		elVertScrollBg = me._thumbnail_scroller__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 5px; height: 160px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._thumbnail_scroller__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 5px; height: 160px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._thumbnail_scroller.ggScrollPosY = 0;
		me._thumbnail_scroller.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnail_scroller.ggDragLastY = e.clientY;
			document.addEventListener('mouseup', me._thumbnail_scroller.vertMouseupListener = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_scroller.ggDragInertiaY *= 0.96;
					me._thumbnail_scroller.ggScrollByY(me._thumbnail_scroller.ggDragInertiaY);
					if (Math.abs(me._thumbnail_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.removeEventListener('mouseup', me._thumbnail_scroller.vertMouseupListener);
				document.removeEventListener('mousemove', me._thumbnail_scroller.vertMousemoveListener);
			});
			document.addEventListener('mousemove', me._thumbnail_scroller.vertMousemoveListener = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._thumbnail_scroller.ggDragLastY;
				me._thumbnail_scroller.ggDragInertiaY = diffY;
				me._thumbnail_scroller.ggDragLastY = e.clientY;
				me._thumbnail_scroller.ggScrollByY(diffY);
			});
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnail_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
			me._thumbnail_scroller.vertTouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_scroller.ggDragInertiaY *= 0.96;
					me._thumbnail_scroller.ggScrollByY(me._thumbnail_scroller.ggDragInertiaY);
					if (Math.abs(me._thumbnail_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.removeEventListener('touchend', me._thumbnail_scroller.vertTouchendListener);
				document.removeEventListener('touchmove', me._thumbnail_scroller.vertTouchmoveListener);
				document.removeEventListener('pointerup', me._thumbnail_scroller.vertPointerupListener);
				document.removeEventListener('pointermove', me._thumbnail_scroller.vertPointermoveListener);
			}
			document.addEventListener('touchend', me._thumbnail_scroller.vertTouchendListener = function() { me._thumbnail_scroller.vertTouchend(); });
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.addEventListener('pointerup', me._thumbnail_scroller.vertPointerupListener = function() { me._thumbnail_scroller.vertTouchend(); });
			}
			me._thumbnail_scroller.vertTouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._thumbnail_scroller.ggDragLastY;
				me._thumbnail_scroller.ggDragInertiaY = diffY;
				me._thumbnail_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._thumbnail_scroller.ggScrollByY(diffY);
			}
			document.addEventListener('touchmove', me._thumbnail_scroller.vertTouchmoveListener = function(e) { me._thumbnail_scroller.vertTouchmove(e); });
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.addEventListener('pointermove', me._thumbnail_scroller.vertPointermoveListener = function(e) { me._thumbnail_scroller.vertTouchmove(e); });
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._thumbnail_scroller.ggScrollHeight;
			if (e.offsetY < me._thumbnail_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._thumbnail_scroller.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnail_scroller__vertScrollBg.getBoundingClientRect();
			var diffY = me._thumbnail_scroller.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._thumbnail_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._thumbnail_scroller.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._thumbnail_scroller.ggScrollByYSmooth(30 * me._thumbnail_scroller.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._thumbnail_scroller__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 5px; height: 5px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="thumbnail_scroller";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 160px;';
		hs+='left : 50px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 100px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_scroller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnail_scroller.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = -(Math.round(me._thumbnail_scroller.ggScrollPosX / me._thumbnail_scroller.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._thumbnail_scroller.ggScrollPosY / me._thumbnail_scroller.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if (contentWidth > Math.ceil(offsetWidthWithScale)) {
					me._thumbnail_scroller__horScrollBg.style.visibility = 'inherit';
					me._thumbnail_scroller__horScrollFg.style.visibility = 'inherit';
					me._thumbnail_scroller.ggHorScrollVisible = true;
				} else {
					me._thumbnail_scroller__horScrollBg.style.visibility = 'hidden';
					me._thumbnail_scroller__horScrollFg.style.visibility = 'hidden';
					me._thumbnail_scroller.ggHorScrollVisible = false;
				}
				if ((me._thumbnail_scroller.ggHorScrollVisible && contentHeight > this.clientHeight - 5) || (!me._thumbnail_scroller.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._thumbnail_scroller__vertScrollBg.style.visibility = 'inherit';
					me._thumbnail_scroller__vertScrollFg.style.visibility = 'inherit';
					me._thumbnail_scroller.ggVertScrollVisible = true;
					if (!me._thumbnail_scroller.ggHorScrollVisible && (contentWidth > offsetWidthWithScale - me._thumbnail_scroller__vertScrollBg.getBoundingClientRect().width)) {
						me._thumbnail_scroller__horScrollBg.style.visibility = 'inherit';
						me._thumbnail_scroller__horScrollFg.style.visibility = 'inherit';
						me._thumbnail_scroller.ggHorScrollVisible = true;
					}
				} else {
					me._thumbnail_scroller__vertScrollBg.style.visibility = 'hidden';
					me._thumbnail_scroller__vertScrollFg.style.visibility = 'hidden';
					me._thumbnail_scroller.ggVertScrollVisible = false;
				}
				if(me._thumbnail_scroller.ggHorScrollVisible) {
					me._thumbnail_scroller.ggAvailableHeight = me._thumbnail_scroller.clientHeight - 5;
					if (me._thumbnail_scroller.ggVertScrollVisible) {
						me._thumbnail_scroller.ggAvailableWidth = me._thumbnail_scroller.clientWidth - 5;
						me._thumbnail_scroller.ggAvailableWidthWithScale = me._thumbnail_scroller.getBoundingClientRect().width - me._thumbnail_scroller__horScrollBg.getBoundingClientRect().height;
					} else {
						me._thumbnail_scroller.ggAvailableWidth = me._thumbnail_scroller.clientWidth;
						me._thumbnail_scroller.ggAvailableWidthWithScale = me._thumbnail_scroller.getBoundingClientRect().width;
					}
					me._thumbnail_scroller__horScrollBg.style.width = me._thumbnail_scroller.ggAvailableWidth + 'px';
					me._thumbnail_scroller.ggHPercentVisible = contentWidth != 0 ? me._thumbnail_scroller.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me._thumbnail_scroller.ggHPercentVisible > 1.0) me._thumbnail_scroller.ggHPercentVisible = 1.0;
					me._thumbnail_scroller.ggScrollWidth = Math.round(me._thumbnail_scroller__horScrollBg.offsetWidth * me._thumbnail_scroller.ggHPercentVisible);
					me._thumbnail_scroller__horScrollFg.style.width = me._thumbnail_scroller.ggScrollWidth + 'px';
					me._thumbnail_scroller.ggScrollPosX = me._thumbnail_scroller.ggScrollPosXPercent * me._thumbnail_scroller.ggAvailableWidth;
					me._thumbnail_scroller.ggScrollPosX = Math.min(me._thumbnail_scroller.ggScrollPosX, me._thumbnail_scroller__horScrollBg.offsetWidth - me._thumbnail_scroller__horScrollFg.offsetWidth);
					me._thumbnail_scroller__horScrollFg.style.left = me._thumbnail_scroller.ggScrollPosX + 'px';
					if (me._thumbnail_scroller.ggHPercentVisible < 1.0) {
						let percentScrolled = me._thumbnail_scroller.ggScrollPosX / (me._thumbnail_scroller__horScrollBg.offsetWidth - me._thumbnail_scroller__horScrollFg.offsetWidth);
						me._thumbnail_scroller__content.style.left = -(Math.round((me._thumbnail_scroller.ggContentWidth * (1.0 - me._thumbnail_scroller.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me._thumbnail_scroller.ggAvailableHeight = me._thumbnail_scroller.clientHeight;
					me._thumbnail_scroller.ggScrollPosX = 0;
					me._thumbnail_scroller.ggScrollPosXPercent = 0.0;
					me._thumbnail_scroller__content.style.left = this.ggContentLeftOffset + 'px';
				}
				if(me._thumbnail_scroller.ggVertScrollVisible) {
					me._thumbnail_scroller.ggAvailableWidth = me._thumbnail_scroller.clientWidth - 5;
					if (me._thumbnail_scroller.ggHorScrollVisible) {
						me._thumbnail_scroller.ggAvailableHeight = me._thumbnail_scroller.clientHeight - 5;
						me._thumbnail_scroller.ggAvailableHeightWithScale = me._thumbnail_scroller.getBoundingClientRect().height - me._thumbnail_scroller__vertScrollBg.getBoundingClientRect().width;
						me._thumbnail_scroller__cornerBg.style.visibility = 'inherit';
					} else {
						me._thumbnail_scroller.ggAvailableHeight = me._thumbnail_scroller.clientHeight;
						me._thumbnail_scroller.ggAvailableHeightWithScale = me._thumbnail_scroller.getBoundingClientRect().height;
						me._thumbnail_scroller__cornerBg.style.visibility = 'hidden';
					}
					me._thumbnail_scroller__vertScrollBg.style.height = me._thumbnail_scroller.ggAvailableHeight + 'px';
					me._thumbnail_scroller.ggVPercentVisible = contentHeight != 0 ? me._thumbnail_scroller.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._thumbnail_scroller.ggVPercentVisible > 1.0) me._thumbnail_scroller.ggVPercentVisible = 1.0;
					me._thumbnail_scroller.ggScrollHeight =  Math.round(me._thumbnail_scroller__vertScrollBg.offsetHeight * me._thumbnail_scroller.ggVPercentVisible);
					me._thumbnail_scroller__vertScrollFg.style.height = me._thumbnail_scroller.ggScrollHeight + 'px';
					me._thumbnail_scroller.ggScrollPosY = me._thumbnail_scroller.ggScrollPosYPercent * me._thumbnail_scroller.ggAvailableHeight;
					me._thumbnail_scroller.ggScrollPosY = Math.min(me._thumbnail_scroller.ggScrollPosY, me._thumbnail_scroller__vertScrollBg.offsetHeight - me._thumbnail_scroller__vertScrollFg.offsetHeight);
					me._thumbnail_scroller__vertScrollFg.style.top = me._thumbnail_scroller.ggScrollPosY + 'px';
					if (me._thumbnail_scroller.ggVPercentVisible < 1.0) {
						let percentScrolled = me._thumbnail_scroller.ggScrollPosY / (me._thumbnail_scroller__vertScrollBg.offsetHeight - me._thumbnail_scroller__vertScrollFg.offsetHeight);
						me._thumbnail_scroller__content.style.top = -(Math.round((me._thumbnail_scroller.ggContentHeight * (1.0 - me._thumbnail_scroller.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_scroller.ggContentTopOffset + 'px';
					}
				} else {
					me._thumbnail_scroller.ggAvailableWidth = me._thumbnail_scroller.clientWidth;
					me._thumbnail_scroller.ggScrollPosY = 0;
					me._thumbnail_scroller.ggScrollPosYPercent = 0.0;
					me._thumbnail_scroller__content.style.top = this.ggContentTopOffset + 'px';
					me._thumbnail_scroller__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._thumbnail_scroller.ggHorScrollVisible || vertScrollWasVisible != me._thumbnail_scroller.ggVertScrollVisible) {
					skin.updateSize(me._thumbnail_scroller);
					me._thumbnail_scroller.ggUpdatePosition();
				}
			}
		}
		el=me._thumbnail_cloner=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_cloner;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 225;
		el.ggHeight = 150;
		el.ggSizeChanged = false;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._thumbnail_cloner.ggUpdating == true) return;
			me._thumbnail_cloner.ggUpdating = true;
			var el=me._thumbnail_cloner;
			var curNumRows = 0;
			curNumRows = me._thumbnail_cloner.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && !el.ggSizeChanged && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._thumbnail_cloner.ggUpdating = false;
				return;
			} else {
				el.ggSizeChanged = false;
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._thumbnail_cloner.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._thumbnail_cloner.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._thumbnail_cloner.getFilteredNodes(tourNodes, filter);
			me._thumbnail_cloner.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._thumbnail_cloner.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._thumbnail_cloner.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._thumbnail_cloner.ggWidth) + 'px';
				parameter.width=me._thumbnail_cloner.ggWidth + 'px';
				parameter.height=me._thumbnail_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_thumbnail_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
			}
			me._thumbnail_cloner.ggNodeCount = me._thumbnail_cloner.ggNumFilterPassed;
			me._thumbnail_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._thumbnail_cloner.parentNode && me._thumbnail_cloner.parentNode.classList.contains('ggskin_subelement') && me._thumbnail_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._thumbnail_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="thumbnail_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		el.userData=el;
		hs ='';
		hs+='height : 150px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 225px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnail_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._thumbnail_cloner.childNodes.length; i++) {
				var child=me._thumbnail_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._thumbnail_cloner.ggUpdatePosition=function (useTransition) {
			me._thumbnail_cloner.ggUpdate();
		}
		me._thumbnail_scroller__content.appendChild(me._thumbnail_cloner);
		me._thumbnail_menu.appendChild(me._thumbnail_scroller);
		el=me._thumbnail_scroller_fwd=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="thumbnail_scroller_fwd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 115px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_scroller_fwd.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnail_scroller_fwd.onmouseenter=function (e) {
			if (player.transitionsDisabled) {
				me._thumbnail_scroller_fwd_icon_active.style.transition='none';
			} else {
				me._thumbnail_scroller_fwd_icon_active.style.transition='all 200ms ease-out 0ms';
			}
			me._thumbnail_scroller_fwd_icon_active.style.opacity='1';
			me._thumbnail_scroller_fwd_icon_active.style.visibility=me._thumbnail_scroller_fwd_icon_active.ggVisible?'inherit':'hidden';
			me.elementMouseOver['thumbnail_scroller_fwd']=true;
		}
		me._thumbnail_scroller_fwd.onmousedown=function (e) {
			me.elementMouseDown['thumbnail_scroller_fwd']=true;
		}
		me._thumbnail_scroller_fwd.onmouseup=function (e) {
			me.elementMouseDown['thumbnail_scroller_fwd']=false;
		}
		me._thumbnail_scroller_fwd.onmouseleave=function (e) {
			if (player.transitionsDisabled) {
				me._thumbnail_scroller_fwd_icon_active.style.transition='none';
			} else {
				me._thumbnail_scroller_fwd_icon_active.style.transition='all 200ms ease-out 0ms';
			}
			me._thumbnail_scroller_fwd_icon_active.style.opacity='0';
			me._thumbnail_scroller_fwd_icon_active.style.visibility='hidden';
			me.elementMouseDown['thumbnail_scroller_fwd']=false;
			me.elementMouseOver['thumbnail_scroller_fwd']=false;
		}
		me._thumbnail_scroller_fwd.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['thumbnail_scroller_fwd']) {
				skin.findElements('thumbnail_scroller')[0].ggScrollByXSmooth(15);
			}
		}
		me._thumbnail_scroller_fwd.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnail_scroller_fwd_icon=document.createElement('div');
		els=me._thumbnail_scroller_fwd_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxOHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPHBhdGggZD0iTTEwIDE3bDUtNS01LTV2MTB6Ii8+CiA8cGF0aCBkPSJNMCAyNFYwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+Cjwvc3ZnPgo=';
		me._thumbnail_scroller_fwd_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_scroller_fwd_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_scroller_fwd_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnail_scroller_fwd_icon.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_scroller_fwd.appendChild(me._thumbnail_scroller_fwd_icon);
		el=me._thumbnail_scroller_fwd_icon_active=document.createElement('div');
		els=me._thumbnail_scroller_fwd_icon_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjZGZlMDM2IiBmaWxsLW9wYWNpdHk9IjEiIGhlaWdodD0iMThweCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMThweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxwYXRoIGQ9Ik0xMCAxN2w1LTUtNS01djEweiIvPgogPHBhdGggZD0iTTAgMjRWMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPgo8L3N2Zz4K';
		me._thumbnail_scroller_fwd_icon_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_scroller_fwd_icon_active";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_scroller_fwd_icon_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnail_scroller_fwd_icon_active.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_scroller_fwd.appendChild(me._thumbnail_scroller_fwd_icon_active);
		me._thumbnail_menu.appendChild(me._thumbnail_scroller_fwd);
		el=me._thumbnail_scroller_bwd=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="thumbnail_scroller_bwd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 115px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_scroller_bwd.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnail_scroller_bwd.onmouseenter=function (e) {
			if (player.transitionsDisabled) {
				me._thumbnail_scroller_bwd_icon_active.style.transition='none';
			} else {
				me._thumbnail_scroller_bwd_icon_active.style.transition='all 200ms ease-out 0ms';
			}
			me._thumbnail_scroller_bwd_icon_active.style.opacity='1';
			me._thumbnail_scroller_bwd_icon_active.style.visibility=me._thumbnail_scroller_bwd_icon_active.ggVisible?'inherit':'hidden';
			me.elementMouseOver['thumbnail_scroller_bwd']=true;
		}
		me._thumbnail_scroller_bwd.onmousedown=function (e) {
			me.elementMouseDown['thumbnail_scroller_bwd']=true;
		}
		me._thumbnail_scroller_bwd.onmouseup=function (e) {
			me.elementMouseDown['thumbnail_scroller_bwd']=false;
		}
		me._thumbnail_scroller_bwd.onmouseleave=function (e) {
			if (player.transitionsDisabled) {
				me._thumbnail_scroller_bwd_icon_active.style.transition='none';
			} else {
				me._thumbnail_scroller_bwd_icon_active.style.transition='all 200ms ease-out 0ms';
			}
			me._thumbnail_scroller_bwd_icon_active.style.opacity='0';
			me._thumbnail_scroller_bwd_icon_active.style.visibility='hidden';
			me.elementMouseDown['thumbnail_scroller_bwd']=false;
			me.elementMouseOver['thumbnail_scroller_bwd']=false;
		}
		me._thumbnail_scroller_bwd.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['thumbnail_scroller_bwd']) {
				skin.findElements('thumbnail_scroller')[0].ggScrollByXSmooth(-15);
			}
		}
		me._thumbnail_scroller_bwd.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnail_scroller_bwd_icon=document.createElement('div');
		els=me._thumbnail_scroller_bwd_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxOHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPHBhdGggZD0iTTE0IDdsLTUgNSA1IDVWN3oiLz4KIDxwYXRoIGQ9Ik0yNCAwdjI0SDBWMGgyNHoiIGZpbGw9Im5vbmUiLz4KPC9zdmc+Cg==';
		me._thumbnail_scroller_bwd_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_scroller_bwd_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_scroller_bwd_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnail_scroller_bwd_icon.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_scroller_bwd.appendChild(me._thumbnail_scroller_bwd_icon);
		el=me._thumbnail_scroller_bwd_icon_active=document.createElement('div');
		els=me._thumbnail_scroller_bwd_icon_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjZGZlMDM2IiBmaWxsLW9wYWNpdHk9IjEiIGhlaWdodD0iMThweCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMThweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxwYXRoIGQ9Ik0xNCA3bC01IDUgNSA1Vjd6Ii8+CiA8cGF0aCBkPSJNMjQgMHYyNEgwVjBoMjR6IiBmaWxsPSJub25lIi8+Cjwvc3ZnPgo=';
		me._thumbnail_scroller_bwd_icon_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_scroller_bwd_icon_active";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_scroller_bwd_icon_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnail_scroller_bwd_icon_active.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_scroller_bwd.appendChild(me._thumbnail_scroller_bwd_icon_active);
		me._thumbnail_menu.appendChild(me._thumbnail_scroller_bwd);
		me.divSkin.appendChild(me._thumbnail_menu);
		el=me._thumbnail_menu_toggle_phone=document.createElement('div');
		el.ggId="thumbnail_menu_toggle_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 45px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_menu_toggle_phone.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnail_menu_toggle_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_menu_toggle_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_menu_toggle_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_menu_toggle_phone.style.transition='opacity 500ms ease 0ms';
				if (me._thumbnail_menu_toggle_phone.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_menu_toggle_phone.style.visibility=(Number(me._thumbnail_menu_toggle_phone.style.opacity)>0||!me._thumbnail_menu_toggle_phone.style.opacity)?'inherit':'hidden';
					me._thumbnail_menu_toggle_phone.ggVisible=true;
				}
				else {
					me._thumbnail_menu_toggle_phone.style.visibility="hidden";
					me._thumbnail_menu_toggle_phone.ggVisible=false;
				}
			}
		}
		me._thumbnail_menu_toggle_phone.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_menu') == true)) && 
				((player.getVariableValue('resp_phone') == true)) && 
				((player.getIsTour() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_menu_toggle_phone.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_menu_toggle_phone.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_menu_toggle_phone.style.transition='opacity 500ms ease 0ms';
				if (me._thumbnail_menu_toggle_phone.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_menu_toggle_phone.style.visibility=me._thumbnail_menu_toggle_phone.ggVisible?'inherit':'hidden';
					me._thumbnail_menu_toggle_phone.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._thumbnail_menu_toggle_phone.style.opacity == 0.0) { me._thumbnail_menu_toggle_phone.style.visibility="hidden"; } }, 505);
					me._thumbnail_menu_toggle_phone.style.opacity=0;
				}
			}
		}
		me._thumbnail_menu_toggle_phone.onclick=function (e) {
			player.setVariableValue('vis_phone_thumbs', true);
			me._node_cloner_phone.ggText="";
			me._node_cloner_phone.ggUpdate([]);
			skin.updateSize(skin.divSkin);
		}
		me._thumbnail_menu_toggle_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnail_menu_toggle_btn=document.createElement('div');
		els=me._thumbnail_menu_toggle_btn__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiBoZWlnaHQ9IjE4cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE4cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJNMCAwaDI0djI0SDBWMHoiIGZpbGw9Im5vbmUiLz4KIDxwYXRoIGQ9Ik02IDEwYy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItMi0uOS0yLTItMnptMTIgMGMtMS4xIDAtMiAuOS0yIDJzLjkgMiAyIDIgMi0uOSAyLTItLjktMi0yLTJ6bS02IDBjLTEuMSAwLTIgLjktMiAycy45IDIgMiAyIDItLjkgMi0yLS45LTItMi0yeiIvPgo8L3N2Zz4K';
		me._thumbnail_menu_toggle_btn__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._thumbnail_menu_toggle_btn__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOCAxODsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE4IDE4IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojZGZlMDM2O30mI3hkOwo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTAsMGgxOHYxOEgwVjB6Ii8+CiA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNC41LDcuNUMzLjcsNy41LDMsOC4yLDMsOXMwLjcsMS41LDEuNSwxLjVTNiw5LjgsNiw5UzUuMyw3LjUsNC41LDcuNXogTTEzLjUsNy41QzEyLjcsNy41LDEyLDguMiwxMiw5JiN4ZDsmI3hhOyYjeDk7czAuNywxLjUsMS41LDEuNVMxNSw5LjgsMTUsOVMxNC4zLDcuNSwxMy41LDcuNXogTTksNy41QzguMiw3LjUsNy41'+
			'LDguMiw3LjUsOXMwLjcsMS41LDEuNSwxLjVzMS41LTAuNywxLjUtMS41UzkuOCw3LjUsOSw3LjV6Ii8+Cjwvc3ZnPgo=';
		me._thumbnail_menu_toggle_btn__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="thumbnail_menu_toggle_btn";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_menu_toggle_btn.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnail_menu_toggle_btn.onmouseenter=function (e) {
			me._thumbnail_menu_toggle_btn__img.style.visibility='hidden';
			me._thumbnail_menu_toggle_btn__imgo.style.visibility='inherit';
			me.elementMouseOver['thumbnail_menu_toggle_btn']=true;
		}
		me._thumbnail_menu_toggle_btn.onmouseleave=function (e) {
			me._thumbnail_menu_toggle_btn__img.style.visibility='inherit';
			me._thumbnail_menu_toggle_btn__imgo.style.visibility='hidden';
			me.elementMouseOver['thumbnail_menu_toggle_btn']=false;
		}
		me._thumbnail_menu_toggle_btn.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_menu_toggle_phone.appendChild(me._thumbnail_menu_toggle_btn);
		me.divSkin.appendChild(me._thumbnail_menu_toggle_phone);
		el=me._screen_tint=document.createElement('div');
		el.ggId="screen_tint";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._screen_tint.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._screen_tint.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_pdf_popup') == true)) || 
				((player.getVariableValue('vis_url_popup') == true)) || 
				((player.getVariableValue('vis_languages') == true)) || 
				((player.getVariableValue('vis_video_popup_file') == true)) || 
				((player.getVariableValue('vis_video_popup_url') == true)) || 
				((player.getVariableValue('vis_video_popup_youtube') == true)) || 
				((player.getVariableValue('vis_video_popup_vimeo') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._screen_tint.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._screen_tint.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._screen_tint.style.transition='';
				if (me._screen_tint.ggCurrentLogicStateVisible == 0) {
					me._screen_tint.style.visibility=(Number(me._screen_tint.style.opacity)>0||!me._screen_tint.style.opacity)?'inherit':'hidden';
					me._screen_tint.ggVisible=true;
				}
				else {
					me._screen_tint.style.visibility="hidden";
					me._screen_tint.ggVisible=false;
				}
			}
		}
		me._screen_tint.onclick=function (e) {
			player.setVariableValue('vis_pdf_popup', false);
			player.setVariableValue('vis_url_popup', false);
			player.setVariableValue('vis_video_popup_file', false);
			player.setVariableValue('vis_video_popup_url', false);
			player.setVariableValue('vis_video_popup_youtube', false);
			player.setVariableValue('vis_video_popup_vimeo', false);
			player.setVariableValue('vis_languages', false);
		}
		me._screen_tint.ggUpdatePosition=function (useTransition) {
		}
		el=me._screen_tint_bg=document.createElement('div');
		el.ggId="screen_tint_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : rgba(0,0,0,0.54902);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='backdrop-filter: blur(5px); -webkit-backdrop-filter: blur(5px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._screen_tint_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._screen_tint_bg.ggUpdatePosition=function (useTransition) {
		}
		me._screen_tint.appendChild(me._screen_tint_bg);
		el=me._screen_tint_close=document.createElement('div');
		els=me._screen_tint_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxOHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIi8+CiA8cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyIDE5IDYuNDF6Ii8+Cjwvc3ZnPgo=';
		me._screen_tint_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._screen_tint_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOCAxODsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE4IDE4IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojZGZlMDM2O30mI3hkOwo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTAsMGgxOHYxOEgwVjB6Ii8+CiA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTQuMiw0LjhsLTEuMS0xLjFMOSw3LjlMNC44LDMuOEwzLjgsNC44TDcuOSw5bC00LjIsNC4ybDEuMSwxLjFMOSwxMC4xbDQuMiw0LjJsMS4xLTEuMUwxMC4xLDlMMTQuMiw0Ljh6Ii8+Cjwvc3ZnPgo=';
		me._screen_tint_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="screen_tint_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._screen_tint_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._screen_tint_close.onmouseenter=function (e) {
			me._screen_tint_close__img.style.visibility='hidden';
			me._screen_tint_close__imgo.style.visibility='inherit';
			me.elementMouseOver['screen_tint_close']=true;
		}
		me._screen_tint_close.onmouseleave=function (e) {
			me._screen_tint_close__img.style.visibility='inherit';
			me._screen_tint_close__imgo.style.visibility='hidden';
			me.elementMouseOver['screen_tint_close']=false;
		}
		me._screen_tint_close.ggUpdatePosition=function (useTransition) {
		}
		me._screen_tint.appendChild(me._screen_tint_close);
		me.divSkin.appendChild(me._screen_tint);
		el=me._languages_popup=document.createElement('div');
		els=me._languages_popup__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggInInteraction = false;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 23px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 194px;';
		hs+="";
		els.setAttribute('style',hs);
		me._languages_popup.ggScrollByX = function(diffX) {
			if(!me._languages_popup.ggHorScrollVisible || diffX == 0 || me._languages_popup.ggHPercentVisible >= 1.0) return;
			me._languages_popup.ggScrollPosX = (me._languages_popup__horScrollFg.offsetLeft + diffX);
			me._languages_popup.ggScrollPosX = Math.max(me._languages_popup.ggScrollPosX, 0);
			me._languages_popup.ggScrollPosX = Math.min(me._languages_popup.ggScrollPosX, me._languages_popup__horScrollBg.offsetWidth - me._languages_popup__horScrollFg.offsetWidth);
			me._languages_popup__horScrollFg.style.left = me._languages_popup.ggScrollPosX + 'px';
			let percentScrolled = me._languages_popup.ggScrollPosX / (me._languages_popup__horScrollBg.offsetWidth - me._languages_popup__horScrollFg.offsetWidth);
			me._languages_popup__content.style.left = -(Math.round((me._languages_popup.ggContentWidth * (1.0 - me._languages_popup.ggHPercentVisible)) * percentScrolled)) + me._languages_popup.ggContentLeftOffset + 'px';
			me._languages_popup.ggScrollPosXPercent = (me._languages_popup__horScrollFg.offsetLeft / me._languages_popup__horScrollBg.offsetWidth);
		}
		me._languages_popup.ggScrollByXSmooth = function(diffX) {
			if(!me._languages_popup.ggHorScrollVisible || diffX == 0 || me._languages_popup.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._languages_popup.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._languages_popup.ggScrollPosX >= me._languages_popup__horScrollBg.offsetWidth - me._languages_popup__horScrollFg.offsetWidth)) {
					me._languages_popup.ggScrollPosX = Math.min(me._languages_popup.ggScrollPosX, me._languages_popup__horScrollBg.offsetWidth - me._languages_popup__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._languages_popup.ggScrollPosX <= 0)) {
					me._languages_popup.ggScrollPosX = Math.max(me._languages_popup.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._languages_popup__horScrollFg.style.left = me._languages_popup.ggScrollPosX + 'px';
			let percentScrolled = me._languages_popup.ggScrollPosX / (me._languages_popup__horScrollBg.offsetWidth - me._languages_popup__horScrollFg.offsetWidth);
			me._languages_popup__content.style.left = -(Math.round((me._languages_popup.ggContentWidth * (1.0 - me._languages_popup.ggHPercentVisible)) * percentScrolled)) + me._languages_popup.ggContentLeftOffset + 'px';
			me._languages_popup.ggScrollPosXPercent = (me._languages_popup__horScrollFg.offsetLeft / me._languages_popup__horScrollBg.offsetWidth);
			}, 10);
		}
		me._languages_popup.ggScrollByY = function(diffY) {
			if(!me._languages_popup.ggVertScrollVisible || diffY == 0 || me._languages_popup.ggVPercentVisible >= 1.0) return;
			me._languages_popup.ggScrollPosY = (me._languages_popup__vertScrollFg.offsetTop + diffY);
			me._languages_popup.ggScrollPosY = Math.max(me._languages_popup.ggScrollPosY, 0);
			me._languages_popup.ggScrollPosY = Math.min(me._languages_popup.ggScrollPosY, me._languages_popup__vertScrollBg.offsetHeight - me._languages_popup__vertScrollFg.offsetHeight);
			me._languages_popup__vertScrollFg.style.top = me._languages_popup.ggScrollPosY + 'px';
			let percentScrolled = me._languages_popup.ggScrollPosY / (me._languages_popup__vertScrollBg.offsetHeight - me._languages_popup__vertScrollFg.offsetHeight);
			me._languages_popup__content.style.top = -(Math.round((me._languages_popup.ggContentHeight * (1.0 - me._languages_popup.ggVPercentVisible)) * percentScrolled)) + me._languages_popup.ggContentTopOffset + 'px';
			me._languages_popup.ggScrollPosYPercent = (me._languages_popup__vertScrollFg.offsetTop / me._languages_popup__vertScrollBg.offsetHeight);
		}
		me._languages_popup.ggScrollByYSmooth = function(diffY) {
			if(!me._languages_popup.ggVertScrollVisible || diffY == 0 || me._languages_popup.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._languages_popup.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._languages_popup.ggScrollPosY >= me._languages_popup__vertScrollBg.offsetHeight - me._languages_popup__vertScrollFg.offsetHeight)) {
					me._languages_popup.ggScrollPosY = Math.min(me._languages_popup.ggScrollPosY, me._languages_popup__vertScrollBg.offsetHeight - me._languages_popup__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._languages_popup.ggScrollPosY <= 0)) {
					me._languages_popup.ggScrollPosY = Math.max(me._languages_popup.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._languages_popup__vertScrollFg.style.top = me._languages_popup.ggScrollPosY + 'px';
			let percentScrolled = me._languages_popup.ggScrollPosY / (me._languages_popup__vertScrollBg.offsetHeight - me._languages_popup__vertScrollFg.offsetHeight);
			me._languages_popup__content.style.top = -(Math.round((me._languages_popup.ggContentHeight * (1.0 - me._languages_popup.ggVPercentVisible)) * percentScrolled)) + me._languages_popup.ggContentTopOffset + 'px';
			me._languages_popup.ggScrollPosYPercent = (me._languages_popup__vertScrollFg.offsetTop / me._languages_popup__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._languages_popup.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._languages_popup.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._languages_popup.ggHPercentVisible);
					me._languages_popup.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._languages_popup.clientWidth - (me._languages_popup.ggVertScrollVisible ? 5 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._languages_popup.clientWidth - (me._languages_popup.ggVertScrollVisible ? 5 : 0))) * me._languages_popup.ggHPercentVisible);
					me._languages_popup.ggScrollByXSmooth(diffX);
				}
			}
			if (me._languages_popup.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._languages_popup.ggVPercentVisible);
					me._languages_popup.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._languages_popup.clientHeight - (me._languages_popup.ggHorScrollVisible ? 5 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._languages_popup.clientHeight - (me._languages_popup.ggHorScrollVisible ? 5 : 0))) * me._languages_popup.ggVPercentVisible);
					me._languages_popup.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._languages_popup__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._languages_popup.ggDragInertiaX *= 0.96;
				me._languages_popup.ggDragInertiaY *= 0.96;
				me._languages_popup.ggScrollByX(me._languages_popup.ggDragInertiaX);
				me._languages_popup.ggScrollByY(me._languages_popup.ggDragInertiaY);
				if (Math.abs(me._languages_popup.ggDragInertiaX) < 1.0 && Math.abs(me._languages_popup.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._languages_popup.ggInInteraction = false;
			setTimeout(function() { me._languages_popup.ggIsDragging = false; }, 100);
		}
		me._languages_popup__content.mousetouchmove = e => {
			if (!me._languages_popup.ggInInteraction) return;
			e = e || window.event;
			if (e.buttons==0) {
				me._languages_popup__content.mousetouchend();
				return;
			}
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._languages_popup.ggDragStartX) > 10 || Math.abs(eventY - me._languages_popup.ggDragStartY) > 10) me._languages_popup.ggIsDragging = true;
			var diffX = (eventX - me._languages_popup.ggDragLastX) * me._languages_popup.ggHPercentVisible;
			var diffY = (eventY - me._languages_popup.ggDragLastY) * me._languages_popup.ggVPercentVisible;
			me._languages_popup.ggDragInertiaX = -diffX;
			me._languages_popup.ggDragInertiaY = -diffY;
			me._languages_popup.ggDragLastX = eventX;
			me._languages_popup.ggDragLastY = eventY;
			me._languages_popup.ggScrollByX(-diffX);
			me._languages_popup.ggScrollByY(-diffY);
		}
		me._languages_popup__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._languages_popup.ggDragLastX = me._languages_popup.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._languages_popup.ggDragLastY = me._languages_popup.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._languages_popup.ggInInteraction = true;
		}
		els.onmousedown = me._languages_popup__content.mousetouchstart;
		els.ontouchstart = me._languages_popup__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._languages_popup__content.mousetouchstart;
		}
		document.addEventListener('mouseup', me._languages_popup.contentMouseupListener = function() { me._languages_popup__content.mousetouchend(); });
		document.addEventListener('touchend', me._languages_popup.contentTouchendListener = function() { me._languages_popup__content.mousetouchend(); });
		document.addEventListener('mousemove', me._languages_popup.contentMousemoveListener = function() { me._languages_popup__content.mousetouchmove(); });
		document.addEventListener('touchmove', me._languages_popup.contentTouchmoveListener = function() { me._languages_popup__content.mousetouchmove(); });
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			document.addEventListener('pointerup', me._languages_popup.pointerupListener = function() { me._languages_popup__content.mousetouchend(); });
			document.addEventListener('pointermove', me._languages_popup.pointermoveListener = function() { me._languages_popup__content.mousetouchmove(); });
		}
		elVertScrollBg = me._languages_popup__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 5px; height: 240px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._languages_popup__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 5px; height: 240px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._languages_popup.ggScrollPosY = 0;
		me._languages_popup.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._languages_popup.ggDragLastY = e.clientY;
			document.addEventListener('mouseup', me._languages_popup.vertMouseupListener = function() {
				let inertiaInterval = setInterval(function() {
					me._languages_popup.ggDragInertiaY *= 0.96;
					me._languages_popup.ggScrollByY(me._languages_popup.ggDragInertiaY);
					if (Math.abs(me._languages_popup.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.removeEventListener('mouseup', me._languages_popup.vertMouseupListener);
				document.removeEventListener('mousemove', me._languages_popup.vertMousemoveListener);
			});
			document.addEventListener('mousemove', me._languages_popup.vertMousemoveListener = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._languages_popup.ggDragLastY;
				me._languages_popup.ggDragInertiaY = diffY;
				me._languages_popup.ggDragLastY = e.clientY;
				me._languages_popup.ggScrollByY(diffY);
			});
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._languages_popup.ggDragLastY = t ? t[0].clientY : e.clientY;
			me._languages_popup.vertTouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._languages_popup.ggDragInertiaY *= 0.96;
					me._languages_popup.ggScrollByY(me._languages_popup.ggDragInertiaY);
					if (Math.abs(me._languages_popup.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.removeEventListener('touchend', me._languages_popup.vertTouchendListener);
				document.removeEventListener('touchmove', me._languages_popup.vertTouchmoveListener);
				document.removeEventListener('pointerup', me._languages_popup.vertPointerupListener);
				document.removeEventListener('pointermove', me._languages_popup.vertPointermoveListener);
			}
			document.addEventListener('touchend', me._languages_popup.vertTouchendListener = function() { me._languages_popup.vertTouchend(); });
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.addEventListener('pointerup', me._languages_popup.vertPointerupListener = function() { me._languages_popup.vertTouchend(); });
			}
			me._languages_popup.vertTouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._languages_popup.ggDragLastY;
				me._languages_popup.ggDragInertiaY = diffY;
				me._languages_popup.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._languages_popup.ggScrollByY(diffY);
			}
			document.addEventListener('touchmove', me._languages_popup.vertTouchmoveListener = function(e) { me._languages_popup.vertTouchmove(e); });
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.addEventListener('pointermove', me._languages_popup.vertPointermoveListener = function(e) { me._languages_popup.vertTouchmove(e); });
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._languages_popup.ggScrollHeight;
			if (e.offsetY < me._languages_popup.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._languages_popup.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._languages_popup__vertScrollBg.getBoundingClientRect();
			var diffY = me._languages_popup.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._languages_popup.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._languages_popup.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._languages_popup.ggScrollByYSmooth(30 * me._languages_popup.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._languages_popup__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 5px; height: 5px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="languages_popup";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 240px;';
		hs+='left : calc(50% - ((200px + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((240px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._languages_popup.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._languages_popup.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_languages') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._languages_popup.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._languages_popup.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._languages_popup.style.transition='';
				if (me._languages_popup.ggCurrentLogicStateVisible == 0) {
					me._languages_popup.style.visibility=(Number(me._languages_popup.style.opacity)>0||!me._languages_popup.style.opacity)?'inherit':'hidden';
					me._languages_popup.ggVisible=true;
				}
				else {
					me._languages_popup.style.visibility="hidden";
					me._languages_popup.ggVisible=false;
				}
			}
		}
		me._languages_popup.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._languages_popup.ggScrollPosY / me._languages_popup.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._languages_popup.ggHorScrollVisible && contentHeight > this.clientHeight - 5) || (!me._languages_popup.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._languages_popup__vertScrollBg.style.visibility = 'inherit';
					me._languages_popup__vertScrollFg.style.visibility = 'inherit';
					me._languages_popup.ggVertScrollVisible = true;
				} else {
					me._languages_popup__vertScrollBg.style.visibility = 'hidden';
					me._languages_popup__vertScrollFg.style.visibility = 'hidden';
					me._languages_popup.ggVertScrollVisible = false;
				}
				if(me._languages_popup.ggVertScrollVisible) {
					me._languages_popup.ggAvailableWidth = me._languages_popup.clientWidth - 5;
					if (me._languages_popup.ggHorScrollVisible) {
						me._languages_popup.ggAvailableHeight = me._languages_popup.clientHeight - 5;
						me._languages_popup.ggAvailableHeightWithScale = me._languages_popup.getBoundingClientRect().height - me._languages_popup__vertScrollBg.getBoundingClientRect().width;
						me._languages_popup__cornerBg.style.visibility = 'inherit';
					} else {
						me._languages_popup.ggAvailableHeight = me._languages_popup.clientHeight;
						me._languages_popup.ggAvailableHeightWithScale = me._languages_popup.getBoundingClientRect().height;
						me._languages_popup__cornerBg.style.visibility = 'hidden';
					}
					me._languages_popup__vertScrollBg.style.height = me._languages_popup.ggAvailableHeight + 'px';
					me._languages_popup.ggVPercentVisible = contentHeight != 0 ? me._languages_popup.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._languages_popup.ggVPercentVisible > 1.0) me._languages_popup.ggVPercentVisible = 1.0;
					me._languages_popup.ggScrollHeight =  Math.round(me._languages_popup__vertScrollBg.offsetHeight * me._languages_popup.ggVPercentVisible);
					me._languages_popup__vertScrollFg.style.height = me._languages_popup.ggScrollHeight + 'px';
					me._languages_popup.ggScrollPosY = me._languages_popup.ggScrollPosYPercent * me._languages_popup.ggAvailableHeight;
					me._languages_popup.ggScrollPosY = Math.min(me._languages_popup.ggScrollPosY, me._languages_popup__vertScrollBg.offsetHeight - me._languages_popup__vertScrollFg.offsetHeight);
					me._languages_popup__vertScrollFg.style.top = me._languages_popup.ggScrollPosY + 'px';
					if (me._languages_popup.ggVPercentVisible < 1.0) {
						let percentScrolled = me._languages_popup.ggScrollPosY / (me._languages_popup__vertScrollBg.offsetHeight - me._languages_popup__vertScrollFg.offsetHeight);
						me._languages_popup__content.style.top = -(Math.round((me._languages_popup.ggContentHeight * (1.0 - me._languages_popup.ggVPercentVisible)) * percentScrolled)) + me._languages_popup.ggContentTopOffset + 'px';
					}
				} else {
					me._languages_popup.ggAvailableWidth = me._languages_popup.clientWidth;
					me._languages_popup.ggScrollPosY = 0;
					me._languages_popup.ggScrollPosYPercent = 0.0;
					me._languages_popup__content.style.top = this.ggContentTopOffset + 'px';
					me._languages_popup__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._languages_popup.ggHorScrollVisible || vertScrollWasVisible != me._languages_popup.ggVertScrollVisible) {
					skin.updateSize(me._languages_popup);
					me._languages_popup.ggUpdatePosition();
				}
			}
		}
		el=me._languages_cloner=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._languages_cloner;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 195;
		el.ggHeight = 24;
		el.ggSizeChanged = false;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.ggUpdate = function(filter) {
			if(me._languages_cloner.ggUpdating == true) return;
			me._languages_cloner.ggUpdating = true;
			var el=me._languages_cloner;
			var curNumCols = 0;
			curNumCols = me._languages_cloner.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if ((el.ggNumCols == curNumCols) && !el.ggSizeChanged && false) {
				me._languages_cloner.ggUpdating = false;
				return;
			} else {
				el.ggSizeChanged = false;
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._languages_cloner.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			me._languages_cloner.ggNumFilterPassed = el.ggTranslations.length;
			for (var i = 0; i < el.ggTranslations.length; i++) {
				var cItem = el.ggTranslations[i];
				var nodeId = {};
				nodeId['tag'] = cItem.langCode;
				nodeId['title'] = cItem.langName;
				if (!keepCloning || i < me._languages_cloner.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._languages_cloner.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._languages_cloner.ggWidth) + 'px';
				parameter.width=me._languages_cloner.ggWidth + 'px';
				parameter.height=me._languages_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				var inst = new SkinCloner_languages_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._languages_cloner.ggNodeCount = me._languages_cloner.ggNumFilterPassed;
			me._languages_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._languages_cloner.parentNode && me._languages_cloner.parentNode.classList.contains('ggskin_subelement') && me._languages_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._languages_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggTranslations = [];
		el.ggId="languages_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		el.userData=el;
		hs ='';
		hs+='height : 24px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 195px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._languages_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._languages_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._languages_cloner.childNodes.length; i++) {
				var child=me._languages_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._languages_cloner.ggUpdatePosition=function (useTransition) {
			me._languages_cloner.ggUpdate();
		}
		me._languages_popup__content.appendChild(me._languages_cloner);
		me.divSkin.appendChild(me._languages_popup);
		el=me._video_popup=document.createElement('div');
		el.ggId="video_popup";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_popup.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_popup_file') == true)) || 
				((player.getVariableValue('vis_video_popup_url') == true)) || 
				((player.getVariableValue('vis_video_popup_youtube') == true)) || 
				((player.getVariableValue('vis_video_popup_vimeo') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_popup.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_popup.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_popup.style.transition='';
				if (me._video_popup.ggCurrentLogicStateVisible == 0) {
					me._video_popup.style.visibility=(Number(me._video_popup.style.opacity)>0||!me._video_popup.style.opacity)?'inherit':'hidden';
					me._video_popup.ggVisible=true;
				}
				else {
					me._video_popup.style.visibility="hidden";
					me._video_popup.ggVisible=false;
				}
			}
		}
		me._video_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._video_popup_vimeo=document.createElement('div');
		me._video_popup_vimeo.seekbars = [];
		me._video_popup_vimeo.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_popup_vimeo.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_popup_vimeo.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._video_popup_vimeo.hasChildNodes()) {
				me._video_popup_vimeo.removeChild(me._video_popup_vimeo.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me._video_popup_vimeo.ggVideoNotLoaded == false && me._video_popup_vimeo.ggDeactivate && player.isPlaying('video_popup_vimeo')) { me._video_popup_vimeo.ggDeactivate(); }
				me._video_popup_vimeo.ggVideoNotLoaded = true;
				return;
			}
			me._video_popup_vimeo.ggVideoNotLoaded = false;
			me._video_popup_vimeo__vid=document.createElement('iframe');
			me._video_popup_vimeo__vid.className='ggskin ggskin_video';
			var ggVimeoMedia = media;
			var ggTimeParam = '';
			if (ggVimeoMedia.indexOf('#') != -1) {
				ggTimeParam = media.slice(ggVimeoMedia.indexOf('#'));
				ggVimeoMedia = ggVimeoMedia.slice(0, ggVimeoMedia.indexOf('#'));
			}
			var ggVideoParams = '?autoplay=1&amp;loop=0&amp;rel=0';
			var ggVideoUrl = 'https://player.vimeo.com/video/' + ggVimeoMedia + ggVideoParams + ggTimeParam;
			me._video_popup_vimeo__vid.setAttribute('src', ggVideoUrl);
			me._video_popup_vimeo__vid.setAttribute('width', '100%');
			me._video_popup_vimeo__vid.setAttribute('height', '100%');
			me._video_popup_vimeo__vid.setAttribute('allow', 'autoplay');
			me._video_popup_vimeo__vid.setAttribute('allowfullscreen', 'true');
			me._video_popup_vimeo__vid.setAttribute('style', 'border:none; ; ;');
			me._video_popup_vimeo.appendChild(me._video_popup_vimeo__vid);
			me._video_popup_vimeo.ggApiPlayerType = 'vimeo';
			me._video_popup_vimeo.ggApiPlayer = new Vimeo.Player(me._video_popup_vimeo__vid);
			if (player.getPlayerMuted()) me._video_popup_vimeo.ggApiPlayer.setVolume(0);
			player.addListener('elementmuted', function(args) {
				if (args.id == 'video_popup_vimeo' || args.id == '_all' || args.id == '_main') {
					if (args.state == 0) skin._video_popup_vimeo.ggApiPlayer.setVolume(1);
					if (args.state == 1) skin._video_popup_vimeo.ggApiPlayer.setVolume(0);
					if (args.state == -1) { if (skin._video_popup_vimeo.ggApiPlayer.getVolume() > 0.0) skin._video_popup_vimeo.ggApiPlayer.setVolume(0); else skin._video_popup_vimeo.ggApiPlayer.setVolume(1); }
				}
			});
			player.addListener('elementvolume', function(args) {
				if (args.id == 'video_popup_vimeo' || args.id == '_main') {
					if (args.type == 'set') skin._video_popup_vimeo.ggApiPlayer.setVolume(args.volume);
					if (args.type == 'change') skin._video_popup_vimeo.ggApiPlayer.getVolume().then(function(volume) { skin._video_popup_vimeo.ggApiPlayer.setVolume(volume + args.volume); });
				}
			});
			me._video_popup_vimeo.ggVideoSource = media;
		}
		el.ggId="video_popup_vimeo";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		el.userData=el;
		hs ='';
		hs+='height : calc(100% - 240px);';
		hs+='left : calc(50% - ((calc(100% - 240px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(100% - 240px) + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 240px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_popup_vimeo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_vimeo.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_popup_vimeo') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_popup_vimeo.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_popup_vimeo.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_popup_vimeo.style.transition='';
				if (me._video_popup_vimeo.ggCurrentLogicStateVisible == 0) {
					me._video_popup_vimeo.style.visibility=(Number(me._video_popup_vimeo.style.opacity)>0||!me._video_popup_vimeo.style.opacity)?'inherit':'hidden';
					if (me._video_popup_vimeo.ggVideoNotLoaded) {
						me._video_popup_vimeo.ggInitMedia(me._video_popup_vimeo.ggVideoSource);
					}
					me._video_popup_vimeo.ggVisible=true;
				}
				else {
					me._video_popup_vimeo.style.visibility="hidden";
					me._video_popup_vimeo.ggInitMedia('');
					me._video_popup_vimeo.ggVisible=false;
				}
			}
		}
		me._video_popup_vimeo.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup.appendChild(me._video_popup_vimeo);
		el=me._video_popup_youtube=document.createElement('div');
		me._video_popup_youtube.seekbars = [];
			me._video_popup_youtube.ggYoutubeApiReady = function() { skin.ggYoutubeApiLoaded = true; }
		me._video_popup_youtube.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_popup_youtube.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_popup_youtube.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._video_popup_youtube.hasChildNodes()) {
				me._video_popup_youtube.removeChild(me._video_popup_youtube.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me._video_popup_youtube.ggVideoNotLoaded == false && me._video_popup_youtube.ggDeactivate && player.isPlaying('video_popup_youtube')) { me._video_popup_youtube.ggDeactivate(); }
				me._video_popup_youtube.ggVideoNotLoaded = true;
				return;
			}
			me._video_popup_youtube.ggVideoNotLoaded = false;
			me._video_popup_youtube__vid=document.createElement('iframe');
			me._video_popup_youtube__vid.className='ggskin ggskin_video';
			var ggYoutubeMedia = media;
			var ggTimeParam = '';
			if (ggYoutubeMedia.indexOf('&') != -1) {
				ggTimeParam = 'start' + media.slice(ggYoutubeMedia.indexOf('&') + 2) + '&amp;';
				ggYoutubeMedia = ggYoutubeMedia.slice(0, ggYoutubeMedia.indexOf('&'));
			}
			var ggVideoParams = '?' + ggTimeParam + 'autoplay=1&amp;controls=0&amp;loop=0&amp;enablejsapi=1&amp;rel=0';
			var ggVideoUrl = 'https://www.youtube.com/embed/' + ggYoutubeMedia + ggVideoParams;
			me._video_popup_youtube__vid.setAttribute('src', ggVideoUrl);
			me._video_popup_youtube__vid.setAttribute('width', '100%');
			me._video_popup_youtube__vid.setAttribute('height', '100%');
			me._video_popup_youtube__vid.setAttribute('allow', 'autoplay');
			me._video_popup_youtube__vid.setAttribute('allowfullscreen', 'true');
			me._video_popup_youtube__vid.setAttribute('style', 'border:none; ; ;');
			me._video_popup_youtube.appendChild(me._video_popup_youtube__vid);
			me._video_popup_youtube__vid.id = 'youtube-video';
			me._video_popup_youtube.ggYoutubeApiReady = function() {
				me._video_popup_youtube.ggApiPlayerType = 'youtube';
				me._video_popup_youtube.ggApiPlayerReady = false;
				me._video_popup_youtube.ggApiPlayer = new YT.Player('youtube-video', {
					events: {
						'onReady': function(event) {
							me._video_popup_youtube.ggApiPlayerReady = true;
							if (player.getPlayerMuted()) me._video_popup_youtube.ggApiPlayer.mute();
						},
						'onStateChange': function(event) {
							if (event.data == 0 && me._video_popup_youtube.ggMediaEnded) {
								me._video_popup_youtube.ggMediaEnded();
							}
							if (event.data == 1 && me._video_popup_youtube.ggActivate) {
								me._video_popup_youtube.ggActivate();
							}
							if ((event.data == 0 || event.data == 2) && me._video_popup_youtube.ggDeactivate) {
								me._video_popup_youtube.ggDeactivate();
							}
						}
					}
				});
				player.addListener('elementmuted', function(args) {
					if (args.id == 'video_popup_youtube' || args.id == '_all' || args.id == '_main') {
						if (args.state == 0) skin._video_popup_youtube.ggApiPlayer.unMute();
						if (args.state == 1) skin._video_popup_youtube.ggApiPlayer.mute();
						if (args.state == -1) { if (skin._video_popup_youtube.ggApiPlayer.isMuted()) skin._video_popup_youtube.ggApiPlayer.unMute(); else skin._video_popup_youtube.ggApiPlayer.mute(); }
					}
				});
				player.addListener('elementvolume', function(args) {
					if (args.id == 'video_popup_youtube' || args.id == '_main') {
						if (args.type == 'set') skin._video_popup_youtube.ggApiPlayer.setVolume(args.volume * 100);
						if (args.type == 'change') skin._video_popup_youtube.ggApiPlayer.setVolume(skin._video_popup_youtube.ggApiPlayer.getVolume() + args.volume * 100);
					}
				});
			}
			me._video_popup_youtube.ggVideoSource = media;
			if (skin.ggYoutubeApiLoaded && skin.ggYoutubeApiLoaded == true) {me._video_popup_youtube.ggYoutubeApiReady();}
		}
		el.ggId="video_popup_youtube";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		el.userData=el;
		hs ='';
		hs+='height : calc(100% - 240px);';
		hs+='left : calc(50% - ((calc(100% - 240px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(100% - 240px) + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 240px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_popup_youtube.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_youtube.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_popup_youtube') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_popup_youtube.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_popup_youtube.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_popup_youtube.style.transition='';
				if (me._video_popup_youtube.ggCurrentLogicStateVisible == 0) {
					me._video_popup_youtube.style.visibility=(Number(me._video_popup_youtube.style.opacity)>0||!me._video_popup_youtube.style.opacity)?'inherit':'hidden';
					if (me._video_popup_youtube.ggVideoNotLoaded) {
						me._video_popup_youtube.ggInitMedia(me._video_popup_youtube.ggVideoSource);
					}
					me._video_popup_youtube.ggVisible=true;
				}
				else {
					me._video_popup_youtube.style.visibility="hidden";
					me._video_popup_youtube.ggInitMedia('');
					me._video_popup_youtube.ggVisible=false;
				}
			}
		}
		me._video_popup_youtube.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup.appendChild(me._video_popup_youtube);
		el=me._video_popup_url_controller=document.createElement('div');
		el.ggId="video_popup_url_controller";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='bottom : 50px;';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((350px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 350px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_popup_url_controller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_url_controller.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_popup_url') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_popup_url_controller.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_popup_url_controller.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_popup_url_controller.style.transition='';
				if (me._video_popup_url_controller.ggCurrentLogicStateVisible == 0) {
					me._video_popup_url_controller.style.visibility=(Number(me._video_popup_url_controller.style.opacity)>0||!me._video_popup_url_controller.style.opacity)?'inherit':'hidden';
					me._video_popup_url_controller.ggVisible=true;
				}
				else {
					me._video_popup_url_controller.style.visibility="hidden";
					me._video_popup_url_controller.ggVisible=false;
				}
			}
		}
		me._video_popup_url_controller.ggUpdatePosition=function (useTransition) {
		}
		el=me._video_popup_url_controller_seekbar=document.createElement('div');
		me._video_popup_url_controller_seekbar__playhead=document.createElement('div');
		me._video_popup_url_controller_seekbar.mediaEl = null;
		me._video_popup_url_controller_seekbar.fromBufferSource = false;
		me._video_popup_url_controller_seekbar.ggMediaId = 'video_popup_url';
		el.ggId="video_popup_url_controller_seekbar";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_seekbar ";
		el.ggType='seekbar';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 10px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((10px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 40px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_popup_url_controller_seekbar.mouseTouchHandling = function(e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type=='touchstart') {
				if (me._video_popup_url_controller_seekbar.mediaEl != null) {
					if (e.target == me._video_popup_url_controller_seekbar) {
						let mouseX;
						if (e.type=='touchstart') {
							let rect = e.target.getBoundingClientRect();
							mouseX = e.targetTouches[0].pageX - rect.left;
						} else {
							mouseX = e.offsetX;
						}
						if (me._video_popup_url_controller_seekbar.fromBufferSource) {
							let seekpos = (mouseX / me._video_popup_url_controller_seekbar.clientWidth) * me._video_popup_url_controller_seekbar.mediaEl.bufferSoundDuration();
							me._video_popup_url_controller_seekbar.mediaEl.bufferSoundSetDragTime(seekpos);
						} else {
							let seekpos = (mouseX / me._video_popup_url_controller_seekbar.clientWidth) * me._video_popup_url_controller_seekbar.mediaEl.duration;
							if(!isNaN(seekpos)) me._video_popup_url_controller_seekbar.mediaEl.currentTime = seekpos;
						}
					}
					if (e.target == me._video_popup_url_controller_seekbar || e.target == me._video_popup_url_controller_seekbar__playhead) {
						document.onmousemove = document.ontouchmove = function(e) {
							let mouseX = e.pageX - me._video_popup_url_controller_seekbar.getBoundingClientRect().x;
							if (me._video_popup_url_controller_seekbar.fromBufferSource) {
								let seekpos = (mouseX / me._video_popup_url_controller_seekbar.clientWidth) * me._video_popup_url_controller_seekbar.mediaEl.bufferSoundDuration();
								me._video_popup_url_controller_seekbar.mediaEl.bufferSoundSetDragTime(seekpos);
							} else {
								let seekpos = (mouseX / me._video_popup_url_controller_seekbar.clientWidth) * me._video_popup_url_controller_seekbar.mediaEl.duration;
								if(!isNaN(seekpos)) me._video_popup_url_controller_seekbar.mediaEl.currentTime = seekpos;
							}
						}
						document.onmouseup = document.ontouchend = function(e) {
							let mouseX = e.pageX - me._video_popup_url_controller_seekbar.getBoundingClientRect().x;
							if (me._video_popup_url_controller_seekbar.fromBufferSource) {
								let seekpos = (mouseX / me._video_popup_url_controller_seekbar.clientWidth) * me._video_popup_url_controller_seekbar.mediaEl.bufferSoundDuration();
								me._video_popup_url_controller_seekbar.mediaEl.bufferSoundSetTime(seekpos);
							} else {
								let seekpos = (mouseX / me._video_popup_url_controller_seekbar.clientWidth) * me._video_popup_url_controller_seekbar.mediaEl.duration;
								if(!isNaN(seekpos)) me._video_popup_url_controller_seekbar.mediaEl.currentTime = seekpos;
							}
							document.onmousemove = document.ontouchmove = null;
							document.onmouseup = document.ontouchend = null;
						}
					}
				}
			}
		}
		me._video_popup_url_controller_seekbar.onmousedown = me._video_popup_url_controller_seekbar.ontouchstart = me._video_popup_url_controller_seekbar.mouseTouchHandling;
		me._video_popup_url_controller_seekbar.ggConnectToMediaEl = function() {
			var disableSeekbar = function() {
				me._video_popup_url_controller_seekbar__playhead.style.visibility = 'hidden';
				me._video_popup_url_controller_seekbar.style.background = 'rgba(0,0,0,0)';
				me._video_popup_url_controller_seekbar.ggConnected = false;
			}
			if (me._video_popup_url_controller_seekbar.mediaEl != null) {
				if (me._video_popup_url_controller_seekbar.fromBufferSource) {
					player.removeEventListener('bufferSoundTimeupdate', me._video_popup_url_controller_seekbar.updatePlayback);
					if (me._video_popup_url_controller_seekbar.ggActivate) {
						player.removeEventListener('bufferSoundPlay', me._video_popup_url_controller_seekbar.bufferSoundActivate);
					}
					if (me._video_popup_url_controller_seekbar.ggDeactivate) {
						player.removeEventListener('bufferSoundPause', me._video_popup_url_controller_seekbar.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundStop', me._video_popup_url_controller_seekbar.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundEnded', me._video_popup_url_controller_seekbar.bufferSoundDeactivate);
					}
					if (me._video_popup_url_controller_seekbar.ggMediaEnded) {
						player.removeEventListener('bufferSoundEnded', me._video_popup_url_controller_seekbar.bufferSoundMediaEnded);
					}
				} else {
					me._video_popup_url_controller_seekbar.mediaEl.removeEventListener('progress', me._video_popup_url_controller_seekbar.updatePlayback);
					me._video_popup_url_controller_seekbar.mediaEl.removeEventListener('canplay', me._video_popup_url_controller_seekbar.updatePlayback);
					me._video_popup_url_controller_seekbar.mediaEl.removeEventListener('timeupdate', me._video_popup_url_controller_seekbar.updatePlayback);
					if (me._video_popup_url_controller_seekbar.ggActivate) {
						me._video_popup_url_controller_seekbar.mediaEl.removeEventListener('play', me._video_popup_url_controller_seekbar.ggActivate);
					}
					if (me._video_popup_url_controller_seekbar.ggDeactivate) {
						me._video_popup_url_controller_seekbar.mediaEl.removeEventListener('ended', me._video_popup_url_controller_seekbar.ggDeactivate);
						me._video_popup_url_controller_seekbar.mediaEl.removeEventListener('pause', me._video_popup_url_controller_seekbar.ggDeactivate);
					}
					if (me._video_popup_url_controller_seekbar.ggMediaEnded) {
						me._video_popup_url_controller_seekbar.mediaEl.removeEventListener('ended', me._video_popup_url_controller_seekbar.ggMediaEnded);
					}
				}
			}
			me._video_popup_url_controller_seekbar.mediaEl = player.getMediaObject(me._video_popup_url_controller_seekbar.ggMediaId);
			if (me._video_popup_url_controller_seekbar.mediaEl) {
				me._video_popup_url_controller_seekbar.fromBufferSource = false;
			} else {
				me._video_popup_url_controller_seekbar.mediaEl = player.getMediaBufferSourceObject('video_popup_url');
				me._video_popup_url_controller_seekbar.fromBufferSource = true;
			}
			if (me._video_popup_url_controller_seekbar.mediaEl != null) {
				me._video_popup_url_controller_seekbar__playhead.style.visibility = 'inherit';
				me._video_popup_url_controller_seekbar__playhead.style.left = '-9px';
				if (me._video_popup_url_controller_seekbar.fromBufferSource) {
					player.addListener('bufferSoundTimeupdate', me._video_popup_url_controller_seekbar.updatePlayback);
					if (me._video_popup_url_controller_seekbar.ggActivate) {
						me._video_popup_url_controller_seekbar.bufferSoundActivate = function(args) { if (args['id'] == me._video_popup_url_controller_seekbar.mediaEl.id) me._video_popup_url_controller_seekbar.ggActivate(); };
						player.addListener('bufferSoundPlay', me._video_popup_url_controller_seekbar.bufferSoundActivate);
					}
					if (me._video_popup_url_controller_seekbar.ggDeactivate) {
						me._video_popup_url_controller_seekbar.bufferSoundDeactivate = function(args) { if (args['id'] == me._video_popup_url_controller_seekbar.mediaEl.id) me._video_popup_url_controller_seekbar.ggDeactivate(); };
						player.addListener('bufferSoundPause', me._video_popup_url_controller_seekbar.bufferSoundDeactivate);
						player.addListener('bufferSoundStop', me._video_popup_url_controller_seekbar.bufferSoundDeactivate);
						player.addListener('bufferSoundEnded', me._video_popup_url_controller_seekbar.bufferSoundDeactivate);
					}
					if (me._video_popup_url_controller_seekbar.ggMediaEnded) {
						me._video_popup_url_controller_seekbar.bufferSoundMediaEnded = function(args) { if (args['id'] == me._video_popup_url_controller_seekbar.mediaEl.id) me._video_popup_url_controller_seekbar.ggMediaEnded(); };
						player.addListener('bufferSoundEnded', me._video_popup_url_controller_seekbar.bufferSoundMediaEnded);
					}
				} else {
					me._video_popup_url_controller_seekbar.mediaEl.addEventListener('progress', me._video_popup_url_controller_seekbar.updatePlayback);
					me._video_popup_url_controller_seekbar.mediaEl.addEventListener('canplay', me._video_popup_url_controller_seekbar.updatePlayback);
					me._video_popup_url_controller_seekbar.mediaEl.addEventListener('timeupdate', me._video_popup_url_controller_seekbar.updatePlayback);
					if (me._video_popup_url_controller_seekbar.ggActivate) {
						me._video_popup_url_controller_seekbar.mediaEl.addEventListener('play', me._video_popup_url_controller_seekbar.ggActivate);
					}
					if (me._video_popup_url_controller_seekbar.ggDeactivate) {
						me._video_popup_url_controller_seekbar.mediaEl.addEventListener('ended', me._video_popup_url_controller_seekbar.ggDeactivate);
						me._video_popup_url_controller_seekbar.mediaEl.addEventListener('pause', me._video_popup_url_controller_seekbar.ggDeactivate);
					}
					if (me._video_popup_url_controller_seekbar.ggMediaEnded) {
						me._video_popup_url_controller_seekbar.mediaEl.addEventListener('ended', me._video_popup_url_controller_seekbar.ggMediaEnded);
					}
				}
				me._video_popup_url_controller_seekbar.ggConnected = true;
			} else {
				disableSeekbar();
			}
			var videoEl = me.findElements(me._video_popup_url_controller_seekbar.ggMediaId);
			if (videoEl.length > 0 && !videoEl[0].hasChildNodes()) {
				disableSeekbar();
			}
		}
		me._video_popup_url_controller_seekbar.updatePlayback = function(args) {
			if (!me._video_popup_url_controller_seekbar.ggConnected) return;
			if (me._video_popup_url_controller_seekbar.mediaEl != null) {
				if (me._video_popup_url_controller_seekbar.mediaEl.readyState || (me._video_popup_url_controller_seekbar.fromBufferSource && args && args['id'] == me._video_popup_url_controller_seekbar.mediaEl.id)) {
					if (me._video_popup_url_controller_seekbar.fromBufferSource) {
						var percent = me._video_popup_url_controller_seekbar.mediaEl.bufferSoundCurrentTime() / me._video_popup_url_controller_seekbar.mediaEl.bufferSoundDuration();
					} else {
						var percent = me._video_popup_url_controller_seekbar.mediaEl.currentTime / me._video_popup_url_controller_seekbar.mediaEl.duration;
					}
					percent = Math.min(percent, 1.0);
					var playheadpos = Math.round((me._video_popup_url_controller_seekbar.clientWidth - 2 * 4 + 0) * percent);
					playheadpos += -9;
					me._video_popup_url_controller_seekbar__playhead.style.left = playheadpos.toString() + 'px';
					var offsetPercent = Math.round(100.0 * (4 / me._video_popup_url_controller_seekbar.clientWidth));
					var currPos = offsetPercent + Math.round(percent * (100 - 2 * offsetPercent));
					var gradientString ='linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) ' + currPos + '%';
					if (me._video_popup_url_controller_seekbar.fromBufferSource) {
						gradientString += ', rgba(0,0,0,0.392157) ' + currPos +'%, rgba(0,0,0,0.392157) 100%';
					} else {
						for (var i = 0; i < me._video_popup_url_controller_seekbar.mediaEl.buffered.length; i++) {
							var rangeStart = Math.round((me._video_popup_url_controller_seekbar.mediaEl.buffered.start(i) / me._video_popup_url_controller_seekbar.mediaEl.duration) * 100.0);
							var rangeEnd = Math.ceil((me._video_popup_url_controller_seekbar.mediaEl.buffered.end(i) / me._video_popup_url_controller_seekbar.mediaEl.duration) * 100.0);
							if (rangeEnd > currPos) {
								if (rangeStart < currPos) {
									gradientString += ', rgba(0,0,0,0.392157) ' + currPos + '%';
								} else {
									gradientString += ', rgba(0,0,0,0) ' + currPos + '%, rgba(0,0,0,0) ' + rangeStart + '%';
									gradientString += ', rgba(0,0,0,0.392157) ' + rangeStart + '%';
								}
									gradientString += ', rgba(0,0,0,0.392157) ' + rangeEnd + '%';
								currPos = rangeEnd;
							}
						}
						if (currPos < 100) {
							gradientString += ', rgba(0,0,0,0) ' + currPos + '%';
						}
					}
					gradientString += ')';
					me._video_popup_url_controller_seekbar.style.background = gradientString;
				}
			}
		}
		me._video_popup_url_controller_seekbar.appendChild(me._video_popup_url_controller_seekbar__playhead);
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 4px;';
		var hs_playhead = 'height: 25px;';
		hs_playhead += 'width: 25px;';
		hs_playhead += 'border: 0px;';
		hs_playhead += 'position: absolute;';
		hs_playhead += 'left: -9px;';
		hs_playhead += 'top: -7.5px;';
		hs_playhead += 'border-radius: 13px;';
		hs_playhead += cssPrefix + 'border-radius: 13px;';
		hs_playhead += 'background-color: rgba(223,224,54,1);';
		me._video_popup_url_controller_seekbar.setAttribute('style', hs);
		me._video_popup_url_controller_seekbar__playhead.setAttribute('style', hs_playhead);
		me._video_popup_url_controller_seekbar.ggIsActive=function() {
			if (me._video_popup_url_controller_seekbar.mediaEl != null) {
				return (me._video_popup_url_controller_seekbar.mediaEl.paused == false && me._video_popup_url_controller_seekbar.mediaEl.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_url_controller_seekbar.ggActivate=function () {
			me._video_popup_url_controller_button_pause.style.transition='none';
			me._video_popup_url_controller_button_pause.style.visibility=(Number(me._video_popup_url_controller_button_pause.style.opacity)>0||!me._video_popup_url_controller_button_pause.style.opacity)?'inherit':'hidden';
			me._video_popup_url_controller_button_pause.ggVisible=true;
			me._video_popup_url_controller_button_play.style.transition='none';
			me._video_popup_url_controller_button_play.style.visibility='hidden';
			me._video_popup_url_controller_button_play.ggVisible=false;
		}
		me._video_popup_url_controller_seekbar.ggDeactivate=function () {
			me._video_popup_url_controller_button_play.style.transition='none';
			me._video_popup_url_controller_button_play.style.visibility=(Number(me._video_popup_url_controller_button_play.style.opacity)>0||!me._video_popup_url_controller_button_play.style.opacity)?'inherit':'hidden';
			me._video_popup_url_controller_button_play.ggVisible=true;
			me._video_popup_url_controller_button_pause.style.transition='none';
			me._video_popup_url_controller_button_pause.style.visibility='hidden';
			me._video_popup_url_controller_button_pause.ggVisible=false;
		}
		me._video_popup_url_controller_seekbar.ggUpdatePosition=function (useTransition) {
			me._video_popup_url_controller_seekbar.updatePlayback();
		}
		me._video_popup_url_controller.appendChild(me._video_popup_url_controller_seekbar);
		el=me._video_popup_url_controller_button_pause=document.createElement('div');
		els=me._video_popup_url_controller_button_pause__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiBoZWlnaHQ9IjE4cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE4cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJNOCAxOWMxLjEgMCAyLS45IDItMlY3YzAtMS4xLS45LTItMi0ycy0yIC45LTIgMnYxMGMwIDEuMS45IDIgMiAyem02LTEydjEwYzAgMS4xLjkgMiAyIDJzMi0uOSAyLTJWN2MwLTEuMS0uOS0yLTItMnMtMiAuOS0yIDJ6Ii8+Cjwvc3ZnPgo=';
		me._video_popup_url_controller_button_pause__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._video_popup_url_controller_button_pause__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOCAxODsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE4IDE4IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I2RmZTAzNjt9JiN4ZDsKPC9zdHlsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02LDE0LjJjMC44LDAsMS41LTAuNywxLjUtMS41VjUuMmMwLTAuOC0wLjctMS41LTEuNS0xLjVTNC41LDQuNCw0LjUsNS4ydjcuNUM0LjUsMTMuNiw1LjIsMTQuMiw2LDE0LjJ6JiN4ZDsmI3hhOyYjeDk7IE0xMC41LDUuMnY3LjVjMCwwLjgsMC43LDEuNSwxLjUsMS41czEuNS0wLjcsMS41LTEuNVY1LjJjMC0wLjgtMC43LTEuNS0xLjUtMS41UzEwLjUsNC40LDEwLjUsNS4yeiIvPgo8L3N2Zz4K';
		me._video_popup_url_controller_button_pause__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="video_popup_url_controller_button_pause";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_popup_url_controller_button_pause.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_url_controller_button_pause.onclick=function (e) {
			if (me._video_popup_url.ggApiPlayer) {
				if (me._video_popup_url.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._video_popup_url.ggApiPlayer.pauseVideo();
					};
					if (me._video_popup_url.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_popup_url.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_popup_url.ggApiPlayerType == 'vimeo') {
					me._video_popup_url.ggApiPlayer.pause();
				}
			} else {
				player.pauseSound("video_popup_url");
			}
			me._video_popup_url_controller_button_pause.style.transition='none';
			me._video_popup_url_controller_button_pause.style.visibility='hidden';
			me._video_popup_url_controller_button_pause.ggVisible=false;
			me._video_popup_url_controller_button_play.style.transition='none';
			me._video_popup_url_controller_button_play.style.visibility=(Number(me._video_popup_url_controller_button_play.style.opacity)>0||!me._video_popup_url_controller_button_play.style.opacity)?'inherit':'hidden';
			me._video_popup_url_controller_button_play.ggVisible=true;
		}
		me._video_popup_url_controller_button_pause.onmouseenter=function (e) {
			me._video_popup_url_controller_button_pause__img.style.visibility='hidden';
			me._video_popup_url_controller_button_pause__imgo.style.visibility='inherit';
			me.elementMouseOver['video_popup_url_controller_button_pause']=true;
		}
		me._video_popup_url_controller_button_pause.onmouseleave=function (e) {
			me._video_popup_url_controller_button_pause__img.style.visibility='inherit';
			me._video_popup_url_controller_button_pause__imgo.style.visibility='hidden';
			me.elementMouseOver['video_popup_url_controller_button_pause']=false;
		}
		me._video_popup_url_controller_button_pause.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_url_controller.appendChild(me._video_popup_url_controller_button_pause);
		el=me._video_popup_url_controller_button_play=document.createElement('div');
		els=me._video_popup_url_controller_button_play__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiBoZWlnaHQ9IjE4cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE4cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJNOCA2LjgydjEwLjM2YzAgLjc5Ljg3IDEuMjcgMS41NC44NGw4LjE0LTUuMThjLjYyLS4zOS42Mi0xLjI5IDAtMS42OUw5LjU0IDUuOThDOC44NyA1LjU1IDggNi4wMyA4IDYuODJ6Ii8+Cjwvc3ZnPgo=';
		me._video_popup_url_controller_button_play__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._video_popup_url_controller_button_play__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOCAxODsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE4IDE4IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I2RmZTAzNjt9JiN4ZDsKPC9zdHlsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02LDUuMXY3LjhjMCwwLjYsMC43LDEsMS4yLDAuNmw2LjEtMy45YzAuNS0wLjMsMC41LTEsMC0xLjNMNy4yLDQuNUM2LjcsNC4yLDYsNC41LDYsNS4xeiIvPgo8L3N2Zz4K';
		me._video_popup_url_controller_button_play__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="video_popup_url_controller_button_play";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_popup_url_controller_button_play.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_url_controller_button_play.onclick=function (e) {
			if (me._video_popup_url.ggApiPlayer) {
				if (me._video_popup_url.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._video_popup_url.ggApiPlayer.playVideo();
					};
					if (me._video_popup_url.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_popup_url.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_popup_url.ggApiPlayerType == 'vimeo') {
					me._video_popup_url.ggApiPlayer.play();
				}
			} else {
				player.playSound("video_popup_url","1");
			}
			me._video_popup_url_controller_button_play.style.transition='none';
			me._video_popup_url_controller_button_play.style.visibility='hidden';
			me._video_popup_url_controller_button_play.ggVisible=false;
			me._video_popup_url_controller_button_pause.style.transition='none';
			me._video_popup_url_controller_button_pause.style.visibility=(Number(me._video_popup_url_controller_button_pause.style.opacity)>0||!me._video_popup_url_controller_button_pause.style.opacity)?'inherit':'hidden';
			me._video_popup_url_controller_button_pause.ggVisible=true;
		}
		me._video_popup_url_controller_button_play.onmouseenter=function (e) {
			me._video_popup_url_controller_button_play__img.style.visibility='hidden';
			me._video_popup_url_controller_button_play__imgo.style.visibility='inherit';
			me.elementMouseOver['video_popup_url_controller_button_play']=true;
		}
		me._video_popup_url_controller_button_play.onmouseleave=function (e) {
			me._video_popup_url_controller_button_play__img.style.visibility='inherit';
			me._video_popup_url_controller_button_play__imgo.style.visibility='hidden';
			me.elementMouseOver['video_popup_url_controller_button_play']=false;
		}
		me._video_popup_url_controller_button_play.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_url_controller.appendChild(me._video_popup_url_controller_button_play);
		me._video_popup.appendChild(me._video_popup_url_controller);
		el=me._video_popup_url=document.createElement('div');
		me._video_popup_url.seekbars = [];
		me._video_popup_url.seekbars.push('video_popup_url_controller_seekbar');
		me._video_popup_url.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_popup_url.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_popup_url.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._video_popup_url.hasChildNodes()) {
				me._video_popup_url.removeChild(me._video_popup_url.lastChild);
			}
			if (me._video_popup_url__vid) {
				me._video_popup_url__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
				if (me._video_popup_url.ggVideoNotLoaded == false && me._video_popup_url.ggDeactivate && player.isPlaying('video_popup_url')) { me._video_popup_url.ggDeactivate(); }
				me._video_popup_url.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('video_popup_url');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._video_popup_url.ggVideoNotLoaded = false;
			me._video_popup_url__vid=document.createElement('video');
			me._video_popup_url__vid.className='ggskin ggskin_video';
			me._video_popup_url__vid.setAttribute('width', '100%');
			me._video_popup_url__vid.setAttribute('height', '100%');
			me._video_popup_url__vid.setAttribute('crossOrigin', 'anonymous');
			me._video_popup_url__vid.setAttribute('controlsList', 'nodownload');
			me._video_popup_url__vid.setAttribute('disablepictureinpicture', 'true');
			me._video_popup_url__vid.setAttribute('oncontextmenu', 'return false;');
			me._video_popup_url__vid.setAttribute('autoplay', '');
			me._video_popup_url__source=document.createElement('source');
			me._video_popup_url__source.setAttribute('src', media);
			me._video_popup_url__vid.setAttribute('playsinline', 'playsinline');
			me._video_popup_url__vid.setAttribute('style', ';');
			me._video_popup_url__vid.style.outline = 'none';
			me._video_popup_url__vid.appendChild(me._video_popup_url__source);
			me._video_popup_url.appendChild(me._video_popup_url__vid);
			var videoEl = player.registerVideoElement('video_popup_url', me._video_popup_url__vid);
			videoEl.autoplay = true;
			player.changeVolume('video_popup_url', 0.0);
			notifySeekbars();
			me._video_popup_url.ggVideoSource = media;
		}
		el.ggId="video_popup_url";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		el.userData=el;
		hs ='';
		hs+='height : calc(100% - 240px);';
		hs+='left : calc(50% - ((calc(100% - 240px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(100% - 240px) + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 240px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_popup_url.ggIsActive=function() {
			if (me._video_popup_url__vid != null) {
				return (me._video_popup_url__vid.paused == false && me._video_popup_url__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_popup_url') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_popup_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_popup_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_popup_url.style.transition='';
				if (me._video_popup_url.ggCurrentLogicStateVisible == 0) {
					me._video_popup_url.style.visibility=(Number(me._video_popup_url.style.opacity)>0||!me._video_popup_url.style.opacity)?'inherit':'hidden';
					if (me._video_popup_url.ggVideoNotLoaded) {
						me._video_popup_url.ggInitMedia(me._video_popup_url.ggVideoSource);
					}
					me._video_popup_url.ggVisible=true;
				}
				else {
					me._video_popup_url.style.visibility="hidden";
					me._video_popup_url.ggInitMedia('');
					me._video_popup_url.ggVisible=false;
				}
			}
		}
		me._video_popup_url.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup.appendChild(me._video_popup_url);
		el=me._video_popup_file_controller=document.createElement('div');
		el.ggId="video_popup_file_controller";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='bottom : 50px;';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((350px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 350px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_popup_file_controller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_file_controller.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_popup_file') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_popup_file_controller.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_popup_file_controller.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_popup_file_controller.style.transition='';
				if (me._video_popup_file_controller.ggCurrentLogicStateVisible == 0) {
					me._video_popup_file_controller.style.visibility=(Number(me._video_popup_file_controller.style.opacity)>0||!me._video_popup_file_controller.style.opacity)?'inherit':'hidden';
					me._video_popup_file_controller.ggVisible=true;
				}
				else {
					me._video_popup_file_controller.style.visibility="hidden";
					me._video_popup_file_controller.ggVisible=false;
				}
			}
		}
		me._video_popup_file_controller.ggUpdatePosition=function (useTransition) {
		}
		el=me._video_popup_file_controller_seekbar=document.createElement('div');
		me._video_popup_file_controller_seekbar__playhead=document.createElement('div');
		me._video_popup_file_controller_seekbar.mediaEl = null;
		me._video_popup_file_controller_seekbar.fromBufferSource = false;
		me._video_popup_file_controller_seekbar.ggMediaId = 'video_popup_file';
		el.ggId="video_popup_file_controller_seekbar";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_seekbar ";
		el.ggType='seekbar';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 10px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((10px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 40px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_popup_file_controller_seekbar.mouseTouchHandling = function(e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type=='touchstart') {
				if (me._video_popup_file_controller_seekbar.mediaEl != null) {
					if (e.target == me._video_popup_file_controller_seekbar) {
						let mouseX;
						if (e.type=='touchstart') {
							let rect = e.target.getBoundingClientRect();
							mouseX = e.targetTouches[0].pageX - rect.left;
						} else {
							mouseX = e.offsetX;
						}
						if (me._video_popup_file_controller_seekbar.fromBufferSource) {
							let seekpos = (mouseX / me._video_popup_file_controller_seekbar.clientWidth) * me._video_popup_file_controller_seekbar.mediaEl.bufferSoundDuration();
							me._video_popup_file_controller_seekbar.mediaEl.bufferSoundSetDragTime(seekpos);
						} else {
							let seekpos = (mouseX / me._video_popup_file_controller_seekbar.clientWidth) * me._video_popup_file_controller_seekbar.mediaEl.duration;
							if(!isNaN(seekpos)) me._video_popup_file_controller_seekbar.mediaEl.currentTime = seekpos;
						}
					}
					if (e.target == me._video_popup_file_controller_seekbar || e.target == me._video_popup_file_controller_seekbar__playhead) {
						document.onmousemove = document.ontouchmove = function(e) {
							let mouseX = e.pageX - me._video_popup_file_controller_seekbar.getBoundingClientRect().x;
							if (me._video_popup_file_controller_seekbar.fromBufferSource) {
								let seekpos = (mouseX / me._video_popup_file_controller_seekbar.clientWidth) * me._video_popup_file_controller_seekbar.mediaEl.bufferSoundDuration();
								me._video_popup_file_controller_seekbar.mediaEl.bufferSoundSetDragTime(seekpos);
							} else {
								let seekpos = (mouseX / me._video_popup_file_controller_seekbar.clientWidth) * me._video_popup_file_controller_seekbar.mediaEl.duration;
								if(!isNaN(seekpos)) me._video_popup_file_controller_seekbar.mediaEl.currentTime = seekpos;
							}
						}
						document.onmouseup = document.ontouchend = function(e) {
							let mouseX = e.pageX - me._video_popup_file_controller_seekbar.getBoundingClientRect().x;
							if (me._video_popup_file_controller_seekbar.fromBufferSource) {
								let seekpos = (mouseX / me._video_popup_file_controller_seekbar.clientWidth) * me._video_popup_file_controller_seekbar.mediaEl.bufferSoundDuration();
								me._video_popup_file_controller_seekbar.mediaEl.bufferSoundSetTime(seekpos);
							} else {
								let seekpos = (mouseX / me._video_popup_file_controller_seekbar.clientWidth) * me._video_popup_file_controller_seekbar.mediaEl.duration;
								if(!isNaN(seekpos)) me._video_popup_file_controller_seekbar.mediaEl.currentTime = seekpos;
							}
							document.onmousemove = document.ontouchmove = null;
							document.onmouseup = document.ontouchend = null;
						}
					}
				}
			}
		}
		me._video_popup_file_controller_seekbar.onmousedown = me._video_popup_file_controller_seekbar.ontouchstart = me._video_popup_file_controller_seekbar.mouseTouchHandling;
		me._video_popup_file_controller_seekbar.ggConnectToMediaEl = function() {
			var disableSeekbar = function() {
				me._video_popup_file_controller_seekbar__playhead.style.visibility = 'hidden';
				me._video_popup_file_controller_seekbar.style.background = 'rgba(0,0,0,0)';
				me._video_popup_file_controller_seekbar.ggConnected = false;
			}
			if (me._video_popup_file_controller_seekbar.mediaEl != null) {
				if (me._video_popup_file_controller_seekbar.fromBufferSource) {
					player.removeEventListener('bufferSoundTimeupdate', me._video_popup_file_controller_seekbar.updatePlayback);
					if (me._video_popup_file_controller_seekbar.ggActivate) {
						player.removeEventListener('bufferSoundPlay', me._video_popup_file_controller_seekbar.bufferSoundActivate);
					}
					if (me._video_popup_file_controller_seekbar.ggDeactivate) {
						player.removeEventListener('bufferSoundPause', me._video_popup_file_controller_seekbar.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundStop', me._video_popup_file_controller_seekbar.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundEnded', me._video_popup_file_controller_seekbar.bufferSoundDeactivate);
					}
					if (me._video_popup_file_controller_seekbar.ggMediaEnded) {
						player.removeEventListener('bufferSoundEnded', me._video_popup_file_controller_seekbar.bufferSoundMediaEnded);
					}
				} else {
					me._video_popup_file_controller_seekbar.mediaEl.removeEventListener('progress', me._video_popup_file_controller_seekbar.updatePlayback);
					me._video_popup_file_controller_seekbar.mediaEl.removeEventListener('canplay', me._video_popup_file_controller_seekbar.updatePlayback);
					me._video_popup_file_controller_seekbar.mediaEl.removeEventListener('timeupdate', me._video_popup_file_controller_seekbar.updatePlayback);
					if (me._video_popup_file_controller_seekbar.ggActivate) {
						me._video_popup_file_controller_seekbar.mediaEl.removeEventListener('play', me._video_popup_file_controller_seekbar.ggActivate);
					}
					if (me._video_popup_file_controller_seekbar.ggDeactivate) {
						me._video_popup_file_controller_seekbar.mediaEl.removeEventListener('ended', me._video_popup_file_controller_seekbar.ggDeactivate);
						me._video_popup_file_controller_seekbar.mediaEl.removeEventListener('pause', me._video_popup_file_controller_seekbar.ggDeactivate);
					}
					if (me._video_popup_file_controller_seekbar.ggMediaEnded) {
						me._video_popup_file_controller_seekbar.mediaEl.removeEventListener('ended', me._video_popup_file_controller_seekbar.ggMediaEnded);
					}
				}
			}
			me._video_popup_file_controller_seekbar.mediaEl = player.getMediaObject(me._video_popup_file_controller_seekbar.ggMediaId);
			if (me._video_popup_file_controller_seekbar.mediaEl) {
				me._video_popup_file_controller_seekbar.fromBufferSource = false;
			} else {
				me._video_popup_file_controller_seekbar.mediaEl = player.getMediaBufferSourceObject('video_popup_file');
				me._video_popup_file_controller_seekbar.fromBufferSource = true;
			}
			if (me._video_popup_file_controller_seekbar.mediaEl != null) {
				me._video_popup_file_controller_seekbar__playhead.style.visibility = 'inherit';
				me._video_popup_file_controller_seekbar__playhead.style.left = '-9px';
				if (me._video_popup_file_controller_seekbar.fromBufferSource) {
					player.addListener('bufferSoundTimeupdate', me._video_popup_file_controller_seekbar.updatePlayback);
					if (me._video_popup_file_controller_seekbar.ggActivate) {
						me._video_popup_file_controller_seekbar.bufferSoundActivate = function(args) { if (args['id'] == me._video_popup_file_controller_seekbar.mediaEl.id) me._video_popup_file_controller_seekbar.ggActivate(); };
						player.addListener('bufferSoundPlay', me._video_popup_file_controller_seekbar.bufferSoundActivate);
					}
					if (me._video_popup_file_controller_seekbar.ggDeactivate) {
						me._video_popup_file_controller_seekbar.bufferSoundDeactivate = function(args) { if (args['id'] == me._video_popup_file_controller_seekbar.mediaEl.id) me._video_popup_file_controller_seekbar.ggDeactivate(); };
						player.addListener('bufferSoundPause', me._video_popup_file_controller_seekbar.bufferSoundDeactivate);
						player.addListener('bufferSoundStop', me._video_popup_file_controller_seekbar.bufferSoundDeactivate);
						player.addListener('bufferSoundEnded', me._video_popup_file_controller_seekbar.bufferSoundDeactivate);
					}
					if (me._video_popup_file_controller_seekbar.ggMediaEnded) {
						me._video_popup_file_controller_seekbar.bufferSoundMediaEnded = function(args) { if (args['id'] == me._video_popup_file_controller_seekbar.mediaEl.id) me._video_popup_file_controller_seekbar.ggMediaEnded(); };
						player.addListener('bufferSoundEnded', me._video_popup_file_controller_seekbar.bufferSoundMediaEnded);
					}
				} else {
					me._video_popup_file_controller_seekbar.mediaEl.addEventListener('progress', me._video_popup_file_controller_seekbar.updatePlayback);
					me._video_popup_file_controller_seekbar.mediaEl.addEventListener('canplay', me._video_popup_file_controller_seekbar.updatePlayback);
					me._video_popup_file_controller_seekbar.mediaEl.addEventListener('timeupdate', me._video_popup_file_controller_seekbar.updatePlayback);
					if (me._video_popup_file_controller_seekbar.ggActivate) {
						me._video_popup_file_controller_seekbar.mediaEl.addEventListener('play', me._video_popup_file_controller_seekbar.ggActivate);
					}
					if (me._video_popup_file_controller_seekbar.ggDeactivate) {
						me._video_popup_file_controller_seekbar.mediaEl.addEventListener('ended', me._video_popup_file_controller_seekbar.ggDeactivate);
						me._video_popup_file_controller_seekbar.mediaEl.addEventListener('pause', me._video_popup_file_controller_seekbar.ggDeactivate);
					}
					if (me._video_popup_file_controller_seekbar.ggMediaEnded) {
						me._video_popup_file_controller_seekbar.mediaEl.addEventListener('ended', me._video_popup_file_controller_seekbar.ggMediaEnded);
					}
				}
				me._video_popup_file_controller_seekbar.ggConnected = true;
			} else {
				disableSeekbar();
			}
			var videoEl = me.findElements(me._video_popup_file_controller_seekbar.ggMediaId);
			if (videoEl.length > 0 && !videoEl[0].hasChildNodes()) {
				disableSeekbar();
			}
		}
		me._video_popup_file_controller_seekbar.updatePlayback = function(args) {
			if (!me._video_popup_file_controller_seekbar.ggConnected) return;
			if (me._video_popup_file_controller_seekbar.mediaEl != null) {
				if (me._video_popup_file_controller_seekbar.mediaEl.readyState || (me._video_popup_file_controller_seekbar.fromBufferSource && args && args['id'] == me._video_popup_file_controller_seekbar.mediaEl.id)) {
					if (me._video_popup_file_controller_seekbar.fromBufferSource) {
						var percent = me._video_popup_file_controller_seekbar.mediaEl.bufferSoundCurrentTime() / me._video_popup_file_controller_seekbar.mediaEl.bufferSoundDuration();
					} else {
						var percent = me._video_popup_file_controller_seekbar.mediaEl.currentTime / me._video_popup_file_controller_seekbar.mediaEl.duration;
					}
					percent = Math.min(percent, 1.0);
					var playheadpos = Math.round((me._video_popup_file_controller_seekbar.clientWidth - 2 * 4 + 0) * percent);
					playheadpos += -9;
					me._video_popup_file_controller_seekbar__playhead.style.left = playheadpos.toString() + 'px';
					var offsetPercent = Math.round(100.0 * (4 / me._video_popup_file_controller_seekbar.clientWidth));
					var currPos = offsetPercent + Math.round(percent * (100 - 2 * offsetPercent));
					var gradientString ='linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) ' + currPos + '%';
					if (me._video_popup_file_controller_seekbar.fromBufferSource) {
						gradientString += ', rgba(0,0,0,0.392157) ' + currPos +'%, rgba(0,0,0,0.392157) 100%';
					} else {
						for (var i = 0; i < me._video_popup_file_controller_seekbar.mediaEl.buffered.length; i++) {
							var rangeStart = Math.round((me._video_popup_file_controller_seekbar.mediaEl.buffered.start(i) / me._video_popup_file_controller_seekbar.mediaEl.duration) * 100.0);
							var rangeEnd = Math.ceil((me._video_popup_file_controller_seekbar.mediaEl.buffered.end(i) / me._video_popup_file_controller_seekbar.mediaEl.duration) * 100.0);
							if (rangeEnd > currPos) {
								if (rangeStart < currPos) {
									gradientString += ', rgba(0,0,0,0.392157) ' + currPos + '%';
								} else {
									gradientString += ', rgba(0,0,0,0) ' + currPos + '%, rgba(0,0,0,0) ' + rangeStart + '%';
									gradientString += ', rgba(0,0,0,0.392157) ' + rangeStart + '%';
								}
									gradientString += ', rgba(0,0,0,0.392157) ' + rangeEnd + '%';
								currPos = rangeEnd;
							}
						}
						if (currPos < 100) {
							gradientString += ', rgba(0,0,0,0) ' + currPos + '%';
						}
					}
					gradientString += ')';
					me._video_popup_file_controller_seekbar.style.background = gradientString;
				}
			}
		}
		me._video_popup_file_controller_seekbar.appendChild(me._video_popup_file_controller_seekbar__playhead);
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 4px;';
		var hs_playhead = 'height: 25px;';
		hs_playhead += 'width: 25px;';
		hs_playhead += 'border: 0px;';
		hs_playhead += 'position: absolute;';
		hs_playhead += 'left: -9px;';
		hs_playhead += 'top: -7.5px;';
		hs_playhead += 'border-radius: 13px;';
		hs_playhead += cssPrefix + 'border-radius: 13px;';
		hs_playhead += 'background-color: rgba(223,224,54,1);';
		me._video_popup_file_controller_seekbar.setAttribute('style', hs);
		me._video_popup_file_controller_seekbar__playhead.setAttribute('style', hs_playhead);
		me._video_popup_file_controller_seekbar.ggIsActive=function() {
			if (me._video_popup_file_controller_seekbar.mediaEl != null) {
				return (me._video_popup_file_controller_seekbar.mediaEl.paused == false && me._video_popup_file_controller_seekbar.mediaEl.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_file_controller_seekbar.ggActivate=function () {
			me._video_popup_file_controller_button_pause.style.transition='none';
			me._video_popup_file_controller_button_pause.style.visibility=(Number(me._video_popup_file_controller_button_pause.style.opacity)>0||!me._video_popup_file_controller_button_pause.style.opacity)?'inherit':'hidden';
			me._video_popup_file_controller_button_pause.ggVisible=true;
			me._video_popup_file_controller_button_play.style.transition='none';
			me._video_popup_file_controller_button_play.style.visibility='hidden';
			me._video_popup_file_controller_button_play.ggVisible=false;
		}
		me._video_popup_file_controller_seekbar.ggDeactivate=function () {
			me._video_popup_file_controller_button_play.style.transition='none';
			me._video_popup_file_controller_button_play.style.visibility=(Number(me._video_popup_file_controller_button_play.style.opacity)>0||!me._video_popup_file_controller_button_play.style.opacity)?'inherit':'hidden';
			me._video_popup_file_controller_button_play.ggVisible=true;
			me._video_popup_file_controller_button_pause.style.transition='none';
			me._video_popup_file_controller_button_pause.style.visibility='hidden';
			me._video_popup_file_controller_button_pause.ggVisible=false;
		}
		me._video_popup_file_controller_seekbar.ggUpdatePosition=function (useTransition) {
			me._video_popup_file_controller_seekbar.updatePlayback();
		}
		me._video_popup_file_controller.appendChild(me._video_popup_file_controller_seekbar);
		el=me._video_popup_file_controller_button_pause=document.createElement('div');
		els=me._video_popup_file_controller_button_pause__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiBoZWlnaHQ9IjE4cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE4cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJNOCAxOWMxLjEgMCAyLS45IDItMlY3YzAtMS4xLS45LTItMi0ycy0yIC45LTIgMnYxMGMwIDEuMS45IDIgMiAyem02LTEydjEwYzAgMS4xLjkgMiAyIDJzMi0uOSAyLTJWN2MwLTEuMS0uOS0yLTItMnMtMiAuOS0yIDJ6Ii8+Cjwvc3ZnPgo=';
		me._video_popup_file_controller_button_pause__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._video_popup_file_controller_button_pause__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOCAxODsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE4IDE4IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I2RmZTAzNjt9JiN4ZDsKPC9zdHlsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02LDE0LjJjMC44LDAsMS41LTAuNywxLjUtMS41VjUuMmMwLTAuOC0wLjctMS41LTEuNS0xLjVTNC41LDQuNCw0LjUsNS4ydjcuNUM0LjUsMTMuNiw1LjIsMTQuMiw2LDE0LjJ6JiN4ZDsmI3hhOyYjeDk7IE0xMC41LDUuMnY3LjVjMCwwLjgsMC43LDEuNSwxLjUsMS41czEuNS0wLjcsMS41LTEuNVY1LjJjMC0wLjgtMC43LTEuNS0xLjUtMS41UzEwLjUsNC40LDEwLjUsNS4yeiIvPgo8L3N2Zz4K';
		me._video_popup_file_controller_button_pause__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="video_popup_file_controller_button_pause";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_popup_file_controller_button_pause.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_file_controller_button_pause.onclick=function (e) {
			if (me._video_popup_file.ggApiPlayer) {
				if (me._video_popup_file.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._video_popup_file.ggApiPlayer.pauseVideo();
					};
					if (me._video_popup_file.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_popup_file.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_popup_file.ggApiPlayerType == 'vimeo') {
					me._video_popup_file.ggApiPlayer.pause();
				}
			} else {
				player.pauseSound("video_popup_file");
			}
			me._video_popup_file_controller_button_pause.style.transition='none';
			me._video_popup_file_controller_button_pause.style.visibility='hidden';
			me._video_popup_file_controller_button_pause.ggVisible=false;
			me._video_popup_file_controller_button_play.style.transition='none';
			me._video_popup_file_controller_button_play.style.visibility=(Number(me._video_popup_file_controller_button_play.style.opacity)>0||!me._video_popup_file_controller_button_play.style.opacity)?'inherit':'hidden';
			me._video_popup_file_controller_button_play.ggVisible=true;
		}
		me._video_popup_file_controller_button_pause.onmouseenter=function (e) {
			me._video_popup_file_controller_button_pause__img.style.visibility='hidden';
			me._video_popup_file_controller_button_pause__imgo.style.visibility='inherit';
			me.elementMouseOver['video_popup_file_controller_button_pause']=true;
		}
		me._video_popup_file_controller_button_pause.onmouseleave=function (e) {
			me._video_popup_file_controller_button_pause__img.style.visibility='inherit';
			me._video_popup_file_controller_button_pause__imgo.style.visibility='hidden';
			me.elementMouseOver['video_popup_file_controller_button_pause']=false;
		}
		me._video_popup_file_controller_button_pause.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_file_controller.appendChild(me._video_popup_file_controller_button_pause);
		el=me._video_popup_file_controller_button_play=document.createElement('div');
		els=me._video_popup_file_controller_button_play__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiBoZWlnaHQ9IjE4cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE4cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJNOCA2LjgydjEwLjM2YzAgLjc5Ljg3IDEuMjcgMS41NC44NGw4LjE0LTUuMThjLjYyLS4zOS42Mi0xLjI5IDAtMS42OUw5LjU0IDUuOThDOC44NyA1LjU1IDggNi4wMyA4IDYuODJ6Ii8+Cjwvc3ZnPgo=';
		me._video_popup_file_controller_button_play__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._video_popup_file_controller_button_play__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOCAxODsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE4IDE4IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I2RmZTAzNjt9JiN4ZDsKPC9zdHlsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02LDUuMXY3LjhjMCwwLjYsMC43LDEsMS4yLDAuNmw2LjEtMy45YzAuNS0wLjMsMC41LTEsMC0xLjNMNy4yLDQuNUM2LjcsNC4yLDYsNC41LDYsNS4xeiIvPgo8L3N2Zz4K';
		me._video_popup_file_controller_button_play__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="video_popup_file_controller_button_play";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_popup_file_controller_button_play.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_file_controller_button_play.onclick=function (e) {
			if (me._video_popup_file.ggApiPlayer) {
				if (me._video_popup_file.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._video_popup_file.ggApiPlayer.playVideo();
					};
					if (me._video_popup_file.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_popup_file.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_popup_file.ggApiPlayerType == 'vimeo') {
					me._video_popup_file.ggApiPlayer.play();
				}
			} else {
				player.playSound("video_popup_file","1");
			}
			me._video_popup_file_controller_button_play.style.transition='none';
			me._video_popup_file_controller_button_play.style.visibility='hidden';
			me._video_popup_file_controller_button_play.ggVisible=false;
			me._video_popup_file_controller_button_pause.style.transition='none';
			me._video_popup_file_controller_button_pause.style.visibility=(Number(me._video_popup_file_controller_button_pause.style.opacity)>0||!me._video_popup_file_controller_button_pause.style.opacity)?'inherit':'hidden';
			me._video_popup_file_controller_button_pause.ggVisible=true;
		}
		me._video_popup_file_controller_button_play.onmouseenter=function (e) {
			me._video_popup_file_controller_button_play__img.style.visibility='hidden';
			me._video_popup_file_controller_button_play__imgo.style.visibility='inherit';
			me.elementMouseOver['video_popup_file_controller_button_play']=true;
		}
		me._video_popup_file_controller_button_play.onmouseleave=function (e) {
			me._video_popup_file_controller_button_play__img.style.visibility='inherit';
			me._video_popup_file_controller_button_play__imgo.style.visibility='hidden';
			me.elementMouseOver['video_popup_file_controller_button_play']=false;
		}
		me._video_popup_file_controller_button_play.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_file_controller.appendChild(me._video_popup_file_controller_button_play);
		me._video_popup.appendChild(me._video_popup_file_controller);
		el=me._video_popup_file=document.createElement('div');
		me._video_popup_file.seekbars = [];
		me._video_popup_file.seekbars.push('video_popup_file_controller_seekbar');
		me._video_popup_file.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_popup_file.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_popup_file.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._video_popup_file.hasChildNodes()) {
				me._video_popup_file.removeChild(me._video_popup_file.lastChild);
			}
			if (me._video_popup_file__vid) {
				me._video_popup_file__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
				if (me._video_popup_file.ggVideoNotLoaded == false && me._video_popup_file.ggDeactivate && player.isPlaying('video_popup_file')) { me._video_popup_file.ggDeactivate(); }
				me._video_popup_file.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('video_popup_file');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._video_popup_file.ggVideoNotLoaded = false;
			me._video_popup_file__vid=document.createElement('video');
			me._video_popup_file__vid.className='ggskin ggskin_video';
			me._video_popup_file__vid.setAttribute('width', '100%');
			me._video_popup_file__vid.setAttribute('height', '100%');
			me._video_popup_file__vid.setAttribute('crossOrigin', 'anonymous');
			me._video_popup_file__vid.setAttribute('controlsList', 'nodownload');
			me._video_popup_file__vid.setAttribute('disablepictureinpicture', 'true');
			me._video_popup_file__vid.setAttribute('oncontextmenu', 'return false;');
			me._video_popup_file__vid.setAttribute('autoplay', '');
			me._video_popup_file__source=document.createElement('source');
			me._video_popup_file__source.setAttribute('src', media);
			me._video_popup_file__vid.setAttribute('playsinline', 'playsinline');
			me._video_popup_file__vid.setAttribute('style', ';');
			me._video_popup_file__vid.style.outline = 'none';
			me._video_popup_file__vid.appendChild(me._video_popup_file__source);
			me._video_popup_file.appendChild(me._video_popup_file__vid);
			var videoEl = player.registerVideoElement('video_popup_file', me._video_popup_file__vid);
			videoEl.autoplay = true;
			player.changeVolume('video_popup_file', 0.0);
			notifySeekbars();
			me._video_popup_file.ggVideoSource = media;
		}
		el.ggId="video_popup_file";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		el.userData=el;
		hs ='';
		hs+='height : calc(100% - 240px);';
		hs+='left : calc(50% - ((calc(100% - 240px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(100% - 240px) + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 240px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_popup_file.ggIsActive=function() {
			if (me._video_popup_file__vid != null) {
				return (me._video_popup_file__vid.paused == false && me._video_popup_file__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_file.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_popup_file') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_popup_file.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_popup_file.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_popup_file.style.transition='';
				if (me._video_popup_file.ggCurrentLogicStateVisible == 0) {
					me._video_popup_file.style.visibility=(Number(me._video_popup_file.style.opacity)>0||!me._video_popup_file.style.opacity)?'inherit':'hidden';
					if (me._video_popup_file.ggVideoNotLoaded) {
						me._video_popup_file.ggInitMedia(me._video_popup_file.ggVideoSource);
					}
					me._video_popup_file.ggVisible=true;
				}
				else {
					me._video_popup_file.style.visibility="hidden";
					me._video_popup_file.ggInitMedia('');
					me._video_popup_file.ggVisible=false;
				}
			}
		}
		me._video_popup_file.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup.appendChild(me._video_popup_file);
		me.divSkin.appendChild(me._video_popup);
		el=me._sounds_splashscreen=document.createElement('div');
		el.ggId="sounds_splashscreen";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='height : 140px;';
		hs+='left : calc(50% - ((320px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((140px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 320px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sounds_splashscreen.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._sounds_splashscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_sounds_splashscreen') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._sounds_splashscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._sounds_splashscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._sounds_splashscreen.style.transition='';
				if (me._sounds_splashscreen.ggCurrentLogicStateVisible == 0) {
					me._sounds_splashscreen.style.visibility=(Number(me._sounds_splashscreen.style.opacity)>0||!me._sounds_splashscreen.style.opacity)?'inherit':'hidden';
					me._sounds_splashscreen.ggVisible=true;
				}
				else {
					me._sounds_splashscreen.style.visibility="hidden";
					me._sounds_splashscreen.ggVisible=false;
				}
			}
		}
		me._sounds_splashscreen.ggUpdatePosition=function (useTransition) {
		}
		el=me._sounds_splashscreen_bg=document.createElement('div');
		el.ggId="sounds_splashscreen_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sounds_splashscreen_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._sounds_splashscreen_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._sounds_off=document.createElement('div');
		els=me._sounds_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgZmlsbD0id2hpdGUiIGhlaWdodD0iMThweCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMThweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnPgogIDxyZWN0IGZpbGw9Im5vbmUiIGhlaWdodD0iMjQiIHdpZHRoPSIyNCIvPgogPC9nPgogPGc+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0xNi4yNSwxMy40MkMxNi40LDEyLjk3LDE2LjUsMTIuNSwxNi41LDEyYzAtMS43Ny0xLjAyLTMuMjktMi41LTQuMDN2My4yTDE2LjI1LDEzLjQyeiIvPgogICA8cGF0aCBkPSJNMTksMTJjMCwxLjIxLTAuMzEsMi4zNC'+
			'0wLjg1LDMuMzJsMS40NiwxLjQ2QzIwLjQ4LDE1LjM5LDIxLDEzLjc2LDIxLDEyYzAtMy44My0yLjQtNy4xMS01Ljc4LTguNCBDMTQuNjMsMy4zNywxNCwzLjgzLDE0LDQuNDZ2MC4xOWMwLDAuMzgsMC4yNSwwLjcxLDAuNjEsMC44NUMxNy4xOCw2LjU0LDE5LDkuMDYsMTksMTJ6Ii8+CiAgIDxwYXRoIGQ9Ik0yLjEsMy41MUwyLjEsMy41MWMtMC4zOSwwLjM5LTAuMzksMS4wMiwwLDEuNDFMNi4xNyw5SDRjLTAuNTUsMC0xLDAuNDUtMSwxdjRjMCwwLjU1LDAuNDUsMSwxLDFoM2wzLjI5LDMuMjkgYzAuNjMsMC42MywxLjcxLDAuMTgsMS43MS0wLjcxdi0yLjc2bDMuMzIsMy4zMmMtMC4yMywwLjEz'+
			'LTAuNDcsMC4yNC0wLjcxLDAuMzVjLTAuMzcsMC4xNi0wLjYsMC41Mi0wLjYsMC45MXYwIGMwLDAuNywwLjcsMS4yLDEuMzUsMC45NGMwLjUtMC4yLDAuOTktMC40NSwxLjQ0LTAuNzNsMi4yOCwyLjI4YzAuMzksMC4zOSwxLjAyLDAuMzksMS40MSwwbDAsMGMwLjM5LTAuMzksMC4zOS0xLjAyLDAtMS40MSBMMy41MSwzLjUxQzMuMTIsMy4xMiwyLjQ5LDMuMTIsMi4xLDMuNTF6Ii8+CiAgIDxwYXRoIGQ9Ik0xMiw5LjE3VjYuNDFjMC0wLjg5LTEuMDgtMS4zNC0xLjcxLTAuNzFMOS40MSw2LjU5TDEyLDkuMTd6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._sounds_off__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._sounds_off__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOCAxODsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE4IDE4IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7fQoJLnN0MXtmaWxsOiNkZmUwMzY7fQo8L3N0eWxlPgogPGc+CiAgPHJlY3QgY2xhc3M9InN0MCIgaGVpZ2h0PSIxOCIgd2lkdGg9IjE4Ii8+CiA8L2c+CiA8Zz4KICA8Zz4KICAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTEyLjIsMTAuMWMwLjEtMC4zLDAuMi0wLjcsMC4yLTEuMWMwLTEuMy0wLjgtMi41LTEuOS0zdjIuNEwxMi4yLDEwLjF6Ii8+CiAgIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xNC4yLDljMCwwLjktMC4yLDEuOC0wLjYsMi41bDEuMSwxLjFjMC43LTEsMS0yLjMsMS0zLjZjMC0yLjktMS44LTUuMy00'+
			'LjMtNi4zYy0wLjQtMC4yLTAuOSwwLjItMC45LDAuNiAgICB2MC4xYzAsMC4zLDAuMiwwLjUsMC41LDAuNkMxMi45LDQuOSwxNC4yLDYuOCwxNC4yLDl6Ii8+CiAgIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xLjYsMi42TDEuNiwyLjZjLTAuMywwLjMtMC4zLDAuOCwwLDEuMWwzLjEsMy4xSDNjLTAuNCwwLTAuOCwwLjMtMC44LDAuOHYzYzAsMC40LDAuMywwLjgsMC44LDAuOGgyLjIgICAgbDIuNSwyLjVDOC4yLDE0LjIsOSwxMy45LDksMTMuMnYtMi4xbDIuNSwyLjVjLTAuMiwwLjEtMC40LDAuMi0wLjUsMC4zYy0wLjMsMC4xLTAuNCwwLjQtMC40LDAuN2wwLDBjMCwwLjUsMC41LDAuOSwxLDAuNy'+
			'AgICBjMC40LTAuMSwwLjctMC4zLDEuMS0wLjVsMS43LDEuN2MwLjMsMC4zLDAuOCwwLjMsMS4xLDBsMCwwYzAuMy0wLjMsMC4zLTAuOCwwLTEuMUwyLjYsMi42QzIuMywyLjMsMS45LDIuMywxLjYsMi42eiIvPgogICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNOSw2LjlWNC44YzAtMC43LTAuOC0xLTEuMy0wLjVMNy4xLDQuOUw5LDYuOXoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._sounds_off__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="sounds_off";
		el.ggDx=65;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 64px;';
		hs+='left : calc(50% - ((64px + 0px) / 2) + 65px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((64px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 64px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sounds_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._sounds_off.onclick=function (e) {
			player.mute("_all");
			player.setVariableValue('toggle_audio', false);
			player.setVariableValue('sounds_splashscreen_accepted', true);
		}
		me._sounds_off.onmouseenter=function (e) {
			me._sounds_off__img.style.visibility='hidden';
			me._sounds_off__imgo.style.visibility='inherit';
			me.elementMouseOver['sounds_off']=true;
		}
		me._sounds_off.onmouseleave=function (e) {
			me._sounds_off__img.style.visibility='inherit';
			me._sounds_off__imgo.style.visibility='hidden';
			me.elementMouseOver['sounds_off']=false;
		}
		me._sounds_off.ggUpdatePosition=function (useTransition) {
		}
		me._sounds_splashscreen_bg.appendChild(me._sounds_off);
		el=me._sounds_on=document.createElement('div');
		els=me._sounds_on__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgZmlsbD0id2hpdGUiIGhlaWdodD0iMThweCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMThweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnPgogIDxyZWN0IGZpbGw9Im5vbmUiIGhlaWdodD0iMjQiIHdpZHRoPSIyNCIvPgogPC9nPgogPGc+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0zLDEwdjRjMCwwLjU1LDAuNDUsMSwxLDFoM2wzLjI5LDMuMjljMC42MywwLjYzLDEuNzEsMC4xOCwxLjcxLTAuNzFWNi40MWMwLTAuODktMS4wOC0xLjM0LTEuNzEtMC43MUw3LDlINCBDMy40NSw5LDMsOS40NSwzLD'+
			'EweiBNMTYuNSwxMmMwLTEuNzctMS4wMi0zLjI5LTIuNS00LjAzdjguMDVDMTUuNDgsMTUuMjksMTYuNSwxMy43NywxNi41LDEyeiBNMTQsNC40NXYwLjIgYzAsMC4zOCwwLjI1LDAuNzEsMC42LDAuODVDMTcuMTgsNi41MywxOSw5LjA2LDE5LDEycy0xLjgyLDUuNDctNC40LDYuNWMtMC4zNiwwLjE0LTAuNiwwLjQ3LTAuNiwwLjg1djAuMiBjMCwwLjYzLDAuNjMsMS4wNywxLjIxLDAuODVDMTguNiwxOS4xMSwyMSwxNS44NCwyMSwxMnMtMi40LTcuMTEtNS43OS04LjRDMTQuNjMsMy4zNywxNCwzLjgyLDE0LDQuNDV6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._sounds_on__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._sounds_on__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOCAxODsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE4IDE4IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7fQoJLnN0MXtmaWxsOiNkZmUwMzY7fQo8L3N0eWxlPgogPGc+CiAgPHJlY3QgY2xhc3M9InN0MCIgaGVpZ2h0PSIxOCIgd2lkdGg9IjE4Ii8+CiA8L2c+CiA8Zz4KICA8Zz4KICAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTIuMiw3LjV2M2MwLDAuNCwwLjMsMC44LDAuOCwwLjhoMi4ybDIuNSwyLjVDOC4yLDE0LjIsOSwxMy45LDksMTMuMlY0LjhjMC0wLjctMC44LTEtMS4zLTAuNUw1LjIsNi44SDMgICAgQzIuNiw2LjgsMi4yLDcuMSwyLjIsNy41eiBNMTIuNCw5YzAtMS4zLTAuOC0yLjUtMS45LTN2NkMxMS42LDEx'+
			'LjUsMTIuNCwxMC4zLDEyLjQsOXogTTEwLjUsMy4zdjAuMWMwLDAuMywwLjIsMC41LDAuNSwwLjYgICAgYzEuOSwwLjgsMy4zLDIuNywzLjMsNC45cy0xLjQsNC4xLTMuMyw0LjljLTAuMywwLjEtMC41LDAuNC0wLjUsMC42djAuMWMwLDAuNSwwLjUsMC44LDAuOSwwLjZjMi41LTEsNC4zLTMuNCw0LjMtNi4zICAgIFMxNCwzLjcsMTEuNCwyLjdDMTEsMi41LDEwLjUsMi45LDEwLjUsMy4zeiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._sounds_on__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="sounds_on";
		el.ggDx=-65;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 64px;';
		hs+='left : calc(50% - ((64px + 0px) / 2) - 65px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((64px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 64px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sounds_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._sounds_on.onclick=function (e) {
			player.startAutoplayMedia();
			player.setVariableValue('sounds_splashscreen_accepted', true);
		}
		me._sounds_on.onmouseenter=function (e) {
			me._sounds_on__img.style.visibility='hidden';
			me._sounds_on__imgo.style.visibility='inherit';
			me.elementMouseOver['sounds_on']=true;
		}
		me._sounds_on.onmouseleave=function (e) {
			me._sounds_on__img.style.visibility='inherit';
			me._sounds_on__imgo.style.visibility='hidden';
			me.elementMouseOver['sounds_on']=false;
		}
		me._sounds_on.ggUpdatePosition=function (useTransition) {
		}
		me._sounds_splashscreen_bg.appendChild(me._sounds_on);
		me._sounds_splashscreen.appendChild(me._sounds_splashscreen_bg);
		me.divSkin.appendChild(me._sounds_splashscreen);
		el=me._screentint_phone=document.createElement('div');
		el.ggId="screentint_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : rgba(0,0,0,0.54902);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='backdrop-filter: blur(5px); -webkit-backdrop-filter: blur(5px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._screentint_phone.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._screentint_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_thumbs') == true)) || 
				((player.getVariableValue('vis_phone_info') == true)) || 
				((player.getVariableValue('vis_phone_image') == true)) || 
				((player.getVariableValue('vis_phone_pdf') == true)) || 
				((player.getVariableValue('vis_phone_youtube') == true)) || 
				((player.getVariableValue('vis_phone_vimeo') == true)) || 
				((player.getVariableValue('vis_phone_video_file') == true)) || 
				((player.getVariableValue('vis_phone_video_url') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._screentint_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._screentint_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._screentint_phone.style.transition='';
				if (me._screentint_phone.ggCurrentLogicStateVisible == 0) {
					me._screentint_phone.style.visibility=(Number(me._screentint_phone.style.opacity)>0||!me._screentint_phone.style.opacity)?'inherit':'hidden';
					me._screentint_phone.ggVisible=true;
				}
				else {
					me._screentint_phone.style.visibility="hidden";
					me._screentint_phone.ggVisible=false;
				}
			}
		}
		me._screentint_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._safe_area_phone=document.createElement('div');
		el.ggId="safe_area_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='height : calc(100% - env(safe-area-inset-top) - env(safe-area-inset-bottom));';
		hs+='left : env(safe-area-inset-left);';
		hs+='position : absolute;';
		hs+='top : env(safe-area-inset-top);';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - env(safe-area-inset-left) - env(safe-area-inset-right));';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._safe_area_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._safe_area_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._close_popup_phone=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="close_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='height : 80px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._close_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._close_popup_phone.onclick=function (e) {
			player.setVariableValue('vis_phone_thumbs', false);
			player.setVariableValue('vis_phone_info', false);
			player.setVariableValue('vis_phone_image', false);
			player.setVariableValue('vis_phone_pdf', false);
			player.setVariableValue('vis_phone_youtube', false);
			player.setVariableValue('vis_phone_vimeo', false);
			player.setVariableValue('vis_phone_video_file', false);
			player.setVariableValue('vis_phone_video_url', false);
		}
		me._close_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_close_popup_phone=document.createElement('div');
		els=me._btn_close_popup_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxOHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIi8+CiA8cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyIDE5IDYuNDF6Ii8+Cjwvc3ZnPgo=';
		me._btn_close_popup_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._btn_close_popup_phone__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOCAxODsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE4IDE4IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojZGZlMDM2O30mI3hkOwo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTAsMGgxOHYxOEgwVjB6Ii8+CiA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTQuMiw0LjhsLTEuMS0xLjFMOSw3LjlMNC44LDMuOEwzLjgsNC44TDcuOSw5bC00LjIsNC4ybDEuMSwxLjFMOSwxMC4xbDQuMiw0LjJsMS4xLTEuMUwxMC4xLDlMMTQuMiw0Ljh6Ii8+Cjwvc3ZnPgo=';
		me._btn_close_popup_phone__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="btn_close_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg svg_shadow";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_close_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_close_popup_phone.onmouseenter=function (e) {
			me._btn_close_popup_phone__img.style.visibility='hidden';
			me._btn_close_popup_phone__imgo.style.visibility='inherit';
			me.elementMouseOver['btn_close_popup_phone']=true;
		}
		me._btn_close_popup_phone.onmouseleave=function (e) {
			me._btn_close_popup_phone__img.style.visibility='inherit';
			me._btn_close_popup_phone__imgo.style.visibility='hidden';
			me.elementMouseOver['btn_close_popup_phone']=false;
		}
		me._btn_close_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._close_popup_phone.appendChild(me._btn_close_popup_phone);
		me._safe_area_phone.appendChild(me._close_popup_phone);
		el=me._thumbnail_scroller_phone=document.createElement('div');
		els=me._thumbnail_scroller_phone__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggInInteraction = false;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 109px;';
		hs+='left : 50%;';
		hs+='margin-left : -91.5px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 183px;';
		hs+="";
		els.setAttribute('style',hs);
		me._thumbnail_scroller_phone.ggScrollByX = function(diffX) {
			if(!me._thumbnail_scroller_phone.ggHorScrollVisible || diffX == 0 || me._thumbnail_scroller_phone.ggHPercentVisible >= 1.0) return;
			me._thumbnail_scroller_phone.ggScrollPosX = (me._thumbnail_scroller_phone__horScrollFg.offsetLeft + diffX);
			me._thumbnail_scroller_phone.ggScrollPosX = Math.max(me._thumbnail_scroller_phone.ggScrollPosX, 0);
			me._thumbnail_scroller_phone.ggScrollPosX = Math.min(me._thumbnail_scroller_phone.ggScrollPosX, me._thumbnail_scroller_phone__horScrollBg.offsetWidth - me._thumbnail_scroller_phone__horScrollFg.offsetWidth);
			me._thumbnail_scroller_phone__horScrollFg.style.left = me._thumbnail_scroller_phone.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_scroller_phone.ggScrollPosX / (me._thumbnail_scroller_phone__horScrollBg.offsetWidth - me._thumbnail_scroller_phone__horScrollFg.offsetWidth);
			me._thumbnail_scroller_phone__content.style.left = -(Math.round((me._thumbnail_scroller_phone.ggContentWidth * (1.0 - me._thumbnail_scroller_phone.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone.ggContentLeftOffset + 'px';
			me._thumbnail_scroller_phone.ggScrollPosXPercent = (me._thumbnail_scroller_phone__horScrollFg.offsetLeft / me._thumbnail_scroller_phone__horScrollBg.offsetWidth);
		}
		me._thumbnail_scroller_phone.ggScrollByXSmooth = function(diffX) {
			if(!me._thumbnail_scroller_phone.ggHorScrollVisible || diffX == 0 || me._thumbnail_scroller_phone.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._thumbnail_scroller_phone.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._thumbnail_scroller_phone.ggScrollPosX >= me._thumbnail_scroller_phone__horScrollBg.offsetWidth - me._thumbnail_scroller_phone__horScrollFg.offsetWidth)) {
					me._thumbnail_scroller_phone.ggScrollPosX = Math.min(me._thumbnail_scroller_phone.ggScrollPosX, me._thumbnail_scroller_phone__horScrollBg.offsetWidth - me._thumbnail_scroller_phone__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._thumbnail_scroller_phone.ggScrollPosX <= 0)) {
					me._thumbnail_scroller_phone.ggScrollPosX = Math.max(me._thumbnail_scroller_phone.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._thumbnail_scroller_phone__horScrollFg.style.left = me._thumbnail_scroller_phone.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_scroller_phone.ggScrollPosX / (me._thumbnail_scroller_phone__horScrollBg.offsetWidth - me._thumbnail_scroller_phone__horScrollFg.offsetWidth);
			me._thumbnail_scroller_phone__content.style.left = -(Math.round((me._thumbnail_scroller_phone.ggContentWidth * (1.0 - me._thumbnail_scroller_phone.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone.ggContentLeftOffset + 'px';
			me._thumbnail_scroller_phone.ggScrollPosXPercent = (me._thumbnail_scroller_phone__horScrollFg.offsetLeft / me._thumbnail_scroller_phone__horScrollBg.offsetWidth);
			}, 10);
		}
		me._thumbnail_scroller_phone.ggScrollByY = function(diffY) {
			if(!me._thumbnail_scroller_phone.ggVertScrollVisible || diffY == 0 || me._thumbnail_scroller_phone.ggVPercentVisible >= 1.0) return;
			me._thumbnail_scroller_phone.ggScrollPosY = (me._thumbnail_scroller_phone__vertScrollFg.offsetTop + diffY);
			me._thumbnail_scroller_phone.ggScrollPosY = Math.max(me._thumbnail_scroller_phone.ggScrollPosY, 0);
			me._thumbnail_scroller_phone.ggScrollPosY = Math.min(me._thumbnail_scroller_phone.ggScrollPosY, me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
			me._thumbnail_scroller_phone__vertScrollFg.style.top = me._thumbnail_scroller_phone.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_scroller_phone.ggScrollPosY / (me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
			me._thumbnail_scroller_phone__content.style.top = -(Math.round((me._thumbnail_scroller_phone.ggContentHeight * (1.0 - me._thumbnail_scroller_phone.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone.ggContentTopOffset + 'px';
			me._thumbnail_scroller_phone.ggScrollPosYPercent = (me._thumbnail_scroller_phone__vertScrollFg.offsetTop / me._thumbnail_scroller_phone__vertScrollBg.offsetHeight);
		}
		me._thumbnail_scroller_phone.ggScrollByYSmooth = function(diffY) {
			if(!me._thumbnail_scroller_phone.ggVertScrollVisible || diffY == 0 || me._thumbnail_scroller_phone.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._thumbnail_scroller_phone.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._thumbnail_scroller_phone.ggScrollPosY >= me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight)) {
					me._thumbnail_scroller_phone.ggScrollPosY = Math.min(me._thumbnail_scroller_phone.ggScrollPosY, me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._thumbnail_scroller_phone.ggScrollPosY <= 0)) {
					me._thumbnail_scroller_phone.ggScrollPosY = Math.max(me._thumbnail_scroller_phone.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._thumbnail_scroller_phone__vertScrollFg.style.top = me._thumbnail_scroller_phone.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_scroller_phone.ggScrollPosY / (me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
			me._thumbnail_scroller_phone__content.style.top = -(Math.round((me._thumbnail_scroller_phone.ggContentHeight * (1.0 - me._thumbnail_scroller_phone.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone.ggContentTopOffset + 'px';
			me._thumbnail_scroller_phone.ggScrollPosYPercent = (me._thumbnail_scroller_phone__vertScrollFg.offsetTop / me._thumbnail_scroller_phone__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._thumbnail_scroller_phone.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._thumbnail_scroller_phone.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._thumbnail_scroller_phone.ggHPercentVisible);
					me._thumbnail_scroller_phone.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._thumbnail_scroller_phone.clientWidth - (me._thumbnail_scroller_phone.ggVertScrollVisible ? 8 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._thumbnail_scroller_phone.clientWidth - (me._thumbnail_scroller_phone.ggVertScrollVisible ? 8 : 0))) * me._thumbnail_scroller_phone.ggHPercentVisible);
					me._thumbnail_scroller_phone.ggScrollByXSmooth(diffX);
				}
			}
			if (me._thumbnail_scroller_phone.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._thumbnail_scroller_phone.ggVPercentVisible);
					me._thumbnail_scroller_phone.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._thumbnail_scroller_phone.clientHeight - (me._thumbnail_scroller_phone.ggHorScrollVisible ? 8 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._thumbnail_scroller_phone.clientHeight - (me._thumbnail_scroller_phone.ggHorScrollVisible ? 8 : 0))) * me._thumbnail_scroller_phone.ggVPercentVisible);
					me._thumbnail_scroller_phone.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._thumbnail_scroller_phone__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._thumbnail_scroller_phone.ggDragInertiaX *= 0.96;
				me._thumbnail_scroller_phone.ggDragInertiaY *= 0.96;
				me._thumbnail_scroller_phone.ggScrollByX(me._thumbnail_scroller_phone.ggDragInertiaX);
				me._thumbnail_scroller_phone.ggScrollByY(me._thumbnail_scroller_phone.ggDragInertiaY);
				if (Math.abs(me._thumbnail_scroller_phone.ggDragInertiaX) < 1.0 && Math.abs(me._thumbnail_scroller_phone.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._thumbnail_scroller_phone.ggInInteraction = false;
			setTimeout(function() { me._thumbnail_scroller_phone.ggIsDragging = false; }, 100);
		}
		me._thumbnail_scroller_phone__content.mousetouchmove = e => {
			if (!me._thumbnail_scroller_phone.ggInInteraction) return;
			e = e || window.event;
			if (e.buttons==0) {
				me._thumbnail_scroller_phone__content.mousetouchend();
				return;
			}
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._thumbnail_scroller_phone.ggDragStartX) > 10 || Math.abs(eventY - me._thumbnail_scroller_phone.ggDragStartY) > 10) me._thumbnail_scroller_phone.ggIsDragging = true;
			var diffX = (eventX - me._thumbnail_scroller_phone.ggDragLastX) * me._thumbnail_scroller_phone.ggHPercentVisible;
			var diffY = (eventY - me._thumbnail_scroller_phone.ggDragLastY) * me._thumbnail_scroller_phone.ggVPercentVisible;
			me._thumbnail_scroller_phone.ggDragInertiaX = -diffX;
			me._thumbnail_scroller_phone.ggDragInertiaY = -diffY;
			me._thumbnail_scroller_phone.ggDragLastX = eventX;
			me._thumbnail_scroller_phone.ggDragLastY = eventY;
			me._thumbnail_scroller_phone.ggScrollByX(-diffX);
			me._thumbnail_scroller_phone.ggScrollByY(-diffY);
		}
		me._thumbnail_scroller_phone__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._thumbnail_scroller_phone.ggDragLastX = me._thumbnail_scroller_phone.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._thumbnail_scroller_phone.ggDragLastY = me._thumbnail_scroller_phone.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._thumbnail_scroller_phone.ggInInteraction = true;
		}
		els.onmousedown = me._thumbnail_scroller_phone__content.mousetouchstart;
		els.ontouchstart = me._thumbnail_scroller_phone__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._thumbnail_scroller_phone__content.mousetouchstart;
		}
		document.addEventListener('mouseup', me._thumbnail_scroller_phone.contentMouseupListener = function() { me._thumbnail_scroller_phone__content.mousetouchend(); });
		document.addEventListener('touchend', me._thumbnail_scroller_phone.contentTouchendListener = function() { me._thumbnail_scroller_phone__content.mousetouchend(); });
		document.addEventListener('mousemove', me._thumbnail_scroller_phone.contentMousemoveListener = function() { me._thumbnail_scroller_phone__content.mousetouchmove(); });
		document.addEventListener('touchmove', me._thumbnail_scroller_phone.contentTouchmoveListener = function() { me._thumbnail_scroller_phone__content.mousetouchmove(); });
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			document.addEventListener('pointerup', me._thumbnail_scroller_phone.pointerupListener = function() { me._thumbnail_scroller_phone__content.mousetouchend(); });
			document.addEventListener('pointermove', me._thumbnail_scroller_phone.pointermoveListener = function() { me._thumbnail_scroller_phone__content.mousetouchmove(); });
		}
		elVertScrollBg = me._thumbnail_scroller_phone__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 8px; height: 717px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._thumbnail_scroller_phone__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 8px; height: 717px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._thumbnail_scroller_phone.ggScrollPosY = 0;
		me._thumbnail_scroller_phone.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnail_scroller_phone.ggDragLastY = e.clientY;
			document.addEventListener('mouseup', me._thumbnail_scroller_phone.vertMouseupListener = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_scroller_phone.ggDragInertiaY *= 0.96;
					me._thumbnail_scroller_phone.ggScrollByY(me._thumbnail_scroller_phone.ggDragInertiaY);
					if (Math.abs(me._thumbnail_scroller_phone.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.removeEventListener('mouseup', me._thumbnail_scroller_phone.vertMouseupListener);
				document.removeEventListener('mousemove', me._thumbnail_scroller_phone.vertMousemoveListener);
			});
			document.addEventListener('mousemove', me._thumbnail_scroller_phone.vertMousemoveListener = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._thumbnail_scroller_phone.ggDragLastY;
				me._thumbnail_scroller_phone.ggDragInertiaY = diffY;
				me._thumbnail_scroller_phone.ggDragLastY = e.clientY;
				me._thumbnail_scroller_phone.ggScrollByY(diffY);
			});
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnail_scroller_phone.ggDragLastY = t ? t[0].clientY : e.clientY;
			me._thumbnail_scroller_phone.vertTouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_scroller_phone.ggDragInertiaY *= 0.96;
					me._thumbnail_scroller_phone.ggScrollByY(me._thumbnail_scroller_phone.ggDragInertiaY);
					if (Math.abs(me._thumbnail_scroller_phone.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.removeEventListener('touchend', me._thumbnail_scroller_phone.vertTouchendListener);
				document.removeEventListener('touchmove', me._thumbnail_scroller_phone.vertTouchmoveListener);
				document.removeEventListener('pointerup', me._thumbnail_scroller_phone.vertPointerupListener);
				document.removeEventListener('pointermove', me._thumbnail_scroller_phone.vertPointermoveListener);
			}
			document.addEventListener('touchend', me._thumbnail_scroller_phone.vertTouchendListener = function() { me._thumbnail_scroller_phone.vertTouchend(); });
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.addEventListener('pointerup', me._thumbnail_scroller_phone.vertPointerupListener = function() { me._thumbnail_scroller_phone.vertTouchend(); });
			}
			me._thumbnail_scroller_phone.vertTouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._thumbnail_scroller_phone.ggDragLastY;
				me._thumbnail_scroller_phone.ggDragInertiaY = diffY;
				me._thumbnail_scroller_phone.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._thumbnail_scroller_phone.ggScrollByY(diffY);
			}
			document.addEventListener('touchmove', me._thumbnail_scroller_phone.vertTouchmoveListener = function(e) { me._thumbnail_scroller_phone.vertTouchmove(e); });
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.addEventListener('pointermove', me._thumbnail_scroller_phone.vertPointermoveListener = function(e) { me._thumbnail_scroller_phone.vertTouchmove(e); });
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._thumbnail_scroller_phone.ggScrollHeight;
			if (e.offsetY < me._thumbnail_scroller_phone.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._thumbnail_scroller_phone.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnail_scroller_phone__vertScrollBg.getBoundingClientRect();
			var diffY = me._thumbnail_scroller_phone.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._thumbnail_scroller_phone.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._thumbnail_scroller_phone.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._thumbnail_scroller_phone.ggScrollByYSmooth(30 * me._thumbnail_scroller_phone.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._thumbnail_scroller_phone__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 8px; height: 8px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="thumbnail_scroller_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 50px);';
		hs+='left : 20px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 40px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_scroller_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnail_scroller_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_thumbs') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_scroller_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_scroller_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_scroller_phone.style.transition='';
				if (me._thumbnail_scroller_phone.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_scroller_phone.style.visibility=(Number(me._thumbnail_scroller_phone.style.opacity)>0||!me._thumbnail_scroller_phone.style.opacity)?'inherit':'hidden';
					me._thumbnail_scroller_phone.ggVisible=true;
				}
				else {
					me._thumbnail_scroller_phone.style.visibility="hidden";
					me._thumbnail_scroller_phone.ggVisible=false;
				}
			}
		}
		me._thumbnail_scroller_phone.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				var containerWidth = offsetWidthWithScale;
				if (this.ggVertScrollVisible) containerWidth -= 8;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = ((contentWidth/-2) - (this.ggVertScrollVisible ? (8/2) : 0)) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				this.ggContent.style.top = -(Math.round(me._thumbnail_scroller_phone.ggScrollPosY / me._thumbnail_scroller_phone.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._thumbnail_scroller_phone.ggHorScrollVisible && contentHeight > this.clientHeight - 8) || (!me._thumbnail_scroller_phone.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._thumbnail_scroller_phone__vertScrollBg.style.visibility = 'inherit';
					me._thumbnail_scroller_phone__vertScrollFg.style.visibility = 'inherit';
					me._thumbnail_scroller_phone.ggVertScrollVisible = true;
				} else {
					me._thumbnail_scroller_phone__vertScrollBg.style.visibility = 'hidden';
					me._thumbnail_scroller_phone__vertScrollFg.style.visibility = 'hidden';
					me._thumbnail_scroller_phone.ggVertScrollVisible = false;
				}
				if(me._thumbnail_scroller_phone.ggVertScrollVisible) {
					me._thumbnail_scroller_phone.ggAvailableWidth = me._thumbnail_scroller_phone.clientWidth - 8;
					if (me._thumbnail_scroller_phone.ggHorScrollVisible) {
						me._thumbnail_scroller_phone.ggAvailableHeight = me._thumbnail_scroller_phone.clientHeight - 8;
						me._thumbnail_scroller_phone.ggAvailableHeightWithScale = me._thumbnail_scroller_phone.getBoundingClientRect().height - me._thumbnail_scroller_phone__vertScrollBg.getBoundingClientRect().width;
						me._thumbnail_scroller_phone__cornerBg.style.visibility = 'inherit';
					} else {
						me._thumbnail_scroller_phone.ggAvailableHeight = me._thumbnail_scroller_phone.clientHeight;
						me._thumbnail_scroller_phone.ggAvailableHeightWithScale = me._thumbnail_scroller_phone.getBoundingClientRect().height;
						me._thumbnail_scroller_phone__cornerBg.style.visibility = 'hidden';
					}
					me._thumbnail_scroller_phone__vertScrollBg.style.height = me._thumbnail_scroller_phone.ggAvailableHeight + 'px';
					me._thumbnail_scroller_phone.ggVPercentVisible = contentHeight != 0 ? me._thumbnail_scroller_phone.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._thumbnail_scroller_phone.ggVPercentVisible > 1.0) me._thumbnail_scroller_phone.ggVPercentVisible = 1.0;
					me._thumbnail_scroller_phone.ggScrollHeight =  Math.round(me._thumbnail_scroller_phone__vertScrollBg.offsetHeight * me._thumbnail_scroller_phone.ggVPercentVisible);
					me._thumbnail_scroller_phone__vertScrollFg.style.height = me._thumbnail_scroller_phone.ggScrollHeight + 'px';
					me._thumbnail_scroller_phone.ggScrollPosY = me._thumbnail_scroller_phone.ggScrollPosYPercent * me._thumbnail_scroller_phone.ggAvailableHeight;
					me._thumbnail_scroller_phone.ggScrollPosY = Math.min(me._thumbnail_scroller_phone.ggScrollPosY, me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
					me._thumbnail_scroller_phone__vertScrollFg.style.top = me._thumbnail_scroller_phone.ggScrollPosY + 'px';
					if (me._thumbnail_scroller_phone.ggVPercentVisible < 1.0) {
						let percentScrolled = me._thumbnail_scroller_phone.ggScrollPosY / (me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
						me._thumbnail_scroller_phone__content.style.top = -(Math.round((me._thumbnail_scroller_phone.ggContentHeight * (1.0 - me._thumbnail_scroller_phone.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone.ggContentTopOffset + 'px';
					}
				} else {
					me._thumbnail_scroller_phone.ggAvailableWidth = me._thumbnail_scroller_phone.clientWidth;
					me._thumbnail_scroller_phone.ggScrollPosY = 0;
					me._thumbnail_scroller_phone.ggScrollPosYPercent = 0.0;
					me._thumbnail_scroller_phone__content.style.top = this.ggContentTopOffset + 'px';
					me._thumbnail_scroller_phone__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._thumbnail_scroller_phone.ggHorScrollVisible || vertScrollWasVisible != me._thumbnail_scroller_phone.ggVertScrollVisible) {
					skin.updateSize(me._thumbnail_scroller_phone);
					me._thumbnail_scroller_phone.ggUpdatePosition();
				}
			}
		}
		el=me._node_cloner_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._node_cloner_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 100;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 148;
		el.ggHeight = 110;
		el.ggSizeChanged = false;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._node_cloner_phone.ggUpdating == true) return;
			me._node_cloner_phone.ggUpdating = true;
			var el=me._node_cloner_phone;
			var curNumCols = 0;
			var parentWidth = me._node_cloner_phone.parentNode.classList.contains('ggskin_subelement') ? (me._node_cloner_phone.parentNode.parentNode.classList.contains('ggskin_scrollarea') ? me._node_cloner_phone.parentNode.parentNode.ggAvailableWidth : me._node_cloner_phone.parentNode.parentNode.clientWidth) : me._node_cloner_phone.parentNode.clientWidth;
			if (parentWidth == 0) parentWidth = me._node_cloner_phone.parentNode.parentNode.clientWidth;
			curNumCols = Math.floor(((parentWidth - me._node_cloner_phone.offsetLeft) * me._node_cloner_phone.ggNumRepeat / 100.0) / me._node_cloner_phone.offsetWidth);
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && !el.ggSizeChanged && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._node_cloner_phone.ggUpdating = false;
				return;
			} else {
				el.ggSizeChanged = false;
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._node_cloner_phone.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._node_cloner_phone.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._node_cloner_phone.getFilteredNodes(tourNodes, filter);
			me._node_cloner_phone.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._node_cloner_phone.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._node_cloner_phone.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._node_cloner_phone.ggWidth) + 'px';
				parameter.width=me._node_cloner_phone.ggWidth + 'px';
				parameter.height=me._node_cloner_phone.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_node_cloner_phone_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._node_cloner_phone.ggNodeCount = me._node_cloner_phone.ggNumFilterPassed;
			me._node_cloner_phone.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._node_cloner_phone.parentNode && me._node_cloner_phone.parentNode.classList.contains('ggskin_subelement') && me._node_cloner_phone.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._node_cloner_phone.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "_nope";
		el.ggId="node_cloner_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		el.userData=el;
		hs ='';
		hs+='height : 110px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 148px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._node_cloner_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._node_cloner_phone.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._node_cloner_phone.childNodes.length; i++) {
				var child=me._node_cloner_phone.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._node_cloner_phone.ggUpdatePosition=function (useTransition) {
			me._node_cloner_phone.ggUpdate();
		}
		me._thumbnail_scroller_phone__content.appendChild(me._node_cloner_phone);
		me._safe_area_phone.appendChild(me._thumbnail_scroller_phone);
		el=me._info_popup_phone=document.createElement('div');
		el.ggId="info_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='height : calc(100% - 80px);';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._info_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_info') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._info_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._info_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._info_popup_phone.style.transition='';
				if (me._info_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._info_popup_phone.style.visibility=(Number(me._info_popup_phone.style.opacity)>0||!me._info_popup_phone.style.opacity)?'inherit':'hidden';
					me._info_popup_phone.ggVisible=true;
				}
				else {
					me._info_popup_phone.style.visibility="hidden";
					me._info_popup_phone.ggVisible=false;
				}
			}
		}
		me._info_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._info_popup_text_phone=document.createElement('div');
		els=me._info_popup_text_phone__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_popup_text_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text noto_sans";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : calc(100% - 80px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 60px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs='';
		hs+='box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		hs+='line-height: 1.5;';
		els.setAttribute('style',hs);
		me._info_popup_text_phone.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_popup_text_phone.ggUpdateText();
		el.appendChild(els);
		me._info_popup_text_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._info_popup_text_phone.ggUpdatePosition=function (useTransition) {
		}
		me._info_popup_phone.appendChild(me._info_popup_text_phone);
		el=me._info_popup_title_phone=document.createElement('div');
		els=me._info_popup_title_phone__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_popup_title_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text varela";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs='';
		hs+='box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 22px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._info_popup_title_phone.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_popup_title_phone.ggUpdateText();
		el.appendChild(els);
		me._info_popup_title_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._info_popup_title_phone.ggUpdatePosition=function (useTransition) {
		}
		me._info_popup_phone.appendChild(me._info_popup_title_phone);
		me._safe_area_phone.appendChild(me._info_popup_phone);
		el=me._video_controller_phone=document.createElement('div');
		el.ggId="video_controller_phone";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='bottom : 25px;';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((clamp(200px, calc(100% - 40px), 350px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : clamp(200px, calc(100% - 40px), 350px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_controller_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_controller_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_video_file') == true)) || 
				((player.getVariableValue('vis_phone_video_url') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_controller_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_controller_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_controller_phone.style.transition='';
				if (me._video_controller_phone.ggCurrentLogicStateVisible == 0) {
					me._video_controller_phone.style.visibility=(Number(me._video_controller_phone.style.opacity)>0||!me._video_controller_phone.style.opacity)?'inherit':'hidden';
					me._video_controller_phone.ggVisible=true;
				}
				else {
					me._video_controller_phone.style.visibility="hidden";
					me._video_controller_phone.ggVisible=false;
				}
			}
		}
		me._video_controller_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._video_controller_seekbar_phone=document.createElement('div');
		me._video_controller_seekbar_phone__playhead=document.createElement('div');
		me._video_controller_seekbar_phone.mediaEl = null;
		me._video_controller_seekbar_phone.fromBufferSource = false;
		me._video_controller_seekbar_phone.ggMediaId = '';
		el.ggId="video_controller_seekbar_phone";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_seekbar ";
		el.ggType='seekbar';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 10px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((10px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 40px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_controller_seekbar_phone.mouseTouchHandling = function(e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type=='touchstart') {
				if (me._video_controller_seekbar_phone.mediaEl != null) {
					if (e.target == me._video_controller_seekbar_phone) {
						let mouseX;
						if (e.type=='touchstart') {
							let rect = e.target.getBoundingClientRect();
							mouseX = e.targetTouches[0].pageX - rect.left;
						} else {
							mouseX = e.offsetX;
						}
						if (me._video_controller_seekbar_phone.fromBufferSource) {
							let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.bufferSoundDuration();
							me._video_controller_seekbar_phone.mediaEl.bufferSoundSetDragTime(seekpos);
						} else {
							let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.duration;
							if(!isNaN(seekpos)) me._video_controller_seekbar_phone.mediaEl.currentTime = seekpos;
						}
					}
					if (e.target == me._video_controller_seekbar_phone || e.target == me._video_controller_seekbar_phone__playhead) {
						document.onmousemove = document.ontouchmove = function(e) {
							let mouseX = e.pageX - me._video_controller_seekbar_phone.getBoundingClientRect().x;
							if (me._video_controller_seekbar_phone.fromBufferSource) {
								let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.bufferSoundDuration();
								me._video_controller_seekbar_phone.mediaEl.bufferSoundSetDragTime(seekpos);
							} else {
								let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.duration;
								if(!isNaN(seekpos)) me._video_controller_seekbar_phone.mediaEl.currentTime = seekpos;
							}
						}
						document.onmouseup = document.ontouchend = function(e) {
							let mouseX = e.pageX - me._video_controller_seekbar_phone.getBoundingClientRect().x;
							if (me._video_controller_seekbar_phone.fromBufferSource) {
								let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.bufferSoundDuration();
								me._video_controller_seekbar_phone.mediaEl.bufferSoundSetTime(seekpos);
							} else {
								let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.duration;
								if(!isNaN(seekpos)) me._video_controller_seekbar_phone.mediaEl.currentTime = seekpos;
							}
							document.onmousemove = document.ontouchmove = null;
							document.onmouseup = document.ontouchend = null;
						}
					}
				}
			}
		}
		me._video_controller_seekbar_phone.onmousedown = me._video_controller_seekbar_phone.ontouchstart = me._video_controller_seekbar_phone.mouseTouchHandling;
		me._video_controller_seekbar_phone.ggConnectToMediaEl = function() {
			var disableSeekbar = function() {
				me._video_controller_seekbar_phone__playhead.style.visibility = 'hidden';
				me._video_controller_seekbar_phone.style.background = 'rgba(0,0,0,0)';
				me._video_controller_seekbar_phone.ggConnected = false;
			}
			if (me._video_controller_seekbar_phone.mediaEl != null) {
				if (me._video_controller_seekbar_phone.fromBufferSource) {
					player.removeEventListener('bufferSoundTimeupdate', me._video_controller_seekbar_phone.updatePlayback);
					if (me._video_controller_seekbar_phone.ggActivate) {
						player.removeEventListener('bufferSoundPlay', me._video_controller_seekbar_phone.bufferSoundActivate);
					}
					if (me._video_controller_seekbar_phone.ggDeactivate) {
						player.removeEventListener('bufferSoundPause', me._video_controller_seekbar_phone.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundStop', me._video_controller_seekbar_phone.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundEnded', me._video_controller_seekbar_phone.bufferSoundDeactivate);
					}
					if (me._video_controller_seekbar_phone.ggMediaEnded) {
						player.removeEventListener('bufferSoundEnded', me._video_controller_seekbar_phone.bufferSoundMediaEnded);
					}
				} else {
					me._video_controller_seekbar_phone.mediaEl.removeEventListener('progress', me._video_controller_seekbar_phone.updatePlayback);
					me._video_controller_seekbar_phone.mediaEl.removeEventListener('canplay', me._video_controller_seekbar_phone.updatePlayback);
					me._video_controller_seekbar_phone.mediaEl.removeEventListener('timeupdate', me._video_controller_seekbar_phone.updatePlayback);
					if (me._video_controller_seekbar_phone.ggActivate) {
						me._video_controller_seekbar_phone.mediaEl.removeEventListener('play', me._video_controller_seekbar_phone.ggActivate);
					}
					if (me._video_controller_seekbar_phone.ggDeactivate) {
						me._video_controller_seekbar_phone.mediaEl.removeEventListener('ended', me._video_controller_seekbar_phone.ggDeactivate);
						me._video_controller_seekbar_phone.mediaEl.removeEventListener('pause', me._video_controller_seekbar_phone.ggDeactivate);
					}
					if (me._video_controller_seekbar_phone.ggMediaEnded) {
						me._video_controller_seekbar_phone.mediaEl.removeEventListener('ended', me._video_controller_seekbar_phone.ggMediaEnded);
					}
				}
			}
			me._video_controller_seekbar_phone.mediaEl = player.getMediaObject(me._video_controller_seekbar_phone.ggMediaId);
			if (me._video_controller_seekbar_phone.mediaEl) {
				me._video_controller_seekbar_phone.fromBufferSource = false;
			} else {
				me._video_controller_seekbar_phone.mediaEl = player.getMediaBufferSourceObject('');
				me._video_controller_seekbar_phone.fromBufferSource = true;
			}
			if (me._video_controller_seekbar_phone.mediaEl != null) {
				me._video_controller_seekbar_phone__playhead.style.visibility = 'inherit';
				me._video_controller_seekbar_phone__playhead.style.left = '-9px';
				if (me._video_controller_seekbar_phone.fromBufferSource) {
					player.addListener('bufferSoundTimeupdate', me._video_controller_seekbar_phone.updatePlayback);
					if (me._video_controller_seekbar_phone.ggActivate) {
						me._video_controller_seekbar_phone.bufferSoundActivate = function(args) { if (args['id'] == me._video_controller_seekbar_phone.mediaEl.id) me._video_controller_seekbar_phone.ggActivate(); };
						player.addListener('bufferSoundPlay', me._video_controller_seekbar_phone.bufferSoundActivate);
					}
					if (me._video_controller_seekbar_phone.ggDeactivate) {
						me._video_controller_seekbar_phone.bufferSoundDeactivate = function(args) { if (args['id'] == me._video_controller_seekbar_phone.mediaEl.id) me._video_controller_seekbar_phone.ggDeactivate(); };
						player.addListener('bufferSoundPause', me._video_controller_seekbar_phone.bufferSoundDeactivate);
						player.addListener('bufferSoundStop', me._video_controller_seekbar_phone.bufferSoundDeactivate);
						player.addListener('bufferSoundEnded', me._video_controller_seekbar_phone.bufferSoundDeactivate);
					}
					if (me._video_controller_seekbar_phone.ggMediaEnded) {
						me._video_controller_seekbar_phone.bufferSoundMediaEnded = function(args) { if (args['id'] == me._video_controller_seekbar_phone.mediaEl.id) me._video_controller_seekbar_phone.ggMediaEnded(); };
						player.addListener('bufferSoundEnded', me._video_controller_seekbar_phone.bufferSoundMediaEnded);
					}
				} else {
					me._video_controller_seekbar_phone.mediaEl.addEventListener('progress', me._video_controller_seekbar_phone.updatePlayback);
					me._video_controller_seekbar_phone.mediaEl.addEventListener('canplay', me._video_controller_seekbar_phone.updatePlayback);
					me._video_controller_seekbar_phone.mediaEl.addEventListener('timeupdate', me._video_controller_seekbar_phone.updatePlayback);
					if (me._video_controller_seekbar_phone.ggActivate) {
						me._video_controller_seekbar_phone.mediaEl.addEventListener('play', me._video_controller_seekbar_phone.ggActivate);
					}
					if (me._video_controller_seekbar_phone.ggDeactivate) {
						me._video_controller_seekbar_phone.mediaEl.addEventListener('ended', me._video_controller_seekbar_phone.ggDeactivate);
						me._video_controller_seekbar_phone.mediaEl.addEventListener('pause', me._video_controller_seekbar_phone.ggDeactivate);
					}
					if (me._video_controller_seekbar_phone.ggMediaEnded) {
						me._video_controller_seekbar_phone.mediaEl.addEventListener('ended', me._video_controller_seekbar_phone.ggMediaEnded);
					}
				}
				me._video_controller_seekbar_phone.ggConnected = true;
			} else {
				disableSeekbar();
			}
			var videoEl = me.findElements(me._video_controller_seekbar_phone.ggMediaId);
			if (videoEl.length > 0 && !videoEl[0].hasChildNodes()) {
				disableSeekbar();
			}
		}
		me._video_controller_seekbar_phone.updatePlayback = function(args) {
			if (!me._video_controller_seekbar_phone.ggConnected) return;
			if (me._video_controller_seekbar_phone.mediaEl != null) {
				if (me._video_controller_seekbar_phone.mediaEl.readyState || (me._video_controller_seekbar_phone.fromBufferSource && args && args['id'] == me._video_controller_seekbar_phone.mediaEl.id)) {
					if (me._video_controller_seekbar_phone.fromBufferSource) {
						var percent = me._video_controller_seekbar_phone.mediaEl.bufferSoundCurrentTime() / me._video_controller_seekbar_phone.mediaEl.bufferSoundDuration();
					} else {
						var percent = me._video_controller_seekbar_phone.mediaEl.currentTime / me._video_controller_seekbar_phone.mediaEl.duration;
					}
					percent = Math.min(percent, 1.0);
					var playheadpos = Math.round((me._video_controller_seekbar_phone.clientWidth - 2 * 4 + 0) * percent);
					playheadpos += -9;
					me._video_controller_seekbar_phone__playhead.style.left = playheadpos.toString() + 'px';
					var offsetPercent = Math.round(100.0 * (4 / me._video_controller_seekbar_phone.clientWidth));
					var currPos = offsetPercent + Math.round(percent * (100 - 2 * offsetPercent));
					var gradientString ='linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) ' + currPos + '%';
					if (me._video_controller_seekbar_phone.fromBufferSource) {
						gradientString += ', rgba(0,0,0,0.392157) ' + currPos +'%, rgba(0,0,0,0.392157) 100%';
					} else {
						for (var i = 0; i < me._video_controller_seekbar_phone.mediaEl.buffered.length; i++) {
							var rangeStart = Math.round((me._video_controller_seekbar_phone.mediaEl.buffered.start(i) / me._video_controller_seekbar_phone.mediaEl.duration) * 100.0);
							var rangeEnd = Math.ceil((me._video_controller_seekbar_phone.mediaEl.buffered.end(i) / me._video_controller_seekbar_phone.mediaEl.duration) * 100.0);
							if (rangeEnd > currPos) {
								if (rangeStart < currPos) {
									gradientString += ', rgba(0,0,0,0.392157) ' + currPos + '%';
								} else {
									gradientString += ', rgba(0,0,0,0) ' + currPos + '%, rgba(0,0,0,0) ' + rangeStart + '%';
									gradientString += ', rgba(0,0,0,0.392157) ' + rangeStart + '%';
								}
									gradientString += ', rgba(0,0,0,0.392157) ' + rangeEnd + '%';
								currPos = rangeEnd;
							}
						}
						if (currPos < 100) {
							gradientString += ', rgba(0,0,0,0) ' + currPos + '%';
						}
					}
					gradientString += ')';
					me._video_controller_seekbar_phone.style.background = gradientString;
				}
			}
		}
		me._video_controller_seekbar_phone.appendChild(me._video_controller_seekbar_phone__playhead);
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 4px;';
		var hs_playhead = 'height: 25px;';
		hs_playhead += 'width: 25px;';
		hs_playhead += 'border: 0px;';
		hs_playhead += 'position: absolute;';
		hs_playhead += 'left: -9px;';
		hs_playhead += 'top: -7.5px;';
		hs_playhead += 'border-radius: 13px;';
		hs_playhead += cssPrefix + 'border-radius: 13px;';
		hs_playhead += 'background-color: rgba(223,224,54,1);';
		me._video_controller_seekbar_phone.setAttribute('style', hs);
		me._video_controller_seekbar_phone__playhead.setAttribute('style', hs_playhead);
		me._video_controller_seekbar_phone.ggIsActive=function() {
			if (me._video_controller_seekbar_phone.mediaEl != null) {
				return (me._video_controller_seekbar_phone.mediaEl.paused == false && me._video_controller_seekbar_phone.mediaEl.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_controller_seekbar_phone.ggActivate=function () {
			me._video_controller_button_pause_phone.style.transition='none';
			me._video_controller_button_pause_phone.style.visibility=(Number(me._video_controller_button_pause_phone.style.opacity)>0||!me._video_controller_button_pause_phone.style.opacity)?'inherit':'hidden';
			me._video_controller_button_pause_phone.ggVisible=true;
			me._video_controller_button_play_phone.style.transition='none';
			me._video_controller_button_play_phone.style.visibility='hidden';
			me._video_controller_button_play_phone.ggVisible=false;
		}
		me._video_controller_seekbar_phone.ggDeactivate=function () {
			me._video_controller_button_play_phone.style.transition='none';
			me._video_controller_button_play_phone.style.visibility=(Number(me._video_controller_button_play_phone.style.opacity)>0||!me._video_controller_button_play_phone.style.opacity)?'inherit':'hidden';
			me._video_controller_button_play_phone.ggVisible=true;
			me._video_controller_button_pause_phone.style.transition='none';
			me._video_controller_button_pause_phone.style.visibility='hidden';
			me._video_controller_button_pause_phone.ggVisible=false;
		}
		me._video_controller_seekbar_phone.ggUpdatePosition=function (useTransition) {
			me._video_controller_seekbar_phone.updatePlayback();
		}
		me._video_controller_phone.appendChild(me._video_controller_seekbar_phone);
		el=me._video_controller_button_pause_phone=document.createElement('div');
		els=me._video_controller_button_pause_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiBoZWlnaHQ9IjE4cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE4cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJNOCAxOWMxLjEgMCAyLS45IDItMlY3YzAtMS4xLS45LTItMi0ycy0yIC45LTIgMnYxMGMwIDEuMS45IDIgMiAyem02LTEydjEwYzAgMS4xLjkgMiAyIDJzMi0uOSAyLTJWN2MwLTEuMS0uOS0yLTItMnMtMiAuOS0yIDJ6Ii8+Cjwvc3ZnPgo=';
		me._video_controller_button_pause_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._video_controller_button_pause_phone__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOCAxODsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE4IDE4IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I2RmZTAzNjt9JiN4ZDsKPC9zdHlsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02LDE0LjJjMC44LDAsMS41LTAuNywxLjUtMS41VjUuMmMwLTAuOC0wLjctMS41LTEuNS0xLjVTNC41LDQuNCw0LjUsNS4ydjcuNUM0LjUsMTMuNiw1LjIsMTQuMiw2LDE0LjJ6JiN4ZDsmI3hhOyYjeDk7IE0xMC41LDUuMnY3LjVjMCwwLjgsMC43LDEuNSwxLjUsMS41czEuNS0wLjcsMS41LTEuNVY1LjJjMC0wLjgtMC43LTEuNS0xLjUtMS41UzEwLjUsNC40LDEwLjUsNS4yeiIvPgo8L3N2Zz4K';
		me._video_controller_button_pause_phone__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="video_controller_button_pause_phone";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_controller_button_pause_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_controller_button_pause_phone.onclick=function (e) {
			if (
				(
					((player.getVariableValue('vis_phone_video_file') == true))
				)
			) {
				if (me._video_file_popup_phone.ggApiPlayer) {
					if (me._video_file_popup_phone.ggApiPlayerType == 'youtube') {
						let youtubeMediaFunction = function() {
							me._video_file_popup_phone.ggApiPlayer.pauseVideo();
						};
						if (me._video_file_popup_phone.ggApiPlayerReady) {
							youtubeMediaFunction();
						} else {
							let youtubeApiInterval = setInterval(function() {
								if (me._video_file_popup_phone.ggApiPlayerReady) {
									clearInterval(youtubeApiInterval);
									youtubeMediaFunction();
								}
							}, 100);
						}
					} else if (me._video_file_popup_phone.ggApiPlayerType == 'vimeo') {
						me._video_file_popup_phone.ggApiPlayer.pause();
					}
				} else {
					player.pauseSound("video_file_popup_phone");
				}
			}
			if (
				(
					((player.getVariableValue('vis_phone_video_url') == true))
				)
			) {
				if (me._video_url_popup_phone.ggApiPlayer) {
					if (me._video_url_popup_phone.ggApiPlayerType == 'youtube') {
						let youtubeMediaFunction = function() {
							me._video_url_popup_phone.ggApiPlayer.pauseVideo();
						};
						if (me._video_url_popup_phone.ggApiPlayerReady) {
							youtubeMediaFunction();
						} else {
							let youtubeApiInterval = setInterval(function() {
								if (me._video_url_popup_phone.ggApiPlayerReady) {
									clearInterval(youtubeApiInterval);
									youtubeMediaFunction();
								}
							}, 100);
						}
					} else if (me._video_url_popup_phone.ggApiPlayerType == 'vimeo') {
						me._video_url_popup_phone.ggApiPlayer.pause();
					}
				} else {
					player.pauseSound("video_url_popup_phone");
				}
			}
			me._video_controller_button_pause_phone.style.transition='none';
			me._video_controller_button_pause_phone.style.visibility='hidden';
			me._video_controller_button_pause_phone.ggVisible=false;
			me._video_controller_button_play_phone.style.transition='none';
			me._video_controller_button_play_phone.style.visibility=(Number(me._video_controller_button_play_phone.style.opacity)>0||!me._video_controller_button_play_phone.style.opacity)?'inherit':'hidden';
			me._video_controller_button_play_phone.ggVisible=true;
		}
		me._video_controller_button_pause_phone.onmouseenter=function (e) {
			me._video_controller_button_pause_phone__img.style.visibility='hidden';
			me._video_controller_button_pause_phone__imgo.style.visibility='inherit';
			me.elementMouseOver['video_controller_button_pause_phone']=true;
		}
		me._video_controller_button_pause_phone.onmouseleave=function (e) {
			me._video_controller_button_pause_phone__img.style.visibility='inherit';
			me._video_controller_button_pause_phone__imgo.style.visibility='hidden';
			me.elementMouseOver['video_controller_button_pause_phone']=false;
		}
		me._video_controller_button_pause_phone.ggUpdatePosition=function (useTransition) {
		}
		me._video_controller_phone.appendChild(me._video_controller_button_pause_phone);
		el=me._video_controller_button_play_phone=document.createElement('div');
		els=me._video_controller_button_play_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiBoZWlnaHQ9IjE4cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE4cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJNOCA2LjgydjEwLjM2YzAgLjc5Ljg3IDEuMjcgMS41NC44NGw4LjE0LTUuMThjLjYyLS4zOS42Mi0xLjI5IDAtMS42OUw5LjU0IDUuOThDOC44NyA1LjU1IDggNi4wMyA4IDYuODJ6Ii8+Cjwvc3ZnPgo=';
		me._video_controller_button_play_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._video_controller_button_play_phone__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOCAxODsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE4IDE4IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I2RmZTAzNjt9JiN4ZDsKPC9zdHlsZT4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik02LDUuMXY3LjhjMCwwLjYsMC43LDEsMS4yLDAuNmw2LjEtMy45YzAuNS0wLjMsMC41LTEsMC0xLjNMNy4yLDQuNUM2LjcsNC4yLDYsNC41LDYsNS4xeiIvPgo8L3N2Zz4K';
		me._video_controller_button_play_phone__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="video_controller_button_play_phone";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_controller_button_play_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_controller_button_play_phone.onclick=function (e) {
			if (
				(
					((player.getVariableValue('vis_phone_video_file') == true))
				)
			) {
				if (me._video_file_popup_phone.ggApiPlayer) {
					if (me._video_file_popup_phone.ggApiPlayerType == 'youtube') {
						let youtubeMediaFunction = function() {
							me._video_file_popup_phone.ggApiPlayer.playVideo();
						};
						if (me._video_file_popup_phone.ggApiPlayerReady) {
							youtubeMediaFunction();
						} else {
							let youtubeApiInterval = setInterval(function() {
								if (me._video_file_popup_phone.ggApiPlayerReady) {
									clearInterval(youtubeApiInterval);
									youtubeMediaFunction();
								}
							}, 100);
						}
					} else if (me._video_file_popup_phone.ggApiPlayerType == 'vimeo') {
						me._video_file_popup_phone.ggApiPlayer.play();
					}
				} else {
					player.playSound("video_file_popup_phone","1");
				}
			}
			if (
				(
					((player.getVariableValue('vis_phone_video_url') == true))
				)
			) {
				if (me._video_url_popup_phone.ggApiPlayer) {
					if (me._video_url_popup_phone.ggApiPlayerType == 'youtube') {
						let youtubeMediaFunction = function() {
							me._video_url_popup_phone.ggApiPlayer.playVideo();
						};
						if (me._video_url_popup_phone.ggApiPlayerReady) {
							youtubeMediaFunction();
						} else {
							let youtubeApiInterval = setInterval(function() {
								if (me._video_url_popup_phone.ggApiPlayerReady) {
									clearInterval(youtubeApiInterval);
									youtubeMediaFunction();
								}
							}, 100);
						}
					} else if (me._video_url_popup_phone.ggApiPlayerType == 'vimeo') {
						me._video_url_popup_phone.ggApiPlayer.play();
					}
				} else {
					player.playSound("video_url_popup_phone","1");
				}
			}
			me._video_controller_button_play_phone.style.transition='none';
			me._video_controller_button_play_phone.style.visibility='hidden';
			me._video_controller_button_play_phone.ggVisible=false;
			me._video_controller_button_pause_phone.style.transition='none';
			me._video_controller_button_pause_phone.style.visibility=(Number(me._video_controller_button_pause_phone.style.opacity)>0||!me._video_controller_button_pause_phone.style.opacity)?'inherit':'hidden';
			me._video_controller_button_pause_phone.ggVisible=true;
		}
		me._video_controller_button_play_phone.onmouseenter=function (e) {
			me._video_controller_button_play_phone__img.style.visibility='hidden';
			me._video_controller_button_play_phone__imgo.style.visibility='inherit';
			me.elementMouseOver['video_controller_button_play_phone']=true;
		}
		me._video_controller_button_play_phone.onmouseleave=function (e) {
			me._video_controller_button_play_phone__img.style.visibility='inherit';
			me._video_controller_button_play_phone__imgo.style.visibility='hidden';
			me.elementMouseOver['video_controller_button_play_phone']=false;
		}
		me._video_controller_button_play_phone.ggUpdatePosition=function (useTransition) {
		}
		me._video_controller_phone.appendChild(me._video_controller_button_play_phone);
		me._safe_area_phone.appendChild(me._video_controller_phone);
		me._screentint_phone.appendChild(me._safe_area_phone);
		me.divSkin.appendChild(me._screentint_phone);
		el=me._model_load_spinner=document.createElement('div');
		els=me._model_load_spinner__img=document.createElement('img');
		els.className='ggskin ggskin_model_load_spinner';
		hs=basePath + 'images/model_load_spinner.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="model_load_spinner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		el.userData=el;
		hs ='';
		hs+='bottom : 20px;';
		hs+='height : 100px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._model_load_spinner.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._model_load_spinner.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._model_load_spinner.ggCurrentLogicStateSize != newLogicStateSize) {
				me._model_load_spinner.ggCurrentLogicStateSize = newLogicStateSize;
				me._model_load_spinner.style.transition='width 0s, height 0s';
				if (me._model_load_spinner.ggCurrentLogicStateSize == 0) {
					me._model_load_spinner.style.width='75px';
					me._model_load_spinner.style.height='75px';
					skin.updateSize(me._model_load_spinner);
				}
				else {
					me._model_load_spinner.style.width='100px';
					me._model_load_spinner.style.height='100px';
					skin.updateSize(me._model_load_spinner);
				}
			}
		}
		me._model_load_spinner.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('model_loading') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._model_load_spinner.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._model_load_spinner.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._model_load_spinner.style.transition='width 0s, height 0s';
				if (me._model_load_spinner.ggCurrentLogicStateVisible == 0) {
					me._model_load_spinner.style.visibility=(Number(me._model_load_spinner.style.opacity)>0||!me._model_load_spinner.style.opacity)?'inherit':'hidden';
					me._model_load_spinner.ggVisible=true;
				}
				else {
					me._model_load_spinner.style.visibility="hidden";
					me._model_load_spinner.ggVisible=false;
				}
			}
		}
		me._model_load_spinner.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._model_load_spinner);
		el=me._local_fonts=document.createElement('div');
		el.ggId="local_fonts";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_code ";
		el.ggType='code';
		el.userData=el;
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._local_fonts.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._local_fonts.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._local_fonts);
		me._menu_bg_safe_area.logicBlock_size();
		me._menu_bg_safe_area.logicBlock_visible();
		me._menu_bg_safe_area.logicBlock_alpha();
		me._menu.logicBlock_size();
		me._menu.logicBlock_visible();
		me._menu.logicBlock_alpha();
		me.elementMouseOver['languages']=false;
		me._languages.logicBlock_position();
		me._languages.logicBlock_alpha();
		me._hotspots_toggle.logicBlock_position();
		me._hotspots_toggle.logicBlock_alpha();
		me.elementMouseOver['hotspots_on']=false;
		me._hotspots_on.logicBlock_visible();
		me.elementMouseOver['hotspots_off']=false;
		me._hotspots_off.logicBlock_visible();
		me._gyro_toggle.logicBlock_position();
		me._gyro_toggle.logicBlock_alpha();
		me.elementMouseOver['gyro_on']=false;
		me._gyro_on.logicBlock_visible();
		me.elementMouseOver['gyro_off']=false;
		me._gyro_off.logicBlock_visible();
		me.elementMouseOver['vr']=false;
		me._vr.logicBlock_position();
		me._vr.logicBlock_alpha();
		me._audio_toggle.logicBlock_position();
		me._audio_toggle.logicBlock_alpha();
		me.elementMouseOver['audio_on']=false;
		me._audio_on.logicBlock_visible();
		me.elementMouseOver['audio_off']=false;
		me._audio_off.logicBlock_visible();
		me._fullscreen_toggle.logicBlock_alpha();
		me.elementMouseOver['fullscreen_exit']=false;
		me._fullscreen_exit.logicBlock_visible();
		me.elementMouseOver['fullscreen_enter']=false;
		me._fullscreen_enter.logicBlock_visible();
		me._menu_toggle_bg.logicBlock_visible();
		me.elementMouseOver['menu_close_anim']=false;
		me._menu_toggle_off_active.logicBlock_visible();
		me.elementMouseOver['menu_open_anim']=false;
		me._menu_toggle_on_active.logicBlock_visible();
		me._menu_toggle_timer.logicBlock_visible();
		me._menu_toggle_bg_safe_area.logicBlock_visible();
		me._node_title_phone.logicBlock_position();
		me._node_title_phone.logicBlock_visible();
		me._project_title_phone.logicBlock_visible();
		me._node_title.logicBlock_position();
		me._node_title.logicBlock_visible();
		me._project_title.logicBlock_visible();
		me._thumbnail_menu.logicBlock_visible();
		me._thumbnail_menu.logicBlock_alpha();
		me.elementMouseOver['thumbnail_scroller_fwd']=false;
		me.elementMouseOver['thumbnail_scroller_bwd']=false;
		me._thumbnail_menu_toggle_phone.logicBlock_visible();
		me._thumbnail_menu_toggle_phone.logicBlock_alpha();
		me.elementMouseOver['thumbnail_menu_toggle_btn']=false;
		me._screen_tint.logicBlock_visible();
		me.elementMouseOver['screen_tint_close']=false;
		me._languages_popup.logicBlock_visible();
		me._video_popup.logicBlock_visible();
		me._video_popup_vimeo.ggVideoSource = '';
		me._video_popup_vimeo.ggVideoNotLoaded = true;
		me._video_popup_vimeo.logicBlock_visible();
		me._video_popup_youtube.ggVideoSource = '';
		me._video_popup_youtube.ggVideoNotLoaded = true;
		me._video_popup_youtube.logicBlock_visible();
		me._video_popup_url_controller.logicBlock_visible();
		me.elementMouseOver['video_popup_url_controller_button_pause']=false;
		me.elementMouseOver['video_popup_url_controller_button_play']=false;
		me._video_popup_url.ggVideoSource = '';
		me._video_popup_url.ggVideoNotLoaded = true;
		me._video_popup_url.logicBlock_visible();
		me._video_popup_file_controller.logicBlock_visible();
		me.elementMouseOver['video_popup_file_controller_button_pause']=false;
		me.elementMouseOver['video_popup_file_controller_button_play']=false;
		me._video_popup_file.ggVideoSource = 'media/';
		me._video_popup_file.ggVideoNotLoaded = true;
		me._video_popup_file.logicBlock_visible();
		me._sounds_splashscreen.logicBlock_visible();
		me.elementMouseOver['sounds_off']=false;
		me.elementMouseOver['sounds_on']=false;
		me._screentint_phone.logicBlock_visible();
		me.elementMouseOver['btn_close_popup_phone']=false;
		me._thumbnail_scroller_phone.logicBlock_visible();
		me._info_popup_phone.logicBlock_visible();
		me._video_controller_phone.logicBlock_visible();
		me.elementMouseOver['video_controller_button_pause_phone']=false;
		me.elementMouseOver['video_controller_button_play_phone']=false;
		pano.on("modelloadstarted", () => { pano.setVariableValue("model_loading", true); });
pano.on("modelloaded", () => { pano.setVariableValue("model_loading", false); });
		me._model_load_spinner.logicBlock_size();
		me._model_load_spinner.logicBlock_visible();
		el = me._local_fonts;
		;
		player.addListener('activehotspotchanged', function(event) {
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_node'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_node'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node__3d')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_node__3d'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_node__3d'][i].ggEvent_activehotspotchanged();
				}
			}
			me._node_title_phone.logicBlock_position();
			me._node_title.logicBlock_position();
		});
		player.addListener('changenode', function(event) {
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_node'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_node'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node__3d')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_node__3d'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_node__3d'][i].ggEvent_changenode();
				}
			}
			me._variable_vis_sounds_splashscreen.logicBlock();
			me._variable_vis_skin.logicBlock();
			me._menu_bg_safe_area.logicBlock_size();
			me._menu_bg_safe_area.logicBlock_visible();
			me._menu_bg_safe_area.logicBlock_alpha();
			me._menu.logicBlock_size();
			me._menu.logicBlock_visible();
			me._menu.logicBlock_alpha();
			me._languages.logicBlock_position();
			me._hotspots_toggle.logicBlock_position();
			me._hotspots_toggle.logicBlock_alpha();
			me._hotspots_on.logicBlock_visible();
			me._hotspots_off.logicBlock_visible();
			me._gyro_toggle.logicBlock_position();
			me._gyro_toggle.logicBlock_alpha();
			me._gyro_on.logicBlock_visible();
			me._gyro_off.logicBlock_visible();
			me._vr.logicBlock_position();
			me._audio_toggle.logicBlock_position();
			me._audio_on.logicBlock_visible();
			me._audio_off.logicBlock_visible();
			me._fullscreen_toggle.logicBlock_alpha();
			me._menu_toggle_bg.logicBlock_visible();
			me._menu_toggle_off_active.logicBlock_visible();
			me._menu_toggle_on_active.logicBlock_visible();
			me._menu_toggle_timer.logicBlock_visible();
			me._menu_toggle_bg_safe_area.logicBlock_visible();
			me._node_title_phone.logicBlock_position();
			me._node_title_phone.logicBlock_visible();
			me._project_title_phone.logicBlock_visible();
			me._node_title.logicBlock_position();
			me._node_title.logicBlock_visible();
			me._project_title.logicBlock_visible();
			me._thumbnail_menu.logicBlock_visible();
			me._thumbnail_menu.logicBlock_alpha();
			me._thumbnail_cloner.ggUpdateConditionNodeChange();
			me._thumbnail_menu_toggle_phone.logicBlock_visible();
			me._thumbnail_menu_toggle_phone.logicBlock_alpha();
			me._screen_tint.logicBlock_visible();
			me._languages_popup.logicBlock_visible();
			me._languages_cloner.ggUpdateConditionNodeChange();
			me._video_popup.logicBlock_visible();
			me._video_popup_vimeo.logicBlock_visible();
			me._video_popup_youtube.logicBlock_visible();
			me._video_popup_url_controller.logicBlock_visible();
			me._video_popup_url_controller_seekbar.ggConnectToMediaEl();
			me._video_popup_url.logicBlock_visible();
			me._video_popup_file_controller.logicBlock_visible();
			me._video_popup_file_controller_seekbar.ggConnectToMediaEl();
			me._video_popup_file.logicBlock_visible();
			me._sounds_splashscreen.logicBlock_visible();
			me._screentint_phone.logicBlock_visible();
			me._thumbnail_scroller_phone.logicBlock_visible();
			me._node_cloner_phone.ggUpdateConditionNodeChange();
			me._info_popup_phone.logicBlock_visible();
			me._video_controller_phone.logicBlock_visible();
			me._video_controller_seekbar_phone.ggConnectToMediaEl();
			me._model_load_spinner.logicBlock_size();
			me._model_load_spinner.logicBlock_visible();
		});
		player.addListener('configloaded', function(event) {
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_node'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_node'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node__3d')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_node__3d'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_node__3d'][i].ggEvent_configloaded();
				}
			}
			me._variable_vis_sounds_splashscreen.logicBlock();
			me._variable_vis_skin.logicBlock();
			me._variable_has_fullscreen.logicBlock();
			me._menu_bg_safe_area.logicBlock_size();
			me._menu_bg_safe_area.logicBlock_visible();
			me._menu_bg_safe_area.logicBlock_alpha();
			me._menu.logicBlock_size();
			me._menu.logicBlock_visible();
			me._menu.logicBlock_alpha();
			me._languages.logicBlock_position();
			me._languages.logicBlock_alpha();
			me._hotspots_toggle.logicBlock_position();
			me._hotspots_toggle.logicBlock_alpha();
			me._hotspots_on.logicBlock_visible();
			me._hotspots_off.logicBlock_visible();
			me._gyro_toggle.logicBlock_position();
			me._gyro_toggle.logicBlock_alpha();
			me._vr.logicBlock_position();
			me._audio_toggle.logicBlock_position();
			me._audio_toggle.logicBlock_alpha();
			me._audio_on.logicBlock_visible();
			me._audio_off.logicBlock_visible();
			me._fullscreen_toggle.logicBlock_alpha();
			me._menu_toggle_bg.logicBlock_visible();
			me._menu_toggle_off_active.logicBlock_visible();
			me._menu_toggle_on_active.logicBlock_visible();
			me._menu_toggle_bg_safe_area.logicBlock_visible();
			me._node_title_phone.logicBlock_position();
			me._node_title_phone.logicBlock_visible();
			me._project_title_phone.logicBlock_visible();
			me._node_title.logicBlock_position();
			me._node_title.logicBlock_visible();
			me._project_title.logicBlock_visible();
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_menu', false);
			}
			me._thumbnail_menu.logicBlock_visible();
			me._thumbnail_menu.logicBlock_alpha();
			me._thumbnail_scroller.ggUpdatePosition();
			me._thumbnail_menu_toggle_phone.logicBlock_visible();
			me._thumbnail_menu_toggle_phone.logicBlock_alpha();
			me._screen_tint.logicBlock_visible();
			me._languages_popup.ggUpdatePosition();
			me._languages_popup.logicBlock_visible();
			me._languages_cloner.ggTranslations = player.getProjectTranslations();
			me._languages_cloner.ggUpdate();
			me._video_popup.logicBlock_visible();
			me._video_popup_vimeo.logicBlock_visible();
			me._video_popup_youtube.logicBlock_visible();
			me._video_popup_url_controller.logicBlock_visible();
			me._video_popup_url.logicBlock_visible();
			me._video_popup_file_controller.logicBlock_visible();
			me._video_popup_file.logicBlock_visible();
			me._sounds_splashscreen.logicBlock_visible();
			me._screentint_phone.logicBlock_visible();
			me._thumbnail_scroller_phone.ggUpdatePosition();
			me._thumbnail_scroller_phone.logicBlock_visible();
			me._info_popup_phone.logicBlock_visible();
			me._video_controller_phone.logicBlock_visible();
			me._model_load_spinner.logicBlock_size();
			me._model_load_spinner.logicBlock_visible();
		});
		player.addListener('fullscreenenter', function(event) {
			me._fullscreen_exit.logicBlock_visible();
			me._fullscreen_enter.logicBlock_visible();
		});
		player.addListener('fullscreenexit', function(event) {
			me._fullscreen_exit.logicBlock_visible();
			me._fullscreen_enter.logicBlock_visible();
		});
		player.addListener('gyroavailable', function(event) {
			me._menu_bg_safe_area.logicBlock_size();
			me._menu.logicBlock_size();
			me._languages.logicBlock_position();
			me._hotspots_toggle.logicBlock_position();
			me._gyro_toggle.logicBlock_alpha();
		});
		player.addListener('gyrochanged', function(event) {
			me._gyro_on.logicBlock_visible();
			me._gyro_off.logicBlock_visible();
		});
		player.addListener('sizechanged', function(event) {
			me._variable_resp_desktop.logicBlock();
			me._variable_resp_tablet.logicBlock();
			me._variable_resp_phone.logicBlock();
		});
		player.addListener('soundspermittedchanged', function(event) {
			me._variable_vis_sounds_splashscreen.logicBlock();
		});
		player.addListener('varchanged_has_fullscreen', function(event) {
			me._menu_bg_safe_area.logicBlock_size();
			me._menu.logicBlock_size();
			me._languages.logicBlock_position();
			me._hotspots_toggle.logicBlock_position();
			me._gyro_toggle.logicBlock_position();
			me._vr.logicBlock_position();
			me._audio_toggle.logicBlock_position();
			me._fullscreen_toggle.logicBlock_alpha();
		});
		player.addListener('varchanged_hide_lottie_index', function(event) {
			me._menu_toggle_off_active.logicBlock_visible();
			me._menu_toggle_on_active.logicBlock_visible();
		});
		player.addListener('varchanged_model_loading', function(event) {
			me._model_load_spinner.logicBlock_visible();
		});
		player.addListener('varchanged_opt_fullscreen', function(event) {
			me._menu_bg_safe_area.logicBlock_size();
			me._menu.logicBlock_size();
			me._languages.logicBlock_position();
			me._hotspots_toggle.logicBlock_position();
			me._gyro_toggle.logicBlock_position();
			me._vr.logicBlock_position();
			me._audio_toggle.logicBlock_position();
			me._fullscreen_toggle.logicBlock_alpha();
		});
		player.addListener('varchanged_opt_gyro', function(event) {
			me._menu_bg_safe_area.logicBlock_size();
			me._menu.logicBlock_size();
			me._languages.logicBlock_position();
			me._hotspots_toggle.logicBlock_position();
			me._gyro_toggle.logicBlock_alpha();
		});
		player.addListener('varchanged_opt_proj_title', function(event) {
			me._node_title_phone.logicBlock_visible();
			me._project_title_phone.logicBlock_visible();
			me._node_title.logicBlock_visible();
			me._project_title.logicBlock_visible();
		});
		player.addListener('varchanged_resp_phone', function(event) {
			me._node_title_phone.logicBlock_visible();
			me._project_title_phone.logicBlock_visible();
			me._node_title.logicBlock_visible();
			me._project_title.logicBlock_visible();
			me._thumbnail_menu.logicBlock_alpha();
			me._thumbnail_menu_toggle_phone.logicBlock_alpha();
			me._model_load_spinner.logicBlock_size();
		});
		player.addListener('varchanged_sounds_splashscreen_accepted', function(event) {
			me._variable_vis_sounds_splashscreen.logicBlock();
		});
		player.addListener('varchanged_toggle_audio', function(event) {
			me._audio_on.logicBlock_visible();
			me._audio_off.logicBlock_visible();
		});
		player.addListener('varchanged_vis_hotspots', function(event) {
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_node'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_node'][i].ggEvent_varchanged_vis_hotspots();
				}
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node__3d')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_node__3d'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_node__3d'][i].ggEvent_varchanged_vis_hotspots();
				}
			}
			me._hotspots_on.logicBlock_visible();
			me._hotspots_off.logicBlock_visible();
		});
		player.addListener('varchanged_vis_languages', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screen_tint.logicBlock_visible();
			me._languages_popup.logicBlock_visible();
		});
		player.addListener('varchanged_vis_menu', function(event) {
			me._menu_bg_safe_area.logicBlock_alpha();
			me._menu.logicBlock_alpha();
			me._thumbnail_menu.logicBlock_alpha();
			me._thumbnail_menu_toggle_phone.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_pdf_popup', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screen_tint.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_image', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_info', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_visible();
			me._info_popup_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_pdf', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_thumbs', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_visible();
			me._thumbnail_scroller_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_video_file', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_visible();
			me._video_controller_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_video_url', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_visible();
			me._video_controller_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_vimeo', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_youtube', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_skin', function(event) {
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_node'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_node'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node__3d')) {
				for(var i = 0; i < hotspotTemplates['SkinHotspotClass_ht_node__3d'].length; i++) {
					hotspotTemplates['SkinHotspotClass_ht_node__3d'][i].ggEvent_varchanged_vis_skin();
				}
			}
			me._menu_bg_safe_area.logicBlock_visible();
			me._menu.logicBlock_visible();
			me._menu_toggle_bg.logicBlock_visible();
			me._menu_toggle_bg_safe_area.logicBlock_visible();
			me._node_title_phone.logicBlock_visible();
			me._project_title_phone.logicBlock_visible();
			me._node_title.logicBlock_visible();
			me._project_title.logicBlock_visible();
			me._thumbnail_menu.logicBlock_visible();
			me._thumbnail_menu_toggle_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_sounds_splashscreen', function(event) {
			me._variable_vis_skin.logicBlock();
			me._sounds_splashscreen.logicBlock_visible();
		});
		player.addListener('varchanged_vis_url_popup', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screen_tint.logicBlock_visible();
		});
		player.addListener('varchanged_vis_video_popup_file', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screen_tint.logicBlock_visible();
			me._video_popup.logicBlock_visible();
			me._video_popup_file_controller.logicBlock_visible();
			me._video_popup_file.logicBlock_visible();
		});
		player.addListener('varchanged_vis_video_popup_url', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screen_tint.logicBlock_visible();
			me._video_popup.logicBlock_visible();
			me._video_popup_url_controller.logicBlock_visible();
			me._video_popup_url.logicBlock_visible();
		});
		player.addListener('varchanged_vis_video_popup_vimeo', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screen_tint.logicBlock_visible();
			me._video_popup.logicBlock_visible();
			me._video_popup_vimeo.logicBlock_visible();
		});
		player.addListener('varchanged_vis_video_popup_youtube', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screen_tint.logicBlock_visible();
			me._video_popup.logicBlock_visible();
			me._video_popup_youtube.logicBlock_visible();
		});
		player.addListener('viewerinit', function(event) {
			me._thumbnail_cloner.ggUpdate();
			me._languages_cloner.ggUpdate();
			me._node_cloner_phone.ggUpdate();
		});
		player.addListener('vrchanged', function(event) {
			me._menu_bg_safe_area.logicBlock_size();
			me._menu.logicBlock_size();
			me._languages.logicBlock_position();
			me._hotspots_toggle.logicBlock_position();
			me._gyro_toggle.logicBlock_position();
			me._vr.logicBlock_alpha();
		});
	};
	function SkinCloner_node_cloner_phone_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._thumbnail_title_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_title_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_title_phone__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumbnail_title_phone";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text varela";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 18px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs='';
		hs+='box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 15px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._thumbnail_title_phone.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._thumbnail_title_phone.ggUpdateText();
		player.addListener('changenode', function() {
			me._thumbnail_title_phone.ggUpdateText();
		});
		el.appendChild(els);
		me._thumbnail_title_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._thumbnail_title_phone.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbnail_title_phone);
		el=me._thumbnail_image_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_image_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_image_phone__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.loading = 'lazy';
		if (nodeId) els.setAttribute('src',basePath + "images/thumb_img_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_image_phone";
		el.ggDx=0;
		el.ggDy=-7;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.64,sy:0.7,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		el.userData=el;
		hs ='';
		hs+='height : 115px;';
		hs+='left : calc(50% - ((220px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((115px + 0px) / 2) - 7px);';
		hs+='visibility : inherit;';
		hs+='width : 220px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._thumbnail_image_phone.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_image_phone.onclick=function (e) {
			if (me._thumbnail_image_phone.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_phone_thumbs', false);
		}
		me._thumbnail_image_phone.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbnail_image_phone);
	};
	function SkinCloner_languages_cloner_Class(item, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggTag = item['tag'];
		me.ggTitle = item['title'];
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return true;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._language_title=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._language_title;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._language_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="language_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text varela";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs='';
		hs+='box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 18px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._language_title.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(me.ggTitle)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._language_title.ggUpdateText();
		player.addListener('clonerchanged', function() {
			me._language_title.ggUpdateText();
		});
		el.appendChild(els);
		me._language_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._language_title.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['language_title'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._language_title.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._language_title.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._language_title.style.transition='color 0s';
				if (me._language_title.ggCurrentLogicStateTextColor == 0) {
					me._language_title.style.color="rgba(223,224,54,1)";
				}
				else {
					me._language_title.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._language_title.onclick=function (e) {
			if (me._language_title.isDragging()) return;
			player.setLanguage(me.ggTag);
			player.setVariableValue('vis_languages', false);
		}
		me._language_title.onmouseenter=function (e) {
			me.elementMouseOver['language_title']=true;
			me._language_title.logicBlock_textcolor();
		}
		me._language_title.onmouseleave=function (e) {
			me.elementMouseOver['language_title']=false;
			me._language_title.logicBlock_textcolor();
		}
		me._language_title.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._language_title);
		me.elementMouseOver['language_title']=false;
		me._language_title.logicBlock_textcolor();
	};
	function SkinCloner_thumbnail_cloner_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._thumb_title=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumb_title;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumb_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumb_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text varela";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 6px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 220px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs='';
		hs+='box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 5px 0px 5px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._thumb_title.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._thumb_title.ggUpdateText();
		el.appendChild(els);
		me._thumb_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._thumb_title.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumb_title);
		el=me._thumb_img=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumb_img;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumb_img__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.loading = 'lazy';
		if (nodeId) els.setAttribute('src',basePath + "images/thumb_img_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumb_img";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 115px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 220px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumb_img.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumb_img.onclick=function (e) {
			if (me._thumb_img.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._thumb_img.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumb_img);
	};
	function SkinHotspotClass_ht_node__3d(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeId=nodeId;
		me.ggNodeId=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el = new THREE.Group();
		el.userData.setOpacityInternal = function(v) {
			me._ht_node.visible = (v>0 && me._ht_node.userData.visible);
		}
		el.userData.width = 0;
		el.userData.height = 0;
		el.name = 'ht_node';
		el.userData.x = -4.5;
		el.userData.y = -1;
		el.translateZ(0.000);
		el.userData.z = 0.000;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.mouseOverTouchMode = 'clicky';
		el.userData.hanchor = 0;
		el.userData.vanchor = 0;
		el.renderOrder = 0;
		el.userData.renderOrder = 0;
		el.userData.isVisible = function() {
			let vis = me._ht_node.visible
			let parentEl = me._ht_node.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._ht_node.userData.opacity = v;
			v = v * me._ht_node.userData.parentOpacity;
			if (me._ht_node.userData.setOpacityInternal) me._ht_node.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_node.children.length; i++) {
				let child = me._ht_node.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._ht_node.userData.parentOpacity = v;
			v = v * me._ht_node.userData.opacity
			if (me._ht_node.userData.setOpacityInternal) me._ht_node.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_node.children.length; i++) {
				let child = me._ht_node.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = false;
		el.userData.visible = false;
		el.userData.opacity = 1.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._ht_node = el;
		el.userData.ggId="ht_node";
		me._ht_node.userData.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.userData.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.userData.ggElementNodeId)) {
					return this.parentNode.userData.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_hotspots') == true)) && 
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node.ggCurrentLogicStateVisible = newLogicStateVisible;
				if (me._ht_node.ggCurrentLogicStateVisible == 0) {
			me._ht_node.visible=((!me._ht_node.material && Number(me._ht_node.userData.opacity>0)) || (me._ht_node.material && Number(me._ht_node.material.opacity)>0))?true:false;
			player.repaint();
			me._ht_node.userData.visible=true;
				}
				else {
			me._ht_node.visible=false;
			player.repaint();
			me._ht_node.userData.visible=false;
				}
			}
		}
		me._ht_node.userData.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.userData.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.userData.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			me._ht_node_tooltip.logicBlock_alpha();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.userData.onmouseleave=function (e) {
			me.elementMouseOver['ht_node']=false;
			me._ht_node_tooltip.logicBlock_alpha();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht_node.userData.ggUpdatePosition=function (useTransition) {
		}
		el = new THREE.Mesh();
			material = new THREE.MeshBasicMaterial( {side : THREE.DoubleSide, transparent : (player.get3dModelType() != 2 || true) } ); 
			el.userData.transparentIn3d = material.transparent;
			material.name = 'ht_node_tooltip_material';
			el.material = material;
		el.translateX(0);
		el.translateY(0.35);
		el.scale.set(1.00, 1.00, 1.0);
		el.userData.width = 100;
		el.userData.height = 20;
		el.userData.scale = {x: 1.00, y: 1.00, z: 1.0};
		el.userData.curScaleOffX = 0;
		el.userData.curScaleOffY = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadiusInnerShape = {};
		el.userData.borderRadius.topLeft = el.userData.borderRadiusInnerShape.topLeft = 0;
		el.userData.borderRadius.topRight = el.userData.borderRadiusInnerShape.topRight = 0;
		el.userData.borderRadius.bottomRight = el.userData.borderRadiusInnerShape.bottomRight = 0;
		el.userData.borderRadius.bottomLeft = el.userData.borderRadiusInnerShape.bottomLeft = 0;
		el.name = 'ht_node_tooltip';
		el.userData.x = 0;
		el.userData.y = 0.35;
		el.translateZ(0.030);
		el.userData.z = 0.030;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.mouseOverTouchMode = 'clicky';
		el.userData.hanchor = 1;
		el.userData.vanchor = 1;
		el.renderOrder = 1;
		el.userData.renderOrder = 1;
		el.userData.isVisible = function() {
			let vis = me._ht_node_tooltip.visible
			let parentEl = me._ht_node_tooltip.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._ht_node_tooltip.userData.opacity = v;
			v = v * me._ht_node_tooltip.userData.parentOpacity;
			if (me._ht_node_tooltip.userData.setOpacityInternal) me._ht_node_tooltip.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_node_tooltip.children.length; i++) {
				let child = me._ht_node_tooltip.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._ht_node_tooltip.userData.parentOpacity = v;
			v = v * me._ht_node_tooltip.userData.opacity
			if (me._ht_node_tooltip.userData.setOpacityInternal) me._ht_node_tooltip.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_node_tooltip.children.length; i++) {
				let child = me._ht_node_tooltip.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = true;
		el.userData.visible = true;
		el.userData.opacity = 0.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._ht_node_tooltip = el;
		el.userData.borderWidth = {};
		el.userData.borderWidth.default = {};
		el.userData.borderWidth.default.top = 0;
		el.userData.borderWidth.default.right = 0;
		el.userData.borderWidth.default.bottom = 0;
		el.userData.borderWidth.default.left = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadius.default = {};
		el.userData.borderRadius.default.topLeft = 0;
		el.userData.borderRadius.default.topRight = 0;
		el.userData.borderRadius.default.bottomRight = 0;
		el.userData.borderRadius.default.bottomLeft = 0;
		el.userData.borderRadiusInnerShape = {};
		el.userData.createGeometry = function(bwTop, bwRight, bwBottom, bwLeft, brTopLeft, brTopRight, brBottomRight, brBottomLeft) {
			let el = me._ht_node_tooltip;
			skin.disposeGeometryAndMaterial(el);
			skin.removeChildren(el, 'subElement');
			if (typeof(bwTop) != 'undefined') {
				el.userData.borderWidth.top = bwTop;
				el.userData.borderWidth.right = bwRight;
				el.userData.borderWidth.bottom = bwBottom;
				el.userData.borderWidth.left = bwLeft;
				el.userData.borderRadius.topLeft = brTopLeft;
				el.userData.borderRadius.topRight = brTopRight;
				el.userData.borderRadius.bottomRight = brBottomRight;
				el.userData.borderRadius.bottomLeft = brBottomLeft;
			}
			let width = el.userData.width / 100.0;
			let height = el.userData.height / 100.0;
			skin.rectCalcBorderRadiiInnerShape(me._ht_node_tooltip);
			if (skin.rectHasRoundedCorners(me._ht_node_tooltip)) {
		roundedRectShape = new THREE.Shape();
		let borderRadiusTL = el.userData.borderRadiusInnerShape.topLeft / 100.0;
		let borderRadiusTR = el.userData.borderRadiusInnerShape.topRight / 100.0;
		let borderRadiusBR = el.userData.borderRadiusInnerShape.bottomRight / 100.0;
		let borderRadiusBL = el.userData.borderRadiusInnerShape.bottomLeft / 100.0;
		roundedRectShape.moveTo((-width / 2.0) + borderRadiusTL, (height / 2.0));
		roundedRectShape.lineTo((width / 2.0) - borderRadiusTR, (height / 2.0));
		if (borderRadiusTR > 0.0) {
		roundedRectShape.arc(0, -borderRadiusTR, borderRadiusTR, Math.PI / 2.0, 2.0 * Math.PI, true);
		}
		roundedRectShape.lineTo((width / 2.0), (-height / 2.0) + borderRadiusBR);
		if (borderRadiusBR > 0.0) {
		roundedRectShape.arc(-borderRadiusBR, 0, borderRadiusBR, 2.0 * Math.PI, 3.0 * Math.PI / 2.0, true);
		}
		roundedRectShape.lineTo((-width / 2.0) + borderRadiusBL, (-height / 2.0));
		if (borderRadiusBL > 0.0) {
		roundedRectShape.arc(0, borderRadiusBL, borderRadiusBL, 3.0 * Math.PI / 2.0, Math.PI, true);
		}
		roundedRectShape.lineTo((-width / 2.0), (height / 2.0) - borderRadiusTL);
		if (borderRadiusTL > 0.0) {
		roundedRectShape.arc(borderRadiusTL, 0, borderRadiusTL, Math.PI, Math.PI / 2.0, true);
		}
		geometry = new THREE.ShapeGeometry(roundedRectShape);
		geometry.name = 'ht_node_tooltip_geometry';
		geometry.computeBoundingBox();
		var min = geometry.boundingBox.min;
		var max = geometry.boundingBox.max;
		var offset = new THREE.Vector2(0 - min.x, 0 - min.y);
		var range = new THREE.Vector2(max.x - min.x, max.y - min.y);
		var vertexPositions = geometry.getAttribute('position');
		var vertexUVs = geometry.getAttribute('uv');
		for (var i = 0; i < vertexPositions.count; i++) {
			var v1 = vertexPositions.getX(i);
			var	v2 = vertexPositions.getY(i);
			vertexUVs.setX(i, (v1 + offset.x) / range.x);
			vertexUVs.setY(i, (v2 + offset.y) / range.y);
		}
		geometry.uvsNeedUpdate = true;
			} else {
				geometry = new THREE.PlaneGeometry(el.userData.width / 100.0, el.userData.height / 100.0, 5, 5);
				geometry.name = 'ht_node_tooltip_geometry';
			}
			el.geometry = geometry;
		}
		el.userData.backgroundColorAlpha = 1;
		el.userData.borderColorAlpha = 1;
		el.userData.setOpacityInternal = function(v) {
			me._ht_node_tooltip.material.opacity = v;
			if (me._ht_node_tooltip.userData.hasScrollbar) {
				me._ht_node_tooltip.userData.scrollbar.material.opacity = v;
				me._ht_node_tooltip.userData.scrollbarBg.material.opacity = v;
			}
			if (me._ht_node_tooltip.userData.ggSubElement) {
				me._ht_node_tooltip.userData.ggSubElement.material.opacity = v
				me._ht_node_tooltip.userData.ggSubElement.visible = (v>0 && me._ht_node_tooltip.userData.visible);
			}
			me._ht_node_tooltip.visible = (v>0 && me._ht_node_tooltip.userData.visible);
		}
		el.userData.setBackgroundColor = function(v) {
			me._ht_node_tooltip.material.color = v;
		}
		el.userData.setBackgroundColorAlpha = function(v) {
			me._ht_node_tooltip.userData.backgroundColorAlpha = v;
			me._ht_node_tooltip.userData.setOpacity(me._ht_node_tooltip.userData.opacity);
		}
		el.userData.createGeometry(0, 0, 0, 0, 0, 0, 0, 0);
		el.userData.backgroundColor = new THREE.Color(1, 1, 1).convertSRGBToLinear();
		el.userData.textColor = '#ffffff';
		el.userData.textColorAlpha = 1;
		el.userData.cssClasses = ['varela', 'shadow'];
		var canvas = document.createElement('canvas');
		canvas.width = 200;
		canvas.height = 40;
		el.userData.textCanvas = canvas;
		el.userData.textCanvasContext = canvas.getContext('2d');
		var tmpCanvas = document.createElement('canvas');
		el.userData.tmpCanvas = tmpCanvas;
		el.userData.tmpCanvasContext = tmpCanvas.getContext('2d');
		el.userData.ggTextureFromCanvas = function() {
			var el = me._ht_node_tooltip;
			var canv = me._ht_node_tooltip.userData.textCanvas;
			var ctx = me._ht_node_tooltip.userData.textCanvasContext;
			var tmpCanv = me._ht_node_tooltip.userData.tmpCanvas;
			ctx.clearRect(0, 0, canv.width, canv.height);
			if (tmpCanv.width > 0 && tmpCanv.height > 0) {
				ctx.drawImage(tmpCanv, 0, ( me._ht_node_tooltip.userData.scrollPosPercent ? tmpCanv.height * me._ht_node_tooltip.userData.scrollPosPercent : 0), canv.width, canv.height, 0, 0, canv.width, canv.height);
			}
		width = me._ht_node_tooltip.userData.boxWidthCanv / 100.0;
		height = me._ht_node_tooltip.userData.boxHeightCanv / 100.0;
		me._ht_node_tooltip.userData.width = me._ht_node_tooltip.userData.boxWidthCanv;
		me._ht_node_tooltip.userData.height = me._ht_node_tooltip.userData.boxHeightCanv;
		me._ht_node_tooltip.userData.createGeometry();
		var newPos = skin.getElementVrPosition(me._ht_node_tooltip, 0, -35);
		me._ht_node_tooltip.position.x = newPos.x;
		me._ht_node_tooltip.position.y = newPos.y;
			var textTexture = new THREE.CanvasTexture(canv);
			textTexture.name = 'ht_node_tooltip_texture';
			textTexture.minFilter = THREE.LinearFilter;
			textTexture.colorSpace = THREE.LinearSRGBColorSpace;
			textTexture.wrapS = THREE.ClampToEdgeWrapping;
			textTexture.wrapT = THREE.ClampToEdgeWrapping;
			if (me._ht_node_tooltip.material.map) {
				me._ht_node_tooltip.material.map.dispose();
			}
			me._ht_node_tooltip.material.map = textTexture;
		}
		el.userData.ggRenderText = function() {
			skin.removeChildren(me._ht_node_tooltip, 'scrollbar');
			skin.paintTextDivToCanvas(me._ht_node_tooltip, 'box-sizing: border-box; width: auto; height: auto; font-size: 16px; font-weight: 500; color: rgba(255,255,255,1); text-align: center; white-space: pre; padding: 0px; overflow: hidden;' + '; color: ' + me._ht_node_tooltip.userData.textColor + ' !important;', false, true, false);
			me._ht_node_tooltip.userData.hasScrollbar = false;
		}
		el.userData.ggUpdateText=function(force) {
			var params = [];
			params.push(player._(String(player._(me.hotspot.title))));
			var hs = player._("%1", params);
			if (hs!=this.ggText || force) {
				this.ggText=hs;
				this.ggRenderText();
			}
		}
		el.userData.setBackgroundColor = function(v) {
			me._ht_node_tooltip.userData.backgroundColor = v;
		}
		el.userData.setBackgroundColorAlpha = function(v) {
			me._ht_node_tooltip.userData.backgroundColorAlpha = v;
		}
		el.userData.setTextColor = function(v) {
			me._ht_node_tooltip.userData.textColor = '#' + v.getHexString();
		}
		el.userData.setTextColorAlpha = function(v) {
			me._ht_node_tooltip.userData.textColorAlpha = v;
		}
		el.userData.ggId="ht_node_tooltip";
		me._ht_node_tooltip.userData.ggIsActive=function() {
			if ((this.parent) && (this.parent.ggIsActive)) {
				return this.parent.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_node_tooltip.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true)) && 
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_node_tooltip.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_node_tooltip.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				if (me._ht_node_tooltip.ggCurrentLogicStateAlpha == 0) {
					me._ht_node_tooltip.userData.transitionValue_alpha = 1;
					for (var i = 0; i < me._ht_node_tooltip.userData.transitions.length; i++) {
						if (me._ht_node_tooltip.userData.transitions[i].property == 'alpha') {
							clearInterval(me._ht_node_tooltip.userData.transitions[i].interval);
							me._ht_node_tooltip.userData.transitions.splice(i, 1);
							break;
						}
					}
					{
						let transition_alpha = {};
						transition_alpha.property = 'alpha';
						transition_alpha.startTime = Date.now();
						transition_alpha.startAlpha = me._ht_node_tooltip.material ? me._ht_node_tooltip.material.opacity : me._ht_node_tooltip.userData.opacity;
						transition_alpha.interval = setInterval(() => {
							let currentTime = Date.now() - 0;
							let percentDone = 1.0 * (currentTime - transition_alpha.startTime) / 200;
							percentDone = Math.max(percentDone, 0.0);
							percentDone = Math.min(percentDone, 1.0);
							let tfval = -(Math.cos(Math.PI * percentDone) - 1) / 2;
							me._ht_node_tooltip.userData.setOpacity(transition_alpha.startAlpha + (me._ht_node_tooltip.userData.transitionValue_alpha - transition_alpha.startAlpha) * tfval);
							player.repaint();
							if (percentDone >= 1.0) {
								clearInterval(transition_alpha.interval);
								me._ht_node_tooltip.userData.transitions.splice(me._ht_node_tooltip.userData.transitions.indexOf(transition_alpha), 1);
							}
						}, 20);
						me._ht_node_tooltip.userData.transitions.push(transition_alpha);
					}
				}
				else {
					me._ht_node_tooltip.userData.transitionValue_alpha = 0;
					for (var i = 0; i < me._ht_node_tooltip.userData.transitions.length; i++) {
						if (me._ht_node_tooltip.userData.transitions[i].property == 'alpha') {
							clearInterval(me._ht_node_tooltip.userData.transitions[i].interval);
							me._ht_node_tooltip.userData.transitions.splice(i, 1);
							break;
						}
					}
					{
						let transition_alpha = {};
						transition_alpha.property = 'alpha';
						transition_alpha.startTime = Date.now();
						transition_alpha.startAlpha = me._ht_node_tooltip.material ? me._ht_node_tooltip.material.opacity : me._ht_node_tooltip.userData.opacity;
						transition_alpha.interval = setInterval(() => {
							let currentTime = Date.now() - 0;
							let percentDone = 1.0 * (currentTime - transition_alpha.startTime) / 200;
							percentDone = Math.max(percentDone, 0.0);
							percentDone = Math.min(percentDone, 1.0);
							let tfval = -(Math.cos(Math.PI * percentDone) - 1) / 2;
							me._ht_node_tooltip.userData.setOpacity(transition_alpha.startAlpha + (me._ht_node_tooltip.userData.transitionValue_alpha - transition_alpha.startAlpha) * tfval);
							player.repaint();
							if (percentDone >= 1.0) {
								clearInterval(transition_alpha.interval);
								me._ht_node_tooltip.userData.transitions.splice(me._ht_node_tooltip.userData.transitions.indexOf(transition_alpha), 1);
							}
						}, 20);
						me._ht_node_tooltip.userData.transitions.push(transition_alpha);
					}
				}
			}
		}
		me._ht_node_tooltip.logicBlock_zindex = function() {
			var newLogicStateZIndex;
			if (
				((player.is3dModel() == true))
			)
			{
				newLogicStateZIndex = 0;
			}
			else {
				newLogicStateZIndex = -1;
			}
			if (me._ht_node_tooltip.ggCurrentLogicStateZIndex != newLogicStateZIndex) {
				me._ht_node_tooltip.ggCurrentLogicStateZIndex = newLogicStateZIndex;
				if (me._ht_node_tooltip.ggCurrentLogicStateZIndex == 0) {
			me._ht_node_tooltip.traverse((obj)=>{
				let level = skin.getDepthFrom(me._ht_node_tooltip, obj);
				let treePos = obj.parent ? obj.parent.children.indexOf(obj) : 0;
				if (1 > 0) {
					if (obj == me._ht_node_tooltip) {
						obj.renderOrder = 10000 + 1000*1
					} else {
						let parentOrder = obj.parent.renderOrder;
						let isSkinElement = obj.userData.hasOwnProperty('ggId');
						obj.renderOrder = parentOrder + (isSkinElement ? (treePos * 100) : 0) + level;
					}
				} else {
					obj.renderOrder = me._ht_node_tooltip.userData.renderOrder + level;
				}
				if (obj.material) {
					if (player.get3dModelType() != 2) {
						obj.material.depthTest = false;
						obj.material.depthWrite = false;
					} else {
						obj.material.transparent = true;
					}
				}
			});
			player.repaint();
				}
				else {
			me._ht_node_tooltip.traverse((obj)=>{
				let level = skin.getDepthFrom(me._ht_node_tooltip, obj);
				let treePos = obj.parent ? obj.parent.children.indexOf(obj) : 0;
				if (-10000 > 0) {
					if (obj == me._ht_node_tooltip) {
						obj.renderOrder = 10000 + 1000*-10000
					} else {
						let parentOrder = obj.parent.renderOrder;
						let isSkinElement = obj.userData.hasOwnProperty('ggId');
						obj.renderOrder = parentOrder + (isSkinElement ? (treePos * 100) : 0) + level;
					}
				} else {
					obj.renderOrder = me._ht_node_tooltip.userData.renderOrder + level;
				}
				if (obj.material) {
					if (player.get3dModelType() != 2) {
						obj.material.depthTest = true;
						obj.material.depthWrite = true;
					} else {
						obj.material.transparent = obj.userData.hasOwnProperty('transparentIn3d') ? obj.userData.transparentIn3d : false;
					}
				}
			});
			player.repaint();
				}
			}
		}
		me._ht_node_tooltip.userData.ggUpdatePosition=function (useTransition) {
				me._ht_node_tooltip.userData.ggUpdateText(true);
		}
		me._ht_node.add(me._ht_node_tooltip);
		el = new THREE.Group();
		el.userData.setOpacityInternal = function(v) {
			me._ht_node_lottie.visible = (v>0 && me._ht_node_lottie.userData.visible);
		}
		el.userData.width = 0;
		el.userData.height = 0;
		el.translateX(0);
		el.translateY(0);
		el.scale.set(1.00, 1.00, 1.0);
		el.userData.width = 50;
		el.userData.height = 50;
		el.userData.scale = {x: 1.00, y: 1.00, z: 1.0};
		el.userData.curScaleOffX = 0;
		el.userData.curScaleOffY = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadiusInnerShape = {};
		el.userData.borderRadius.topLeft = el.userData.borderRadiusInnerShape.topLeft = 0;
		el.userData.borderRadius.topRight = el.userData.borderRadiusInnerShape.topRight = 0;
		el.userData.borderRadius.bottomRight = el.userData.borderRadiusInnerShape.bottomRight = 0;
		el.userData.borderRadius.bottomLeft = el.userData.borderRadiusInnerShape.bottomLeft = 0;
		el.name = 'ht_node_lottie';
		el.userData.x = 0;
		el.userData.y = 0;
		el.translateZ(0.060);
		el.userData.z = 0.060;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.mouseOverTouchMode = 'clicky';
		el.userData.hanchor = 1;
		el.userData.vanchor = 1;
		el.renderOrder = 2;
		el.userData.renderOrder = 2;
		el.userData.setOpacityInternal = function(v) {
			if (me._ht_node_lottie.material) me._ht_node_lottie.material.opacity = v;
			me._ht_node_lottie.visible = (v>0 && me._ht_node_lottie.userData.visible);
		}
		el.userData.isVisible = function() {
			let vis = me._ht_node_lottie.visible
			let parentEl = me._ht_node_lottie.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._ht_node_lottie.userData.opacity = v;
			v = v * me._ht_node_lottie.userData.parentOpacity;
			if (me._ht_node_lottie.userData.setOpacityInternal) me._ht_node_lottie.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_node_lottie.children.length; i++) {
				let child = me._ht_node_lottie.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._ht_node_lottie.userData.parentOpacity = v;
			v = v * me._ht_node_lottie.userData.opacity
			if (me._ht_node_lottie.userData.setOpacityInternal) me._ht_node_lottie.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_node_lottie.children.length; i++) {
				let child = me._ht_node_lottie.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = true;
		el.userData.visible = true;
		el.userData.opacity = 1.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._ht_node_lottie = el;
		el.userData.ggId="ht_node_lottie";
		me._ht_node_lottie.userData.ggIsActive=function() {
			if ((this.parent) && (this.parent.ggIsActive)) {
				return this.parent.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_node_lottie.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != "")) || 
				((player.is3dModel() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_lottie.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_lottie.ggCurrentLogicStateVisible = newLogicStateVisible;
				if (me._ht_node_lottie.ggCurrentLogicStateVisible == 0) {
			me._ht_node_lottie.visible=false;
			player.repaint();
			me._ht_node_lottie.userData.visible=false;
				}
				else {
			me._ht_node_lottie.visible=((!me._ht_node_lottie.material && Number(me._ht_node_lottie.userData.opacity>0)) || (me._ht_node_lottie.material && Number(me._ht_node_lottie.material.opacity)>0))?true:false;
			player.repaint();
			me._ht_node_lottie.userData.visible=true;
				}
			}
		}
		me._ht_node_lottie.userData.onmouseenter=function (e) {
			player.setOverrideCursor('pointer');
			me.elementMouseOver['ht_node_lottie']=true;
		}
		me._ht_node_lottie.userData.onmouseleave=function (e) {
			player.setOverrideCursor('default');
			me.elementMouseOver['ht_node_lottie']=false;
		}
		me._ht_node_lottie.userData.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.add(me._ht_node_lottie);
		el = new THREE.Mesh();
			material = new THREE.MeshBasicMaterial( { color: new THREE.Color(1, 1, 1).convertSRGBToLinear(), side : THREE.DoubleSide, transparent : (player.get3dModelType() != 2 || false) } ); 
			el.userData.transparentIn3d = material.transparent;
			material.name = 'ht_node_3d_material';
			el.material = material;
		el.translateX(0);
		el.translateY(0);
		el.scale.set(1.00, 1.00, 1.0);
		el.userData.width = 50;
		el.userData.height = 50;
		el.userData.scale = {x: 1.00, y: 1.00, z: 1.0};
		el.userData.curScaleOffX = 0;
		el.userData.curScaleOffY = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadiusInnerShape = {};
		el.userData.borderRadius.topLeft = el.userData.borderRadiusInnerShape.topLeft = 0;
		el.userData.borderRadius.topRight = el.userData.borderRadiusInnerShape.topRight = 0;
		el.userData.borderRadius.bottomRight = el.userData.borderRadiusInnerShape.bottomRight = 0;
		el.userData.borderRadius.bottomLeft = el.userData.borderRadiusInnerShape.bottomLeft = 0;
		el.name = 'ht_node_3d';
		el.userData.x = 0;
		el.userData.y = 0;
		el.translateZ(0.090);
		el.userData.z = 0.090;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.mouseOverTouchMode = 'clicky';
		el.userData.hanchor = 1;
		el.userData.vanchor = 1;
		el.renderOrder = 3;
		el.userData.renderOrder = 3;
		el.userData.isVisible = function() {
			let vis = me._ht_node_3d.visible
			let parentEl = me._ht_node_3d.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._ht_node_3d.userData.opacity = v;
			v = v * me._ht_node_3d.userData.parentOpacity;
			if (me._ht_node_3d.userData.setOpacityInternal) me._ht_node_3d.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_node_3d.children.length; i++) {
				let child = me._ht_node_3d.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._ht_node_3d.userData.parentOpacity = v;
			v = v * me._ht_node_3d.userData.opacity
			if (me._ht_node_3d.userData.setOpacityInternal) me._ht_node_3d.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_node_3d.children.length; i++) {
				let child = me._ht_node_3d.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = false;
		el.userData.visible = false;
		el.userData.opacity = 1.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._ht_node_3d = el;
		el.userData.borderWidth = {};
		el.userData.borderWidth.default = {};
		el.userData.borderWidth.default.top = 0;
		el.userData.borderWidth.default.right = 0;
		el.userData.borderWidth.default.bottom = 0;
		el.userData.borderWidth.default.left = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadius.default = {};
		el.userData.borderRadius.default.topLeft = 25;
		el.userData.borderRadius.default.topRight = 25;
		el.userData.borderRadius.default.bottomRight = 25;
		el.userData.borderRadius.default.bottomLeft = 25;
		el.userData.borderRadiusInnerShape = {};
		el.userData.createGeometry = function(bwTop, bwRight, bwBottom, bwLeft, brTopLeft, brTopRight, brBottomRight, brBottomLeft) {
			let el = me._ht_node_3d;
			skin.disposeGeometryAndMaterial(el);
			skin.removeChildren(el, 'subElement');
			if (typeof(bwTop) != 'undefined') {
				el.userData.borderWidth.top = bwTop;
				el.userData.borderWidth.right = bwRight;
				el.userData.borderWidth.bottom = bwBottom;
				el.userData.borderWidth.left = bwLeft;
				el.userData.borderRadius.topLeft = brTopLeft;
				el.userData.borderRadius.topRight = brTopRight;
				el.userData.borderRadius.bottomRight = brBottomRight;
				el.userData.borderRadius.bottomLeft = brBottomLeft;
			}
			let width = el.userData.width / 100.0;
			let height = el.userData.height / 100.0;
			skin.rectCalcBorderRadiiInnerShape(me._ht_node_3d);
			if (skin.rectHasRoundedCorners(me._ht_node_3d)) {
		roundedRectShape = new THREE.Shape();
		let borderRadiusTL = el.userData.borderRadiusInnerShape.topLeft / 100.0;
		let borderRadiusTR = el.userData.borderRadiusInnerShape.topRight / 100.0;
		let borderRadiusBR = el.userData.borderRadiusInnerShape.bottomRight / 100.0;
		let borderRadiusBL = el.userData.borderRadiusInnerShape.bottomLeft / 100.0;
		roundedRectShape.moveTo((-width / 2.0) + borderRadiusTL, (height / 2.0));
		roundedRectShape.lineTo((width / 2.0) - borderRadiusTR, (height / 2.0));
		if (borderRadiusTR > 0.0) {
		roundedRectShape.arc(0, -borderRadiusTR, borderRadiusTR, Math.PI / 2.0, 2.0 * Math.PI, true);
		}
		roundedRectShape.lineTo((width / 2.0), (-height / 2.0) + borderRadiusBR);
		if (borderRadiusBR > 0.0) {
		roundedRectShape.arc(-borderRadiusBR, 0, borderRadiusBR, 2.0 * Math.PI, 3.0 * Math.PI / 2.0, true);
		}
		roundedRectShape.lineTo((-width / 2.0) + borderRadiusBL, (-height / 2.0));
		if (borderRadiusBL > 0.0) {
		roundedRectShape.arc(0, borderRadiusBL, borderRadiusBL, 3.0 * Math.PI / 2.0, Math.PI, true);
		}
		roundedRectShape.lineTo((-width / 2.0), (height / 2.0) - borderRadiusTL);
		if (borderRadiusTL > 0.0) {
		roundedRectShape.arc(borderRadiusTL, 0, borderRadiusTL, Math.PI, Math.PI / 2.0, true);
		}
		geometry = new THREE.ShapeGeometry(roundedRectShape);
		geometry.name = 'ht_node_3d_geometry';
		geometry.computeBoundingBox();
		var min = geometry.boundingBox.min;
		var max = geometry.boundingBox.max;
		var offset = new THREE.Vector2(0 - min.x, 0 - min.y);
		var range = new THREE.Vector2(max.x - min.x, max.y - min.y);
		var vertexPositions = geometry.getAttribute('position');
		var vertexUVs = geometry.getAttribute('uv');
		for (var i = 0; i < vertexPositions.count; i++) {
			var v1 = vertexPositions.getX(i);
			var	v2 = vertexPositions.getY(i);
			vertexUVs.setX(i, (v1 + offset.x) / range.x);
			vertexUVs.setY(i, (v2 + offset.y) / range.y);
		}
		geometry.uvsNeedUpdate = true;
			} else {
				geometry = new THREE.PlaneGeometry(el.userData.width / 100.0, el.userData.height / 100.0, 5, 5);
				geometry.name = 'ht_node_3d_geometry';
			}
			el.geometry = geometry;
		}
		el.userData.backgroundColorAlpha = 1;
		el.userData.borderColorAlpha = 1;
		el.userData.setOpacityInternal = function(v) {
			me._ht_node_3d.material.opacity = v * me._ht_node_3d.userData.backgroundColorAlpha;
			if (me._ht_node_3d.userData.ggSubElement) {
				me._ht_node_3d.userData.ggSubElement.material.opacity = v
				me._ht_node_3d.userData.ggSubElement.visible = (v>0 && me._ht_node_3d.userData.visible);
			}
			me._ht_node_3d.visible = (v>0 && me._ht_node_3d.userData.visible);
		}
		el.userData.setBackgroundColor = function(v) {
			me._ht_node_3d.material.color = v;
		}
		el.userData.setBackgroundColorAlpha = function(v) {
			me._ht_node_3d.userData.backgroundColorAlpha = v;
			me._ht_node_3d.userData.setOpacity(me._ht_node_3d.userData.opacity);
		}
		el.userData.createGeometry(0, 0, 0, 0, 25, 25, 25, 25);
		el.userData.ggId="ht_node_3d";
		me._ht_node_3d.userData.ggIsActive=function() {
			if ((this.parent) && (this.parent.ggIsActive)) {
				return this.parent.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_node_3d.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == "")) && 
				((player.is3dModel() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_3d.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_3d.ggCurrentLogicStateVisible = newLogicStateVisible;
				if (me._ht_node_3d.ggCurrentLogicStateVisible == 0) {
			me._ht_node_3d.visible=((!me._ht_node_3d.material && Number(me._ht_node_3d.userData.opacity>0)) || (me._ht_node_3d.material && Number(me._ht_node_3d.material.opacity)>0))?true:false;
			player.repaint();
			me._ht_node_3d.userData.visible=true;
				}
				else {
			me._ht_node_3d.visible=false;
			player.repaint();
			me._ht_node_3d.userData.visible=false;
				}
			}
		}
		me._ht_node_3d.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['ht_node_3d'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._ht_node_3d.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._ht_node_3d.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				if (me._ht_node_3d.ggCurrentLogicStateBackgroundColor == 0) {
					me._ht_node_3d.userData.setBackgroundColor(new THREE.Color('#dfe036'));
					me._ht_node_3d.userData.setBackgroundColorAlpha(1);
				}
				else {
					me._ht_node_3d.userData.setBackgroundColor(new THREE.Color('#ffffff'));
					me._ht_node_3d.userData.setBackgroundColorAlpha(1);
				}
			}
		}
		me._ht_node_3d.logicBlock_zindex = function() {
			var newLogicStateZIndex;
			if (
				((me.elementMouseOver['ht_node_3d'] == true))
			)
			{
				newLogicStateZIndex = 0;
			}
			else {
				newLogicStateZIndex = -1;
			}
			if (me._ht_node_3d.ggCurrentLogicStateZIndex != newLogicStateZIndex) {
				me._ht_node_3d.ggCurrentLogicStateZIndex = newLogicStateZIndex;
				if (me._ht_node_3d.ggCurrentLogicStateZIndex == 0) {
			me._ht_node_3d.traverse((obj)=>{
				let level = skin.getDepthFrom(me._ht_node_3d, obj);
				let treePos = obj.parent ? obj.parent.children.indexOf(obj) : 0;
				if (1 > 0) {
					if (obj == me._ht_node_3d) {
						obj.renderOrder = 10000 + 1000*1
					} else {
						let parentOrder = obj.parent.renderOrder;
						let isSkinElement = obj.userData.hasOwnProperty('ggId');
						obj.renderOrder = parentOrder + (isSkinElement ? (treePos * 100) : 0) + level;
					}
				} else {
					obj.renderOrder = me._ht_node_3d.userData.renderOrder + level;
				}
				if (obj.material) {
					if (player.get3dModelType() != 2) {
						obj.material.depthTest = false;
						obj.material.depthWrite = false;
					} else {
						obj.material.transparent = true;
					}
				}
			});
			player.repaint();
				}
				else {
			me._ht_node_3d.traverse((obj)=>{
				let level = skin.getDepthFrom(me._ht_node_3d, obj);
				let treePos = obj.parent ? obj.parent.children.indexOf(obj) : 0;
				if (-10000 > 0) {
					if (obj == me._ht_node_3d) {
						obj.renderOrder = 10000 + 1000*-10000
					} else {
						let parentOrder = obj.parent.renderOrder;
						let isSkinElement = obj.userData.hasOwnProperty('ggId');
						obj.renderOrder = parentOrder + (isSkinElement ? (treePos * 100) : 0) + level;
					}
				} else {
					obj.renderOrder = me._ht_node_3d.userData.renderOrder + level;
				}
				if (obj.material) {
					if (player.get3dModelType() != 2) {
						obj.material.depthTest = true;
						obj.material.depthWrite = true;
					} else {
						obj.material.transparent = obj.userData.hasOwnProperty('transparentIn3d') ? obj.userData.transparentIn3d : false;
					}
				}
			});
			player.repaint();
				}
			}
		}
		me._ht_node_3d.userData.onmouseenter=function (e) {
			player.setOverrideCursor('pointer');
			me.elementMouseOver['ht_node_3d']=true;
			me._ht_node_3d.logicBlock_backgroundcolor();
			me._ht_node_3d.logicBlock_zindex();
		}
		me._ht_node_3d.userData.ontouchend=function (e) {
			me._ht_node_3d.logicBlock_backgroundcolor();
			me._ht_node_3d.logicBlock_zindex();
		}
		me._ht_node_3d.userData.onmouseleave=function (e) {
			player.setOverrideCursor('default');
			me.elementMouseOver['ht_node_3d']=false;
			me._ht_node_3d.logicBlock_backgroundcolor();
			me._ht_node_3d.logicBlock_zindex();
		}
		me._ht_node_3d.userData.ggUpdatePosition=function (useTransition) {
		}
		el = new THREE.Mesh();
		el.translateX(0);
		el.translateY(0);
		el.scale.set(1.00, 1.00, 1.0);
		el.userData.width = 50;
		el.userData.height = 50;
		el.userData.scale = {x: 1.00, y: 1.00, z: 1.0};
		el.userData.curScaleOffX = 0;
		el.userData.curScaleOffY = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadiusInnerShape = {};
		el.userData.borderRadius.topLeft = el.userData.borderRadiusInnerShape.topLeft = 0;
		el.userData.borderRadius.topRight = el.userData.borderRadiusInnerShape.topRight = 0;
		el.userData.borderRadius.bottomRight = el.userData.borderRadiusInnerShape.bottomRight = 0;
		el.userData.borderRadius.bottomLeft = el.userData.borderRadiusInnerShape.bottomLeft = 0;
		el.name = 'ht_node_3d_icon';
		el.userData.x = 0;
		el.userData.y = 0;
		el.translateZ(0.120);
		el.userData.z = 0.120;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.mouseOverTouchMode = 'clicky';
		el.userData.hanchor = 1;
		el.userData.vanchor = 1;
		el.renderOrder = 4;
		el.userData.renderOrder = 4;
		el.userData.isVisible = function() {
			let vis = me._ht_node_3d_icon.visible
			let parentEl = me._ht_node_3d_icon.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._ht_node_3d_icon.userData.opacity = v;
			v = v * me._ht_node_3d_icon.userData.parentOpacity;
			if (me._ht_node_3d_icon.userData.setOpacityInternal) me._ht_node_3d_icon.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_node_3d_icon.children.length; i++) {
				let child = me._ht_node_3d_icon.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._ht_node_3d_icon.userData.parentOpacity = v;
			v = v * me._ht_node_3d_icon.userData.opacity
			if (me._ht_node_3d_icon.userData.setOpacityInternal) me._ht_node_3d_icon.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_node_3d_icon.children.length; i++) {
				let child = me._ht_node_3d_icon.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = true;
		el.userData.visible = true;
		el.userData.opacity = 1.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._ht_node_3d_icon = el;
		el.userData.setOpacityInternal = function(v) {
			if (me._ht_node_3d_icon.userData.materialNormal) me._ht_node_3d_icon.userData.materialNormal.opacity = v;
			if (me._ht_node_3d_icon.userData.materialOver) me._ht_node_3d_icon.userData.materialOver.opacity = v;
			if (me._ht_node_3d_icon.userData.materialActive) me._ht_node_3d_icon.userData.materialActive.opacity = v;
			me._ht_node_3d_icon.visible = (v>0 && me._ht_node_3d_icon.userData.visible);
		}
		loader = new THREE.TextureLoader();
		texture = loader.load('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAG4klEQVR4nO2dzW9VRRTAfyABEdoGIqFJKUtYWHRnJJr4Wg0SMdFEkMSNAl24BPkDICREFrCBlWsgEtgIS/koEIHEhWw0fGxIRE0JkNA+KdAE62Lus4+XvnfOzJ07d+5jfsnZ9PXOOTNz7525Z86cgUQikUgkEolEIpEIy7yyDbBkFbAWWAOsAHqaBKDeJPeB28BN4K/gljoSc4csAd4DhoH3gTeYbXhb6sDvwCVgDPgZeOzBxq6nFxjFNNo0MFOQTGc6RjOdiRaGgRPAE4rrhHYylemuFV3JKvAJcI3wndBOrgKbCq1xpAwD1ym/A9rJ9czGrqcfOE75Da6VY8DKQloiAnYAjyi/kW3lUWZ7EEJMe5cC3wNfeizzCXAXuAdMAM+yvy8C+jB39SCw2K'+
	'PO48A3wD8eywzOOsyHWZ47dBq4DOzDTAIGLfQPZtfsy8rIO5W+CQxZtkE0jACTuFX8OXAe2Ia5433Rl5V5IdPhYtsEFRzwtwBPsa/sJPAdxkVSNIOZLpeb5imwOYCNXhjF/u6rA3uAZSXYuyzTXbewt/EUj5ZgrxVbsO+Mk8BAGca2MICxxbZTon1SRjCzHW1lxoGNpVjamY0Y22xeX9GNKeuwexefx3wkxko/ZuC3GfuimX0txW5qexCYX4qldswHDqGv101MW5SO1hXyL/BtSTbmYTfGdk0dj5Vk4//sQN8ZX5Vkow++Rt8pwdwsrfSj901V8cloZTe6uj6iJIek9lV1sAzjCkI7pji/ulydi8OYWYjEGPAh5nH3xWvABmA9JtihH7P+DmadfBwT3HAN+AmzIuiL+cA5dNPcYeCiR90d0SwujeNvatuL8UGdxjSw'+
	'duYzlV2zDfcAiVb60X2nXPekT2STwpgZ/Hz0LQR2YUJ6tJ3QTu4DO7My87JRqfNjD7pErioMOelBz1bgjkKXrdwBvvBg3ymFrise9HSkpjCiTj7f1ALgiEJPXjmS6XJlAJ1DspZDh8gJhQF7cpS/HDNoFt0ZDTlHPg/zXoWOH3KU35E+5LipCdwruJz8q4suciOHzcuQfXhTFBSMNyoonsEs+LiwgLBPRqucxf31dUBRfiFf72OC0ue4r/SFGDMkOexo+yCyW2XMsey2LEEOEDjvWPZWodyQstWxDpKrfprZj1cvfCQonMF8fNmykGKmtq5yBxNKZMt2RdkbHMpti/SenMYtOmSnUG4ZssuhHn3IbxDX8XVOpIDoyw5l9uLnC9y3PMTt5roslHtVU4h25U5anryoLKeZz4HXHa4rmuW4BS5cFH5XLfFqOmQV8tLkLx'+
	'plLXzmcE0oPnW4RmqDHjxF13yA/JjbhHeCcaHbeG1Dy1Rmow2rFeWOSIVonpA1wu+NwGcbNuA3ENo3i7GfFd3FhAR1Yq1UiKZDVigMsWW9wzWhsbVxBvhD+B9xzNR0iLSwc09RRivSUxcDLjZKbSEukvnokAlFGa3EHCTXwMVGqS2CdMgz4fe58OpGKAgXG6W2EL2+VYggfKnQdEhd+N3F91OFLAouNkptMSkV4KNDXNwM4w7XhMbFRqktpLb00iEuUXq3Ha4JjYuNUlt46ZD7wu+2X+lgnJWxY2vjPMzXeiceONryAsl1oiOY6+SW4n/eUvxPM1OYdexYOYd9COqbiv8R21LTIX8ib5Z/W1FOKz86XBOK0w7XSG1Qx2MitSIWqHqIc4HqARVYoLok/P4O9pWoA/strwnBfuzdQX2YNuiE1IZWvExBDi7B2MGDHF6W'+
	'MCDXIOzgYUCQAuXaUUqgHHR/KOkrjraXFkraixxsPUm+wOUUbG1Jt21HOEuFtyNAuA07hxV68sphumDDDqQtbQ2i2NIGYTd9LsIkHXio1NlJHmLidrtu0yeE3xbdh5mpnMF+W/SZ7FpfqQK126J/dSk8JQ6wI9rEAZBSa3SSUrICpeQzc0tpyWcgpWeaS0pLz9TgGPpOqeKTYpPA7GhJNr6AbYq/Q1QjQM82xd8NIorIHMIuCeYF4o7vtU2COUFESTAbjGCXzTqliQ3AZuwTKZ8ijkTKq9C5Q5rlOWavZNRUMdX4Xro01XiDzbgn4z9AuGT8B3BPxh/9k9HKMPmOq7iACR7wfVzFdoxLRzuVnWsAj3bMkBjC/4Euq9H54BqxtpU60KWqRx49xWyw7HTk0WrgVY86u+LIo2bSoWARshK9qyUGOUoXH5vXTI34D5asFV'+
	'T3qNmEbo0+lFwh4LJrzNQw4TJlbOKZynTXCq5jJenFDKBjhDm+eweRHd8d+wH37zJ7wP0Q+Q64/43ZA+6vEOnW7Jg7ZC4GMBl11mISufRk0rjLJzGNX8dsvLmF+Zj7O7iliUQikUgkEolEIlER/gPwCD7wxPugjwAAAABJRU5ErkJggg==');
		texture.colorSpace = player.getVRTextureColorSpace();
		material = new THREE.MeshBasicMaterial( {map: texture, side: THREE.DoubleSide, transparent: true} );
		material.name = 'ht_node_3d_icon_material';
		el.userData.materialNormal = material;
		el.userData.materialCurrent = material;
		el.userData.createGeometry = function(brTopLeft, brTopRight, brBottomRight, brBottomLeft) {
			let el = me._ht_node_3d_icon;
			skin.disposeGeometryAndMaterial(el);
			skin.removeChildren(el, 'subElement');
			let minDim = Math.min(el.userData.width, el.userData.height) / 2;
			el.userData.borderRadiusInnerShape.topLeft = Math.min(brTopLeft, minDim);
			el.userData.borderRadiusInnerShape.topRight = Math.min(brTopRight, minDim);
			el.userData.borderRadiusInnerShape.bottomRight = Math.min(brBottomRight, minDim);
			el.userData.borderRadiusInnerShape.bottomLeft = Math.min(brBottomLeft, minDim);
		geometry = new THREE.PlaneGeometry(el.userData.width / 100.0, el.userData.height / 100.0, 5, 5 );
		geometry.name = 'ht_node_3d_icon_geometry';
		el.geometry = geometry;
		el.material = el.userData.materialCurrent;
		}
		el.userData.createGeometry(0, 0, 0, 0);
		el.userData.ggId="ht_node_3d_icon";
		me._ht_node_3d_icon.userData.ggIsActive=function() {
			if ((this.parent) && (this.parent.ggIsActive)) {
				return this.parent.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_node_3d_icon.userData.onmouseenter=function (e) {
			player.setOverrideCursor('pointer');
			me.elementMouseOver['ht_node_3d_icon']=true;
		}
		me._ht_node_3d_icon.userData.onmouseleave=function (e) {
			player.setOverrideCursor('default');
			me.elementMouseOver['ht_node_3d_icon']=false;
		}
		me._ht_node_3d_icon.userData.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_3d.add(me._ht_node_3d_icon);
		me._ht_node.add(me._ht_node_3d);
		el = new THREE.Group();
		el.translateX(0);
		el.translateY(0);
		el.scale.set(1.00, 1.00, 1.0);
		el.userData.width = 50;
		el.userData.height = 50;
		el.userData.scale = {x: 1.00, y: 1.00, z: 1.0};
		el.userData.curScaleOffX = 0;
		el.userData.curScaleOffY = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadiusInnerShape = {};
		el.userData.borderRadius.topLeft = el.userData.borderRadiusInnerShape.topLeft = 0;
		el.userData.borderRadius.topRight = el.userData.borderRadiusInnerShape.topRight = 0;
		el.userData.borderRadius.bottomRight = el.userData.borderRadiusInnerShape.bottomRight = 0;
		el.userData.borderRadius.bottomLeft = el.userData.borderRadiusInnerShape.bottomLeft = 0;
		el.name = 'ht_node_custom_image';
		el.userData.x = 0;
		el.userData.y = 0;
		el.translateZ(0.120);
		el.userData.z = 0.120;
		el.rotateZ(0.00);
		el.userData.angle = 0.00;
		el.userData.mouseOverTouchMode = 'clicky';
		el.userData.hanchor = 1;
		el.userData.vanchor = 1;
		el.renderOrder = 4;
		el.userData.renderOrder = 4;
		el.userData.isVisible = function() {
			let vis = me._ht_node_custom_image.visible
			let parentEl = me._ht_node_custom_image.parent;
			while (vis && parentEl) {
				if (!parentEl.visible) {
					vis = false;
					break;
				}
				parentEl = parentEl.parent;
			}
			return vis;
		}
		el.userData.setOpacity = function(v) {
			me._ht_node_custom_image.userData.opacity = v;
			v = v * me._ht_node_custom_image.userData.parentOpacity;
			if (me._ht_node_custom_image.userData.setOpacityInternal) me._ht_node_custom_image.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_node_custom_image.children.length; i++) {
				let child = me._ht_node_custom_image.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.userData.setParentOpacity = function(v) {
			me._ht_node_custom_image.userData.parentOpacity = v;
			v = v * me._ht_node_custom_image.userData.opacity
			if (me._ht_node_custom_image.userData.setOpacityInternal) me._ht_node_custom_image.userData.setOpacityInternal(v);
			for (let i = 0; i < me._ht_node_custom_image.children.length; i++) {
				let child = me._ht_node_custom_image.children[i];
				if (child.userData.setParentOpacity) {
					child.userData.setParentOpacity(v);
				}
			};
		}
		el.visible = false;
		el.userData.visible = false;
		el.userData.opacity = 1.00;
		el.userData.parentOpacity = 1.0;
		el.userData.transitions = [];
		me._ht_node_custom_image = el;
		el.userData.borderWidth = {};
		el.userData.borderWidth.default = {};
		el.userData.borderWidth.default.top = 0;
		el.userData.borderWidth.default.right = 0;
		el.userData.borderWidth.default.bottom = 0;
		el.userData.borderWidth.default.left = 0;
		el.userData.borderRadius = {};
		el.userData.borderRadius.default = {};
		el.userData.borderRadius.default.topLeft = 0;
		el.userData.borderRadius.default.topRight = 0;
		el.userData.borderRadius.default.bottomRight = 0;
		el.userData.borderRadius.default.bottomLeft = 0;
		el.userData.borderRadiusInnerShape = {};
		el.userData.createGeometry = function(bwTop, bwRight, bwBottom, bwLeft, brTopLeft, brTopRight, brBottomRight, brBottomLeft) {
			let el = me._ht_node_custom_image;
			skin.disposeGeometryAndMaterial(el);
			skin.removeChildren(el, 'subElement');
			if (typeof(bwTop) != 'undefined') {
				el.userData.borderWidth.top = bwTop;
				el.userData.borderWidth.right = bwRight;
				el.userData.borderWidth.bottom = bwBottom;
				el.userData.borderWidth.left = bwLeft;
				el.userData.borderRadius.topLeft = brTopLeft;
				el.userData.borderRadius.topRight = brTopRight;
				el.userData.borderRadius.bottomRight = brBottomRight;
				el.userData.borderRadius.bottomLeft = brBottomLeft;
			}
			let width = el.userData.width / 100.0;
			let height = el.userData.height / 100.0;
			skin.rectCalcBorderRadiiInnerShape(me._ht_node_custom_image);
		}
		el.userData.backgroundColorAlpha = 1;
		el.userData.borderColorAlpha = 1;
		el.userData.setOpacityInternal = function(v) {
			if (me._ht_node_custom_image.userData.ggSubElement) {
				me._ht_node_custom_image.userData.ggSubElement.material.opacity = v
				me._ht_node_custom_image.userData.ggSubElement.visible = (v>0 && me._ht_node_custom_image.userData.visible);
			}
			me._ht_node_custom_image.visible = (v>0 && me._ht_node_custom_image.userData.visible);
		}
		el.userData.createGeometry(0, 0, 0, 0, 0, 0, 0, 0);
		currentWidth = 50;
		currentHeight = 50;
		var img = {};
		img.geometry = new THREE.PlaneGeometry(currentWidth / 100.0, currentHeight / 100.0, 5, 5);
		img.geometry.name = 'ht_node_custom_image_imgGeometry';
		loader = new THREE.TextureLoader();
		el.userData.ggSetUrl = function(extUrl) {
			loader.load(extUrl,
				function (texture) {
				texture.colorSpace = player.getVRTextureColorSpace();
				let tmpDepthTest = true;
				if (me._ht_node_custom_image.userData.ggSubElement.material) {
					tmpDepthTest = me._ht_node_custom_image.userData.ggSubElement.material.depthTest;
				}
				var loadedMaterial = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide, transparent: true, depthTest: tmpDepthTest, depthWrite: tmpDepthTest });
				loadedMaterial.name = 'ht_node_custom_image_subElementMaterial';
				me._ht_node_custom_image.userData.ggSubElement.material = loadedMaterial;
				me._ht_node_custom_image.userData.ggUpdatePosition();
				me._ht_node_custom_image.userData.ggText = extUrl;
				me._ht_node_custom_image.userData.setOpacity(me._ht_node_custom_image.userData.opacity);
			});
		};
		if ((hotspot) && (hotspot.customimage)) {
			var extUrl=hotspot.customimage;
		}
		el.userData.ggSetUrl(extUrl);
		material = new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide, transparent: true } );
		material.name = 'ht_node_custom_image_subElementMaterial';
		el.userData.ggSubElement = new THREE.Mesh( img.geometry, material );
		el.userData.ggSubElement.name = 'ht_node_custom_image_subElement';
		el.userData.ggSubElement.position.z = el.position.z + 0.005;
		el.add(el.userData.ggSubElement);
		el.userData.clientWidth = 50;
		el.userData.clientHeight = 50;
		el.userData.ggId="ht_node_custom_image";
		me._ht_node_custom_image.userData.ggIsActive=function() {
			if ((this.parent) && (this.parent.ggIsActive)) {
				return this.parent.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_node_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				if (me._ht_node_custom_image.ggCurrentLogicStateVisible == 0) {
			me._ht_node_custom_image.visible=((!me._ht_node_custom_image.material && Number(me._ht_node_custom_image.userData.opacity>0)) || (me._ht_node_custom_image.material && Number(me._ht_node_custom_image.material.opacity)>0))?true:false;
			player.repaint();
			me._ht_node_custom_image.userData.visible=true;
				}
				else {
			me._ht_node_custom_image.visible=false;
			player.repaint();
			me._ht_node_custom_image.userData.visible=false;
				}
			}
		}
		me._ht_node_custom_image.userData.onmouseenter=function (e) {
			player.setOverrideCursor('pointer');
			me.elementMouseOver['ht_node_custom_image']=true;
		}
		me._ht_node_custom_image.userData.onmouseleave=function (e) {
			player.setOverrideCursor('default');
			me.elementMouseOver['ht_node_custom_image']=false;
		}
		me._ht_node_custom_image.userData.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_node_custom_image.userData.clientWidth;
			var parentHeight = me._ht_node_custom_image.userData.clientHeight;
			var img = me._ht_node_custom_image.userData.ggSubElement;
			if (!img.material || !img.material.map) return;
			var imgWidth = img.material.map.image.naturalWidth;
			var imgHeight = img.material.map.image.naturalHeight;
			var aspectRatioDiv = parentWidth / parentHeight;
			var aspectRatioImg = imgWidth / imgHeight;
			if (imgWidth < parentWidth) parentWidth = imgWidth;
			if (imgHeight < parentHeight) parentHeight = imgHeight;
			var currentWidth, currentHeight;
			img.geometry.dispose();
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			img.geometry = new THREE.PlaneGeometry(currentWidth / 100.0, currentHeight / 100.0, 5, 5);
			img.geometry.name = 'ht_node_custom_image_imgGeometry';
			}
		}
		me._ht_node.add(me._ht_node_custom_image);
		me._ht_node.userData.setOpacity(1.00);
		me.elementMouseOver['ht_node']=false;
		me._ht_node.logicBlock_visible();
		me._ht_node_tooltip.userData.setOpacity(0.00);
			me._ht_node_tooltip.userData.ggUpdateText(true);
		me._ht_node_tooltip.logicBlock_alpha();
		me._ht_node_tooltip.logicBlock_zindex();
		me.elementMouseOver['ht_node_lottie']=false;
		me._ht_node_lottie.logicBlock_visible();
		me._ht_node_3d.userData.setOpacity(1.00);
		me.elementMouseOver['ht_node_3d']=false;
		me._ht_node_3d.logicBlock_visible();
		me._ht_node_3d.logicBlock_backgroundcolor();
		me._ht_node_3d.logicBlock_zindex();
		me._ht_node_3d_icon.userData.setOpacity(1.00);
		me.elementMouseOver['ht_node_3d_icon']=false;
		me._ht_node_custom_image.userData.setOpacity(1.00);
		me.elementMouseOver['ht_node_custom_image']=false;
		me._ht_node_custom_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_node_tooltip.logicBlock_alpha();
				me._ht_node_lottie.logicBlock_visible();
				me._ht_node_3d.logicBlock_visible();
				me._ht_node_custom_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_node.logicBlock_visible();
					me._ht_node_tooltip.userData.ggUpdateText();
				me._ht_node_tooltip.logicBlock_alpha();
				me._ht_node_tooltip.logicBlock_zindex();
				me._ht_node_lottie.logicBlock_visible();
				me._ht_node_3d.logicBlock_visible();
				me._ht_node_custom_image.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_node.logicBlock_visible();
				me._ht_node_tooltip.logicBlock_alpha();
				me._ht_node_lottie.logicBlock_visible();
				me._ht_node_3d.logicBlock_visible();
				me._ht_node_custom_image.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_hotspots=function() {
				me._ht_node.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_node.logicBlock_visible();
			};
			me.__obj = me._ht_node;
			me.__obj.userData.hotspot = hotspot;
			me.__obj.userData.fromSkin = true;
	};
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		el.userData=el;
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 0px;';
		hs+='left : 50px;';
		hs+='position : absolute;';
		hs+='top : 400px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_hotspots') == true)) && 
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node.style.transition='';
				if (me._ht_node.ggCurrentLogicStateVisible == 0) {
					me._ht_node.style.visibility=(Number(me._ht_node.style.opacity)>0||!me._ht_node.style.opacity)?'inherit':'hidden';
					me._ht_node.ggVisible=true;
				}
				else {
					me._ht_node.style.visibility="hidden";
					me._ht_node.ggVisible=false;
				}
			}
		}
		me._ht_node.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			me._ht_node_tooltip.logicBlock_alpha();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseleave=function (e) {
			me.elementMouseOver['ht_node']=false;
			me._ht_node_tooltip.logicBlock_alpha();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_tooltip=document.createElement('div');
		els=me._ht_node_tooltip__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_node_tooltip";
		el.ggDx=0;
		el.ggDy=-35;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text varela shadow";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) - 35px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs='';
		hs+='border : 0px solid #000000;';
		hs+='box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='font-size: 16px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_node_tooltip.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_node_tooltip.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_node_tooltip.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_node_tooltip.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_node_tooltip.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true)) && 
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_node_tooltip.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_node_tooltip.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_node_tooltip.style.transition='opacity 200ms ease 0ms';
				if (me._ht_node_tooltip.ggCurrentLogicStateAlpha == 0) {
					me._ht_node_tooltip.style.visibility=me._ht_node_tooltip.ggVisible?'inherit':'hidden';
					me._ht_node_tooltip.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_node_tooltip.style.opacity == 0.0) { me._ht_node_tooltip.style.visibility="hidden"; } }, 205);
					me._ht_node_tooltip.style.opacity=0;
				}
			}
		}
		me._ht_node_tooltip.logicBlock_zindex = function() {
			var newLogicStateZIndex;
			if (
				((player.is3dModel() == true))
			)
			{
				newLogicStateZIndex = 0;
			}
			else {
				newLogicStateZIndex = -1;
			}
			if (me._ht_node_tooltip.ggCurrentLogicStateZIndex != newLogicStateZIndex) {
				me._ht_node_tooltip.ggCurrentLogicStateZIndex = newLogicStateZIndex;
				me._ht_node_tooltip.style.transition='opacity 200ms ease 0ms';
				if (me._ht_node_tooltip.ggCurrentLogicStateZIndex == 0) {
					me._ht_node_tooltip.style.zIndex = 1;
				}
				else {
					me._ht_node_tooltip.style.zIndex = 'auto';
				}
			}
		}
		me._ht_node_tooltip.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._ht_node_tooltip);
		el=me._ht_node_lottie=document.createElement('div');
		el.ggLottie = lottie.loadAnimation({
			container: el,
			path: basePath + 'images/ht_node_lottie.json',
			autoplay: true,
			loop: true,
			rendererSettings: {
				preserveAspectRatio: 'xMinYMin meet'
			}
		});
		el.ggId="ht_node_lottie";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_lottie ";
		el.ggType='lottie';
		el.userData=el;
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_lottie.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_node_lottie.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != "")) || 
				((player.is3dModel() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_lottie.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_lottie.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_lottie.style.transition='';
				if (me._ht_node_lottie.ggCurrentLogicStateVisible == 0) {
					me._ht_node_lottie.style.visibility="hidden";
					me._ht_node_lottie.ggVisible=false;
				}
				else {
					me._ht_node_lottie.style.visibility=(Number(me._ht_node_lottie.style.opacity)>0||!me._ht_node_lottie.style.opacity)?'inherit':'hidden';
					me._ht_node_lottie.ggVisible=true;
				}
			}
		}
		me._ht_node_lottie.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._ht_node_lottie);
		el=me._ht_node_3d=document.createElement('div');
		el.ggId="ht_node_3d";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_3d.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_node_3d.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == "")) && 
				((player.is3dModel() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_3d.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_3d.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_3d.style.transition='background-color 0s';
				if (me._ht_node_3d.ggCurrentLogicStateVisible == 0) {
					me._ht_node_3d.style.visibility=(Number(me._ht_node_3d.style.opacity)>0||!me._ht_node_3d.style.opacity)?'inherit':'hidden';
					me._ht_node_3d.ggVisible=true;
				}
				else {
					me._ht_node_3d.style.visibility="hidden";
					me._ht_node_3d.ggVisible=false;
				}
			}
		}
		me._ht_node_3d.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['ht_node_3d'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._ht_node_3d.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._ht_node_3d.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._ht_node_3d.style.transition='background-color 0s';
				if (me._ht_node_3d.ggCurrentLogicStateBackgroundColor == 0) {
					me._ht_node_3d.style.backgroundColor="rgba(223,224,54,1)";
				}
				else {
					me._ht_node_3d.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me._ht_node_3d.logicBlock_zindex = function() {
			var newLogicStateZIndex;
			if (
				((me.elementMouseOver['ht_node_3d'] == true))
			)
			{
				newLogicStateZIndex = 0;
			}
			else {
				newLogicStateZIndex = -1;
			}
			if (me._ht_node_3d.ggCurrentLogicStateZIndex != newLogicStateZIndex) {
				me._ht_node_3d.ggCurrentLogicStateZIndex = newLogicStateZIndex;
				me._ht_node_3d.style.transition='background-color 0s';
				if (me._ht_node_3d.ggCurrentLogicStateZIndex == 0) {
					me._ht_node_3d.style.zIndex = 1;
				}
				else {
					me._ht_node_3d.style.zIndex = 'auto';
				}
			}
		}
		me._ht_node_3d.onmouseenter=function (e) {
			me.elementMouseOver['ht_node_3d']=true;
			me._ht_node_3d.logicBlock_backgroundcolor();
			me._ht_node_3d.logicBlock_zindex();
		}
		me._ht_node_3d.onmouseleave=function (e) {
			me.elementMouseOver['ht_node_3d']=false;
			me._ht_node_3d.logicBlock_backgroundcolor();
			me._ht_node_3d.logicBlock_zindex();
		}
		me._ht_node_3d.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_3d_icon=document.createElement('div');
		els=me._ht_node_3d_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxwYXRoIGQ9Ik0xMiA3Yy0yLjc2IDAtNSAyLjI0LTUgNXMyLjI0IDUgNSA1IDUtMi4yNCA1LTUtMi4yNC01LTUtNXptMC01QzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0wIDE4Yy00LjQyIDAtOC0zLjU4LTgtOHMzLjU4LTggOC04IDggMy41OCA4IDgtMy41OCA4LTggOHoiLz4KPC9zdmc+Cg==';
		me._ht_node_3d_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_node_3d_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_3d_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_node_3d_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_3d.appendChild(me._ht_node_3d_icon);
		me._ht_node.appendChild(me._ht_node_3d);
		el=me._ht_node_custom_image=document.createElement('div');
		els=me._ht_node_custom_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_node_custom_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_node_custom_image.ggSubElement.setAttribute('alt', player._(me._ht_node_custom_image.ggAltText));
			me._ht_node_custom_image.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_node_custom_image.ggText_untranslated = img;
			me._ht_node_custom_image.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_node_custom_image.ggSubElement.style.width = '0px';
			me._ht_node_custom_image.ggSubElement.style.height = '0px';
			me._ht_node_custom_image.ggSubElement.src='';
			me._ht_node_custom_image.ggSubElement.src=me._ht_node_custom_image.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_node_custom_image.ggText != player._(me._ht_node_custom_image.ggText_untranslated)) {
				me._ht_node_custom_image.ggText = player._(me._ht_node_custom_image.ggText_untranslated);
				me._ht_node_custom_image.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_node_custom_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_custom_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._ht_node_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_custom_image.style.transition='';
				if (me._ht_node_custom_image.ggCurrentLogicStateVisible == 0) {
					me._ht_node_custom_image.style.visibility=(Number(me._ht_node_custom_image.style.opacity)>0||!me._ht_node_custom_image.style.opacity)?'inherit':'hidden';
					me._ht_node_custom_image.ggSubElement.src=me._ht_node_custom_image.ggText;
					me._ht_node_custom_image.ggVisible=true;
				}
				else {
					me._ht_node_custom_image.style.visibility="hidden";
					me._ht_node_custom_image.ggSubElement.src='';
					me._ht_node_custom_image.ggVisible=false;
				}
			}
		}
		me._ht_node_custom_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_node_custom_image.clientWidth;
			var parentHeight = me._ht_node_custom_image.clientHeight;
			var img = me._ht_node_custom_image__img;
			var aspectRatioDiv = me._ht_node_custom_image.clientWidth / me._ht_node_custom_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_node_custom_image.ggScrollbars || currentWidth < me._ht_node_custom_image.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_node_custom_image.scrollLeft=currentWidth / 2 - me._ht_node_custom_image.clientWidth / 2;
			}
			if (!me._ht_node_custom_image.ggScrollbars || currentHeight < me._ht_node_custom_image.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_node_custom_image.scrollTop=currentHeight / 2 - me._ht_node_custom_image.clientHeight / 2;
			}
		}
		me._ht_node.appendChild(me._ht_node_custom_image);
		me.elementMouseOver['ht_node']=false;
		me._ht_node.logicBlock_visible();
		me._ht_node_tooltip.logicBlock_alpha();
		me._ht_node_tooltip.logicBlock_zindex();
		me._ht_node_lottie.logicBlock_visible();
		me.elementMouseOver['ht_node_3d']=false;
		me._ht_node_3d.logicBlock_visible();
		me._ht_node_3d.logicBlock_backgroundcolor();
		me._ht_node_3d.logicBlock_zindex();
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_node_custom_image.style.width=hotspot.customimagewidth + 'px';
			me._ht_node_custom_image.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_node_custom_image.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_node_custom_image.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_node_custom_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_node_tooltip.logicBlock_alpha();
				me._ht_node_lottie.logicBlock_visible();
				me._ht_node_3d.logicBlock_visible();
				me._ht_node_custom_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_node.logicBlock_visible();
				me._ht_node_tooltip.logicBlock_alpha();
				me._ht_node_tooltip.logicBlock_zindex();
				me._ht_node_lottie.logicBlock_visible();
				me._ht_node_3d.logicBlock_visible();
				me._ht_node_custom_image.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_node.logicBlock_visible();
				me._ht_node_tooltip.logicBlock_alpha();
				me._ht_node_lottie.logicBlock_visible();
				me._ht_node_3d.logicBlock_visible();
				me._ht_node_custom_image.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_hotspots=function() {
				me._ht_node.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_node.logicBlock_visible();
			};
			me.__div = me._ht_node;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		{
			hotspot.skinid = 'ht_node';
			hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node')) {
				hotspotTemplates['SkinHotspotClass_ht_node'] = [];
			}
			hotspotTemplates['SkinHotspotClass_ht_node'].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = {};
	}
	player.addListener('hotspotsremoved',function() {
			me.removeSkinHotspots();
	});
	me.addSkinHotspot3d=function(hotspot) {
		var hsinst = null;
		{
			hotspot.skinid = 'ht_node';
			hsinst = new SkinHotspotClass_ht_node__3d(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty('SkinHotspotClass_ht_node__3d')) {
				hotspotTemplates['SkinHotspotClass_ht_node__3d'] = [];
			}
			hotspotTemplates['SkinHotspotClass_ht_node__3d'].push(hsinst);
		}
		return (hsinst ? hsinst.__obj : null);
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = {};
	}
	player.addListener('hotspotsremoved',function() {
			me.removeSkinHotspots();
	});
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		me._menu_toggle_timer.ggUpdateConditionTimer();
		if (me._menu_toggle_timer.ggLastIsActive!=me._menu_toggle_timer.ggIsActive()) {
			me._menu_toggle_timer.ggLastIsActive=me._menu_toggle_timer.ggIsActive();
			if (me._menu_toggle_timer.ggLastIsActive) {
			} else {
				if (
					(
						((player.getVariableValue('hide_lottie_index') == Number("1")))
					)
				) {
					me._menu_close_anim.style.transition='none';
					me._menu_close_anim.style.visibility=(Number(me._menu_close_anim.style.opacity)>0||!me._menu_close_anim.style.opacity)?'inherit':'hidden';
					me._menu_close_anim.ggVisible=true;
				}
				if (
					(
						((player.getVariableValue('hide_lottie_index') == Number("1")))
					)
				) {
					me._menu_open_anim.style.transition='none';
					me._menu_open_anim.style.visibility='hidden';
					me._menu_open_anim.ggVisible=false;
				}
				if (
					(
						((player.getVariableValue('hide_lottie_index') == Number("2")))
					)
				) {
					me._menu_open_anim.style.transition='none';
					me._menu_open_anim.style.visibility=(Number(me._menu_open_anim.style.opacity)>0||!me._menu_open_anim.style.opacity)?'inherit':'hidden';
					me._menu_open_anim.ggVisible=true;
				}
				if (
					(
						((player.getVariableValue('hide_lottie_index') == Number("2")))
					)
				) {
					me._menu_close_anim.style.transition='none';
					me._menu_close_anim.style.visibility='hidden';
					me._menu_close_anim.ggVisible=false;
				}
			}
		}
		me._thumbnail_scroller_fwd.ggUpdateConditionTimer();
		me._thumbnail_scroller_bwd.ggUpdateConditionTimer();
		for (const id in hotspotTemplates) {
			const tmpl=hotspotTemplates[id];
			tmpl.forEach(function(hotspot) {
				if (hotspot.hotspotTimerEvent) {
					hotspot.hotspotTimerEvent();
				}
			});
		};
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	hs='.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; -webkit-text-size-adjust: 100%; } .ggmarkdown p { margin-top: 0px; } .ggmarkdown a { color: #aaa; } .ggdefaulthotspot { font-family: "Varela Round", sans-serif; font-size: 16px; -webkit-filter: drop-shadow( 0px 0px 3px black); filter: drop-shadow( 0px 0px 3px black); } .ggmarkdown h1:first-child, .ggmarkdown h2:first-child, .ggmarkdown h3:first-child, .ggmarkdown h4:first-child { margin-top: 0px; } .ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 1em; margin-bottom: 0.2em; } .ggmarkdown { white-space: normal; } .shadow { -webkit-filter: drop-shadow( 0px 0px 3px black); filter: drop-shadow( 0px 0px 3px black); will-change: transform; } .title_shadow { -webkit-filter: drop-shadow( 0px 0px 5px rgba(0, 0, 0, 0.6)); filter: drop-shadow( 0px 0px 5px rgba(0, 0, 0, 0.6)); will-change: transform; } .noto_sans { font-family: "Noto Sans", sans-serif; } .varela { font-family: "Varela Round", sans-serif; } .ggskin_text>div::-webkit-scrollbar { width: 5px; } .ggskin_text>div { scrollbar-width: thin; }@font-face { font-family: "Varela Round"; font-style: normal; font-weight: 400; src: local(""), url("$(skinbase)fonts/varela-round-latin-regular.woff2") format("woff2"); } @font-face { font-family: "Noto Sans"; font-style: normal; font-weight: 300; src: local(""), url("$(skinbase)fonts/noto-sans-latin-300.woff2") format("woff2"); } @font-face { font-family: "Noto Sans"; font-style: normal; font-weight: 600; src: local(""), url("$(skinbase)fonts/noto-sans-latin-600.woff2") format("woff2"); }';
	hs = hs.replace(/\$\(skinbase\)/g,basePath);
	style.appendChild(document.createTextNode(hs));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		if (me.fontsLoaded < 3) {
			me.updateSize(me.divSkin);
			me.fontsLoaded++;
		}
	}
};
function onYouTubeIframeAPIReady() {
	setTimeout(function(){
		skin.ggYoutubeApiLoaded = true;
		var videoElements = document.querySelectorAll('.ggskin_video');
		for (var i=0; i<videoElements.length; i++) {
			if (videoElements[i].ggYoutubeApiReady) {
				videoElements[i].ggYoutubeApiReady();
			}
		}
	}, 1000);
}