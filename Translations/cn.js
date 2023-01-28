_global.translation["cn"] = {
  //HTMLCSAuditor.js
  auditor_success_criterion: "成功标准",
  auditor_suggested_techniques: "建议技巧",
  //1_1_1.js
  "1_1_1_H30.2":
    "Img 元素是链接的唯一内容，但是缺少了 alt 文本，alt 文本应该描述链接的用途",
  "1_1_1_H67.1": "alt 文本为空的 Img 元素必须具有缺席或空 title 属性",
  "1_1_1_H67.2": "标记Img元素，使其被辅助技术忽略.",
  "1_1_1_H37": "缺少alt属性的Img元素。使用alt属性指定一个短的替代文本",
  "1_1_1_G94.Image":
    "确保img元素的alt文本具有与图像相同的用途和显示相同的信息。",
  "1_1_1_H36":
    "图像提交按钮缺少alt属性。使用alt属性指定描述按钮函数的文本替代方案。",
  "1_1_1_G94.Button": "确保图像提交按钮的alt文本标识按钮的用途。",
  "1_1_1_H24":
    "图像映射中缺少alt属性的Area元素。每个area元素必须有一个描述图像映射区域功能的文本选项。",
  "1_1_1_H24.2": "确保area元素的文本替代与它引用的图像映射图像部分的用途相同。",
  "1_1_1_G73,G74":
    "如果无法在短文本替代中完整描述此图像，请确保也提供长文本替代，例如在正文文本中或通过链接。",
  "1_1_1_H2.EG5": "链接内的Img元素不能使用与链接的文本内容重复的alt文本。",
  "1_1_1_H2.EG4":
    "当链接旁边的链接包含链接文本时，链接内的Img元素的alt文本为空或缺失。考虑合并这些链接。",
  "1_1_1_H2.EG3": "链接内的Img元素不能使用与旁边的文本链接内容重复的alt文本。",
  "1_1_1_H53,ARIA6": "对象元素必须在耗尽所有其他替代后包含文本替代。",
  "1_1_1_G94,G92.Object,ARIA6":
    "检查是否可以为具有相同目的和显示相同信息的非文本内容提供短文本(如果合适，也可以是长文本)替代方案。",
  "1_1_1_H35.3":
    "对于不支持Applet元素的浏览器，Applet元素必须在元素的主体中包含一个文本替代。",
  "1_1_1_H35.2":
    "Applet元素必须包含alt属性，以便为支持该元素但无法加载Applet的浏览器提供文本替代。",
  "1_1_1_G94,G92.Applet":
    "检查是否可以为具有相同目的和显示相同信息的非文本内容提供短文本(如果合适，也可以是长文本)替代方案。",

  //1_2_1.js
  "1_2_1_G158":
    "如果此嵌入式对象仅包含预录制的音频，且不作为文本内容的替代提供，请检查是否提供了替代文本版本。",
  "1_2_1_G159,G166":
    "如果此嵌入式对象仅包含预录制的视频，且不作为文本内容的替代提供，则请检查是否提供了替代文本版本，或提供了表示等效信息的音轨。",

  //1_2_2.js
  "1_2_2_G87,G93":
    "如果此嵌入式对象包含预录制的同步媒体，且未作为文本内容的替代提供，请检查是否为音频内容提供了标题。",

  //1_2_3.js
  "1_2_3_G69,G78,G173,G8":
    "如果这个嵌入的对象包含预先录制的同步媒体，并且没有作为文本内容的替代提供，请检查是否提供了视频的音频描述和/或内容的替代文本版本。",

  //1_2_4.js
  "1_2_4_G9,G87,G93":
    "如果此嵌入式对象包含同步媒体，请检查是否为实时音频内容提供标题。",

  //1_2_5.js
  "1_2_5_G78,G173,G8":
    "如果此嵌入式对象包含预录制的同步媒体，请检查是否为其视频内容提供了音频描述。",

  //1_2_6.js
  "1_2_6_G54,G81":
    "如果此嵌入式对象包含预录制的同步媒体，请检查是否为其音频提供了手语解释。",

  //1_2_7.js
  "1_2_7_G8":
    "如果这个嵌入的对象包含同步媒体，并且前台音频中的暂停不足以让音频描述传递预录制视频的感觉，那么请检查是否提供了扩展的音频描述，无论是通过脚本还是其他版本。",

  //1_2_8.js
  "1_2_8_G69,G159":
    "如果这个嵌入的对象包含预先录制的同步媒体或视频内容，请检查是否提供了内容的另一个文本版本。",

  //1_2_9.js
  "1_2_9_G150,G151,G157":
    "如果这个嵌入的对象包含实时音频内容，请检查是否提供了内容的另一个文本版本。",

  //1_3_1.js
  "1_3_1_F92,ARIA4": "此元素的角色是“表示”，但包含具有语义意义的子元素。",
  "1_3_1_H44.NonExistent": "此标签的“for”属性包含文档中不存在的ID。",
  "1_3_1_H44.NonExistentFragment":
    "此标签的“for”属性包含文档片段中不存在的ID。",
  "1_3_1_H44.NotFormControl":
    '这个label的 "for"属性包含一个非表单控件元素的ID。确保您为预期的元素输入了正确的ID。',
  "1_3_1_H65":
    "此表单控件的“title”属性为空或仅包含空格。为了标签测试的目的，它将被忽略。",
  "1_3_1_ARIA6":
    "此表单控件具有“aria-label”属性，该属性为空或仅包含空格。为了标签测试的目的，它将被忽略。",
  //{{id}} will be replace with element ID:
  "1_3_1_ARIA16,ARIA9":
    '此表单控件包含一个aria-labelledby属性, 但是它包含一个ID"{{id}}" 它不存在于元素中。出于标签测试的目的，aria-labelledby属性将被忽略。',
  "1_3_1_F68.Hidden":
    "这个隐藏的表单字段以某种方式进行了标记。不需要为隐藏的表单字段添加标签。",
  "1_3_1_F68.HiddenAttr":
    "这个表单字段打算隐藏(使用“hidden”属性)，但也以某种方式标记。不需要为隐藏的表单字段添加标签。",
  "1_3_1_F68":
    "这个表单字段应该以某种方式进行标记。使用label元素(带有“for”属性或围绕表单字段)，或者适当使用“title”、“aria-label”或“aria-labelledby”属性。",
  "1_3_1_H49.": "在HTML5中使用的表示标记已经过时。",
  "1_3_1_H49.AlignAttr": "对齐属性。",
  "1_3_1_H49.Semantic":
    "语义标记应该用于标记强调的或特殊的文本，以便通过编程确定文本。",
  "1_3_1_H49.AlignAttr.Semantic":
    "语义标记应该用于标记强调的或特殊的文本，以便通过编程确定文本。",
  "1_3_1_H42": "如果要将此内容用作标题，则应使用标题标记。",
  "1_3_1_H63.3":
    "表单元格的作用域属性无效。有效值是row、col、rowgroup或colgroup。",
  "1_3_1_H63.2":
    "td元素上作为其他元素标题的作用域属性在HTML5中已经过时了。使用th元素代替。",
  "1_3_1_H43.ScopeAmbiguous":
    "元素的作用域属性在具有多级标题的表中是不明确的。在td元素上使用headers属性。",
  "1_3_1_H43.IncorrectAttr":
    "此td元素上不正确的headers属性。期望的“{{expected}}”，但发现“{{actual}}”",
  "1_3_1_H43.IncorrectAttrNotice":
    "Check that headers attribute on td element is correct.",
  "1_3_1_H43.HeadersRequired":
    "td元素与其关联的th元素之间的关系没有定义。由于该表有多个层次的th元素，因此必须在td元素上使用headers属性。",
  "1_3_1_H43.MissingHeaderIds":
    "并非该表中的所有th元素都包含id属性。这些单元格应该包含id，以便td元素的header属性可以引用它们。",
  "1_3_1_H43.MissingHeadersAttrs":
    "并非此表中的所有td元素都包含header属性。每个headers属性应该列出与该单元格关联的所有th元素的id。",
  "1_3_1_H43,H63":
    "td元素与其关联的th元素之间的关系没有定义。要么在th元素上使用scope属性，要么在td元素上使用headers属性。",
  "1_3_1_H63.1":
    "并非该表中的所有th元素都具有范围属性。这些单元格应该包含一个范围属性来标识它们与td元素的关联。",
  "1_3_1_H73.3.LayoutTable":
    "此表似乎用于布局，但包含摘要属性。布局表不能包含摘要属性，如果提供，则必须为空。",
  "1_3_1_H39,H73.4":
    "如果此表是一个数据表，并且同时具有summary属性和标题元素，则该摘要不应复制标题。",
  "1_3_1_H73.3.Check":
    "如果该表是一个数据表，请检查summary属性是否描述了该表的组织或解释了如何使用该表。",
  "1_3_1_H73.3.NoSummary":
    "如果这个表是一个数据表，可以考虑使用table元素的summary属性来概述这个表。",
  "1_3_1_H39.3.LayoutTable":
    "此表似乎用于布局，但包含标题元素。布局表不能包含标题。",
  "1_3_1_H39.3.Check":
    "如果这个表是一个数据表，请检查标题元素是否准确地描述了这个表。",
  "1_3_1_H39.3.NoCaption":
    "如果这个表是一个数据表，可以考虑使用表元素的标题元素来标识这个表。",
  "1_3_1_H71.NoLegend":
    "Fieldset不包含传奇元素。所有字段集都应该包含一个描述字段组描述的legend元素。",
  "1_3_1_H85.2": "如果此选择列表包含相关选项组，则应将其与optgroup分组。",
  "1_3_1_H71.SameName":
    "如果这些单选按钮或复选框需要进一步的组级描述，则它们应该包含在fieldset元素中。",
  "1_3_1_H48.1":
    "这个内容看起来像是使用纯文本模拟一个无序列表。如果是这样，用ul元素标记此内容将向文档添加适当的结构信息。",
  "1_3_1_H48.2":
    "这个内容看起来像是使用纯文本模拟有序列表。如果是这样，用ol元素标记此内容将向文档添加适当的结构信息。",
  "1_3_1_G141_a":
    "标题结构没有逻辑嵌套。这个h{{headingNum}}元素似乎是主要的文档标题，因此应该是h1元素。",
  "1_3_1_G141_b":
    "标题结构没有逻辑嵌套。这个h{{headingNum}}元素应该是一个正确嵌套的h{{properHeadingNum}}。",
  "1_3_1_H42.2": "没有内容的标题标签。不打算作为标题的文本不应该用标题标记。",
  "1_3_1_H48": "如果此元素包含导航部分，建议将其标记为列表。",
  "1_3_1_LayoutTable":
    "此表似乎是一个布局表。如果要将其改为数据表，请确保使用th元素标识头单元格。",
  "1_3_1_DataTable":
    "这个表似乎是一个数据表。如果要将其改为布局表，请确保没有th元素，没有摘要或标题。",

  //1_3_2.js
  "1_3_2_G57": "当线性化时，检查内容是否按有意义的顺序排列，例如禁用样式表时。",

  //1_3_3.js
  "1_3_3_G96":
    "在提供理解内容的指令时，不要仅依赖感官特征(如形状、大小或位置)来描述对象。",

  //1_4_1.js
  "1_4_1_G14,G18":
    "检查仅使用颜色传达的任何信息在文本或其他视觉线索中是否可用。",

  //1_4_2.js
  "1_4_2_F23":
    "如果此元素包含自动播放超过3秒的音频，请检查是否具有暂停、停止或静音音频的功能。",

  //1_4_3_F24.js
  "1_4_3_F24.BGColour":
    "检查此元素是否具有继承的前景颜色，以补充相应的内联背景颜色或图像。",
  "1_4_3_F24.FGColour":
    "检查此元素是否具有继承的背景颜色或图像，以补充相应的内联前景颜色。",

  //1_4_3.js
  "1_4_3_G18_or_G145.Abs":
    "此元素绝对定位，无法确定背景颜色。确保文本与背景中所有被覆盖部分的对比度至少为{{required}}:1。",
  "1_4_3_G18_or_G145.BgImage":
    "这个元素的文本被放置在背景图像上。确保文本与图像所有覆盖部分的对比度至少为{{required}}:1。",
  "1_4_3_G18_or_G145.Alpha":
    "此元素的文本或背景包含透明度。确保文本和背景之间的对比度至少为{{required}}:1。",
  "1_4_3_G18_or_G145.Fail":
    "此元素在此一致性级别上的对比度不足。期望的对比度比至少为{{required}}:1，但是该元素中的文本的对比度比为{{value}}:1。",
  "1_4_3_G18_or_G145.Fail.Recomendation": "建议:改变",
  "1_4_3_G18_or_G145.Fail.Recomendation.Text": "文本颜色",
  "1_4_3_G18_or_G145.Fail.Recomendation.Background": "背景",

  //1_4_4.js
  "1_4_4_G142":
    "检查文本可以在不使用辅助技术的情况下调整大小，最高可达200%，而不会丢失内容或功能。",

  //1_4_5.js
  "1_4_5_G140,C22,C30.AALevel":
    "如果所使用的技术可以达到视觉呈现的效果，请检查文字是用来传达信息而不是文字的图像，除非文字的图像对所传达的信息是必不可少的，或者可以根据用户的需求进行视觉定制。",

  //1_4_6.js
  "1_4_6_G18_or_G17.Abs":
    "此元素绝对定位，无法确定背景颜色。确保文本与背景中所有被覆盖部分的对比度至少为{{required}}:1。",
  "1_4_6_G18_or_G17.BgImage":
    "这个元素的文本被放置在背景图像上。确保文本与图像所有覆盖部分的对比度至少为{{required}}:1。",
  "1_4_6_G18_or_G17.Fail":
    "此元素在此一致性级别上的对比度不足。期望的对比度比至少为{{required}}:1，但是该元素中的文本的对比度比为{{value}}:1。",
  "1_4_6_G18_or_G17.Fail.Recomendation": "建议:改变",
  "1_4_6_G18_or_G17.Fail.Recomendation.Text": "文本颜色",
  "1_4_6_G18_or_G17.Fail.Recomendation.Background": "背景",

  //1_4_7.js
  "1_4_7_G56":
    "对于这个元素中主要是语音(如旁白)的预先录制的纯音频内容，任何背景声音都应该是可哑的，或者至少比语音低20分贝(或大约4倍)。",

  //1_4_8.js
  "1_4_8_G148,G156,G175":
    "检查是否有一种机制可供用户通过Web页面或浏览器为文本块选择前景和背景颜色。",
  "1_4_8_H87,C20":
    "检查是否存在一种机制，将文本块的宽度减少到不超过80个字符(或中文、日文或韩文的40个字符)。",
  "1_4_8_C19,G172,G169":
    "检查文本块是否完全对齐——也就是说，在左边缘和右边缘——或者存在一种删除完全对齐的机制。",
  "1_4_8_G188,C21":
    "检查文本块中的行间距在段落中至少为150%，段落间距至少为行间距的1.5倍，或者有实现这一点的机制。",
  "1_4_8_H87,G146,C26":
    "检查文本是否可以在不使用辅助技术的情况下调整大小至200%，而不需要用户在全屏窗口上水平滚动。",

  //1_4_9.js
  "1_4_9_G140,C22,C30.NoException":
    "检查文本的图像是否仅用于纯装饰，或者文本的特定表示对于所传递的信息是必不可少的。",

  //2_1_1.js
  "2_1_1_G90": "确保事件处理程序为此元素提供的功能可通过键盘获得",
  "2_1_1_SCR20.DblClick": "确保通过键盘双击此元素提供的功能可用。",
  "2_1_1_SCR20.MouseOver":
    "确保通过键盘在此元素上单击所提供的功能可用;例如，使用焦点事件。",
  "2_1_1_SCR20.MouseOut":
    "确保鼠标移出此元素所提供的功能可通过键盘获得;例如，使用blur事件。",
  "2_1_1_SCR20.MouseMove": "确保通过键盘移动此元素上的鼠标所提供的功能可用。",
  "2_1_1_SCR20.MouseDown":
    "确保通过键盘在此元素上按下鼠标所提供的功能可用;例如，使用keydown事件。",
  "2_1_1_SCR20.MouseUp":
    "确保通过键盘在此元素上单击鼠标所提供的功能可用;例如，使用keyup事件。",

  //2_1_2.js
  "2_1_2_F10": "检查这个applet或插件是否能够在使用键盘时将焦点从自身移开。",

  //2_2_1.js
  "2_2_1_F40.2":
    "元刷新标记用于重定向到另一个页面，时间限制不为零。用户无法控制这个时间限制。",
  "2_2_1_F41.2": "用于刷新当前页面的元刷新标记。用户无法控制此刷新的时间限制。",

  //2_2_2.js
  "2_2_2_SCR33,SCR22,G187,G152,G186,G191":
    "如果内容的任何部分移动、滚动或闪烁超过5秒，或自动更新，请检查是否有可用的机制来暂停、停止或隐藏内容。",
  "2_2_2_F4": "确保有一种机制可以在5秒内停止这个闪烁元素。",
  "2_2_2_F47": "Blink元素不能满足眨眼信息在5秒内停止的要求。",

  //2_2_3.js
  "2_2_3_G5":
    "除了非交互式同步媒体和实时事件外，检查时间不是事件或活动的重要组成部分。",

  //2_2_4.js
  "2_2_4_SCR14":
    "检查所有中断(包括对内容的更新)都可以被用户延迟或抑制，紧急情况除外。",

  //2_2_5.js
  "2_2_5_G105,G181":
    "如果此Web页面是具有非活动时间限制的一组Web页面的一部分，请检查经过身份验证的用户在重新进行身份验证后是否可以继续该活动而不会丢失数据。",

  //2_3_1.js
  "2_3_1_G19,G176":
    "检查内容的任何组件在任何1秒周期内闪烁的次数都不超过3次，或者任何闪烁区域的大小都不够小。",

  //2_3_2.js
  "2_3_2_G19": "检查内容的任何组件在任何1秒内闪烁的次数都不超过3次。",

  //2_4_1.js
  "2_4_1_H64.1": "Iframe元素需要一个非空的title属性来标识框架。",
  "2_4_1_H64.2": "检查此元素的title属性是否包含标识框架的文本。",
  "2_4_1_G1,G123,G124,H69":
    "确保可以绕过任何通用导航元素;例如，通过使用跳过链接、头元素或ARIA地标角色。",
  "2_4_1_G1,G123,G124.NoSuchID":
    "这个链接指向文档中一个名为“{{id}}”的锚，但是不存在同名的锚。",
  "2_4_1_G1,G123,G124.NoSuchIDFragment":
    "这个链接指向文档中一个名为“{{id}}”的锚，但是在测试的片段中不存在同名的锚。",

  //2_4_2.js
  "2_4_2_H25.1.NoHeadEl": "没有标题部分可以放置描述性标题元素。",
  "2_4_2_H25.1.NoTitleEl": "应该使用head部分中的非空title元素为文档提供标题。",
  "2_4_2_H25.1.EmptyTitle": "标题部分中的title元素应该是非空的。",
  "2_4_2_H25.2": "检查title元素是否描述了文档。",

  //2_4_3.js
  "2_4_3_H4.2":
    "如果使用tabindex，请检查tabindex属性指定的选项卡顺序是否遵循内容中的关系。",

  //2_4_4.js
  "2_4_4_H77,H78,H79,H80,H81,H33":
    "检查链接文本与以编程方式确定的链接上下文或其title属性相结合，以确定链接的用途。",
  "2_4_4_H77,H78,H79,H80,H81":
    "检查链接文本与以编程方式确定的链接上下文的组合是否标识了链接的用途。",

  //2_4_5.js
  "2_4_5_G125,G64,G63,G161,G126,G185":
    "如果此Web页面不是线性流程的一部分，请检查在一组Web页面中定位此Web页面的方法是否不止一种。",

  //2_4_6.js
  "2_4_6_G130,G131": "检查标题和标签是否描述了主题或目的。",

  //2_4_7.js
  "2_4_7_G149,G165,G195,C15,SCR31":
    "检查至少有一种操作模式，可以将键盘焦点指示器可视地定位在用户界面控件上。",

  //2_4_8.js
  "2_4_8_H59.1": "链接元素只能位于文档的头部部分。",
  "2_4_8_H59.2a": "Link元素缺少标识链接类型的非空rel属性。",
  "2_4_8_H59.2b": "Link元素缺少一个指向被链接资源的非空href属性。",

  //2_4_9.js
  "2_4_9_H30": "检查链接的文本是否描述了链接的目的。",

  //3_1_1.js
  "3_1_1_H57.2": "html元素应该具有描述文档语言的lang或xml:lang属性。",
  "3_1_1_H57.3.Lang": "文档元素的lang属性中指定的语言似乎不是格式良好的。",
  "3_1_1_H57.3.XmlLang":
    "文档元素的xml:lang属性中指定的语言似乎不是格式良好的。",

  //3_1_2.js
  "3_1_2_H58":
    "确保在适当的情况下，使用元素上的lang和/或xml:lang属性标记语言中的任何更改。",
  "3_1_2_H58.1.Lang": "此元素的lang属性中指定的语言似乎不是格式良好的。",
  "3_1_2_H58.1.XmlLang": "此元素的xml:lang属性中指定的语言似乎不是格式良好的。",

  //3_1_3.js
  "3_1_3_H40,H54,H60,G62,G70":
    "检查是否有一种机制可用于识别以不寻常或受限方式使用的单词或短语的特定定义，包括习语和行话。",

  //3_1_4.js
  "3_1_4_G102,G55,G62,H28,G97": "检查是否有识别缩写的展开形式或含义的机制。",

  //3_1_5.js
  "3_1_5_G86,G103,G79,G153,G160":
    "如果内容要求阅读能力高于初中教育水平，则应提供补充内容或替代版本。",

  //3_1_6.js
  "3_1_6_H62.1.HTML5": "Ruby元素不包含rt元素，rt元素包含其正文的发音信息。",
  "3_1_6_H62.1.XHTML11":
    "Ruby元素不包含rt元素，rt元素包含rb元素内文本的发音信息。",
  "3_1_6_H62.2":
    "Ruby元素不包含rp元素，rp元素为不支持Ruby文本的浏览器提供额外的标点符号。",

  //3_2_1.js
  "3_2_1_G107": "检查当这个输入字段接收到焦点时，没有发生上下文更改。",

  //3_2_2.js
  "3_2_2_H32.2":
    "此表单不包含提交按钮，这将为无法使用键盘提交表单的用户带来问题。提交按钮是类型属性为“Submit”或“image”的输入元素，或类型为“Submit”或省略/无效的按钮元素。",

  //3_2_3.js
  "3_2_3_G61":
    "检查在多个Web页面上重复的导航机制在每次重复时都以相同的相对顺序出现，除非用户发起了更改。",

  //3_2_4.js
  "3_2_4_G197":
    "检查在此Web页面中具有相同功能的组件是否在其所属的Web页面集中一致地标识。",

  //3_2_5.js
  "3_2_5_H83.3":
    "检查此链接的链接文本是否包含指示该链接将在新窗口中打开的信息。",

  //3_3_1.js
  "3_3_1_G83,G84,G85":
    "如果在此表单中自动检测到输入错误，请检查错误项是否已标识，并以文本形式向用户描述错误。",

  //3_3_2.js
  "3_3_2_G131,G89,G184,H90":
    "检查此表单中是否为用户输入提供了描述性标签或说明(包括所需字段)。",

  //3_3_3.js
  "3_3_3_G177":
    "请检查此表单是否提供了对用户输入错误的建议更正，除非它会危及内容的安全性或用途。",

  //3_3_4.js
  "3_3_4_G98,G99,G155,G164,G168.LegalForms":
    "如果此表单将用户绑定到财务或法律承诺、修改/删除用户可控制的数据或提交测试响应，请确保提交是可逆的、检查输入错误和/或由用户确认的。",

  //3_3_5.js
  "3_3_5_G71,G184,G193":
    "在web页面和/或控件级别检查此表单是否提供上下文敏感的帮助。",

  //3_3_6.js
  "3_3_6_G98,G99,G155,G164,G168.AllForms":
    "请检查提交到此表单的内容是否可逆，是否有输入错误，以及/或是否得到用户的确认。",

  //4_1_1.js
  "4_1_1_F77": "在网页上找到重复的id属性值“{{id}}”。",

  //4_1_2.js
  "4_1_2_H91.A.Empty":
    "锚元素，具有ID，但没有href或链接文本。考虑将其ID移动到父元素或附近的元素。",
  "4_1_2_H91.A.EmptyWithName":
    "锚元素，具有名称属性，但没有href或链接文本。考虑将name属性移动为父元素或附近元素的ID。",
  "4_1_2_H91.A.EmptyNoId": "没有链接内容、没有名称和/或ID属性的锚元素。",
  "4_1_2_H91.A.NoHref":
    "锚元素不应用于定义页内链接目标。如果不将ID用于其他目的(如CSS或脚本)，可以考虑将其移动到父元素。",
  "4_1_2_H91.A.Placeholder":
    "找到带有链接内容的锚元素，但未提供href、ID或name属性。",
  "4_1_2_H91.A.NoContent": "找到具有有效href属性的锚元素，但未提供链接内容。",
  "4_1_2_input_element": "输入元素",
  "4_1_2_role_of_button": "元素的作用是“按钮”，但是",
  "4_1_2_element_content": "元素内容",
  "4_1_2_element": "元素",
  "4_1_2_msg_pattern":
    "这个{{msgNodeType}}没有可访问性API可用的名称。有效的名称是:{{builtAttrs}}。",
  "4_1_2_msg_pattern2": "这个{{msgNodeType}}没有可访问性API可用的值。",
  "4_1_2_msg_add_one": "通过向元素添加内容来添加一个。",
  "4_1_2_msg_pattern3":
    "这个{{msgNodeType}}没有初始选择的选项。根据HTML版本的不同，公开给可访问性API的值可能是未定义的。",
  "4_1_2_value_exposed_using_attribute":
    "使用{{requiredValue}}属性公开一个值。",
  "4_1_2_value_exposed_using_element": "使用{{requiredValue}}元素公开一个值。",
};
