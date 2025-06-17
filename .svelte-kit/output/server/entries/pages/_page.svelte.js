import { d as current_component, c as pop, p as push, e as stringify, f as ensure_array_like, h as head } from "../../chunks/index.js";
import { e as escape_html } from "../../chunks/escaping.js";
import "clsx";
const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  if (value == null || !value && is_boolean || value === "" && name === "class") return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
function onDestroy(fn) {
  var context = (
    /** @type {Component} */
    current_component
  );
  (context.d ??= []).push(fn);
}
function BackTop($$payload, $$props) {
  push();
  $$payload.out += `<button aria-label="Scroll to top"${attr("class", `btn btn-circle fixed z-50 transition-opacity ${stringify("hidden")} bottom-5 right-5 bg-base-100/80 hover:bg-base-200`)}><span class="icon-[akar-icons--align-to-top]" style="width: 26px; height: 26px;"></span></button>`;
  pop();
}
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  let searchResults = [];
  let formatedData = formatData(data.data);
  let flattenedData = flattenData(formatedData);
  onDestroy(() => {
  });
  function formatData(data2) {
    if (!data2) return [];
    let result = formatDataWithPath(data2, "");
    result = sortDataByType(result);
    return result;
    function formatDataWithPath(items, parentPath = "") {
      if (!Array.isArray(items)) return items;
      return items.map((item) => {
        if (item.type === "folder" && Array.isArray(item.children)) {
          const hasChildFolders = item.children.some((child) => child.type === "folder");
          return {
            ...item,
            path: parentPath,
            hasChildren: hasChildFolders,
            children: formatDataWithPath(item.children, parentPath ? [parentPath, item.title].join("%") : item.title)
          };
        }
        return { ...item, path: parentPath };
      });
    }
    function sortDataByType(items) {
      if (!Array.isArray(items)) return items;
      const sortedItems = [...items].sort((a, b) => {
        if (a.type === "folder" && b.type !== "folder") return -1;
        if (b.type === "folder" && a.type !== "folder") return 1;
        return a.title.localeCompare(b.title);
      });
      return sortedItems.map((item) => {
        if (item.type === "folder" && Array.isArray(item.children)) {
          return {
            ...item,
            children: sortDataByType(item.children)
          };
        }
        return item;
      });
    }
  }
  function flattenData(data2) {
    if (!Array.isArray(data2)) return [];
    const flattened = [];
    function flatten(items) {
      for (const item of items) {
        if (item.type === "folder" && item.children) {
          flatten(item.children);
        } else {
          flattened.push(item);
        }
      }
    }
    flatten(data2);
    return flattened;
  }
  let searchTerm = "";
  let selectedFolder = [];
  let filteredResults = getFilteredResults();
  function highlightText(text, matches) {
    if (!matches || matches.length === 0) return text;
    let result = "";
    let lastIndex = 0;
    const sortedMatches = [...matches].sort((a, b) => a[0] - b[0]);
    sortedMatches.forEach(([start, end]) => {
      result += text.slice(lastIndex, start);
      result += `<span class="bg-accent">${text.slice(start, end + 1)}</span>`;
      lastIndex = end + 1;
    });
    result += text.slice(lastIndex);
    return result;
  }
  function getFilteredResults() {
    if (selectedFolder.length === 0) {
      if (searchResults.length > 0) {
        return searchResults;
      }
      return flattenedData;
    }
    let folder = formatedData;
    for (let i = 0; i < selectedFolder.length && folder; i++) {
      const element = selectedFolder[i];
      folder = folder.find((item) => item.title === element);
      folder = folder?.children || [];
    }
    return folder || [];
  }
  let isAsideVisible = false;
  const each_array = ensure_array_like(formatedData);
  const each_array_1 = ensure_array_like(selectedFolder);
  const each_array_2 = ensure_array_like(filteredResults);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Collector</title>`;
  });
  $$payload.out += `<nav class="fixed top-0 z-50 w-full border-b border-base-300 bg-base-100/90 shadow-sm"><div class="px-3 py-3 lg:px-5 lg:pl-3"><div class="flex items-center justify-between"><div class="flex items-center justify-start rtl:justify-end"><label class="swap swap-rotate focus:outline-none sm:hidden"><input type="checkbox"${attr("checked", isAsideVisible, true)}> <span class="swap-off icon-[mynaui--menu-solid] fill-current" style="width: 32px; height: 32px;"></span> <span class="swap-on icon-[iconamoon--close-light] fill-current" style="width: 32px; height: 32px;"></span></label> <a href="#" class="group ms-2 flex md:me-24"><img src="./favicon.svg" class="me-2 w-20 sm:w-8" alt="Collector Logo"> <span class="text-md hidden self-center font-semibold sm:block">Collector</span></a></div> <div class="flex items-center justify-end"><label class="input input-bordered flex h-10 items-center"><span class="icon-[fluent--search-12-regular]" style="width: 24px; height: 24px;"></span> <input id="searchInput" type="text" placeholder="Type / to search" class="input input-ghost w-full max-w-xs focus:border-none"${attr("value", searchTerm)}></label></div> <div class="flex items-center"><div class="ms-3 flex items-center"><label class="swap swap-rotate" data-toggle-theme="dark" data-act-class="swap-active"><span class="swap-off icon-[prime--sun]" style="width: 32px; height: 32px;"></span> <span class="swap-on icon-[solar--moon-bold-duotone]" style="width: 32px; height: 32px;"></span></label></div> <div><a href="https://github.com/wefantasy/collector" target="_blank" aria-label="github" class="ms-3 flex items-center"><span class="icon-[octicon--mark-github-24]" style="width: 30px; height: 30px;"></span></a></div></div></div></div></nav> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <aside${attr("class", `fixed left-0 top-0 z-40 h-screen ${stringify("-translate-x-full")} border-r border-base-300 bg-base-100 pt-20 transition-transform sm:w-48 sm:translate-x-0`)} aria-label="Sidebar"><div class="h-full overflow-y-auto px-3 pb-4"><ul class="menu space-y-1"><li><a href="#"${attr("class", `group flex cursor-pointer items-center hover:bg-base-200 ${stringify(selectedFolder.join("%") === "" ? "bg-base-200" : "")}`)}><span class="icon-[clarity--folder-open-line]" style="width: 20px; height: 20px;"></span> <span>All Item</span></a></li> <!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let item = each_array[$$index];
    if (item.type === "folder") {
      $$payload.out += "<!--[-->";
      $$payload.out += `<li><a href="#"${attr("class", `group flex cursor-pointer items-center hover:bg-base-200 ${stringify(selectedFolder.join("%") === item.title ? "bg-base-200" : "")}`)}><span class="icon-[clarity--folder-open-solid]" style="width: 20px; height: 20px;"></span> <span>${escape_html(item.title)}</span></a></li>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></ul></div></aside> <div class="p-4 sm:ml-48"><div class="mt-14 rounded-lg p-4"><div class="breadcrumbs text-sm text-secondary"><ul><li><a href="#" class="cursor-pointer">Root</a></li> <!--[-->`;
  for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
    let item = each_array_1[i];
    $$payload.out += `<li><a href="#" class="cursor-pointer">${escape_html(item)}</a></li>`;
  }
  $$payload.out += `<!--]--></ul></div> <div class="mb-4 grid grid-cols-2 gap-2 sm:grid-cols-4 md:grid-cols-8 md:gap-4"><!--[-->`;
  for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
    let item = each_array_2[$$index_2];
    if (searchResults.length > 0) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="col-span-2 rounded-lg border border-base-200 bg-base-100 p-3"><a class="group flex cursor-pointer items-center gap-2"${attr("href", item.item.url)} target="_blank"><img${attr("src", `https://www.google.com/s2/favicons?domain=${item.item.url}&sz=32`)} alt="favicon" class="h-8 w-8 rounded-full transition-transform duration-500 group-hover:rotate-[360deg]"> <div class="min-w-0 flex-1"><h2 class="text-md overflow-hidden truncate whitespace-nowrap">${html(item.matches?.find((m) => m.key === "title") ? highlightText(item.item.title, item.matches.find((m) => m.key === "title").indices) : item.item.title)}</h2> <p class="overflow-hidden truncate whitespace-nowrap text-sm text-secondary">${escape_html(item.item.url)}</p></div></a> <div class="tooltip"${attr("data-tip", item.item.description)}><p class="mt-2 line-clamp-3 text-justify text-sm text-secondary underline decoration-dotted underline-offset-2">${html(item.matches?.find((m) => m.key === "description") ? highlightText(item.item.description, item.matches.find((m) => m.key === "description").indices) : item.item.description)}</p></div></div>`;
    } else if (item.type === "folder") {
      $$payload.out += "<!--[1-->";
      $$payload.out += `<a class="group col-span-1 flex cursor-pointer flex-col items-center justify-center" href="#"><span class="icon-[ph--folder-open-fill] transition-transform duration-300 group-hover:scale-110" style="width: 100px; height: 100px;"></span> <p class="w-full overflow-hidden truncate whitespace-nowrap text-center text-sm text-secondary">${escape_html(item.title)}</p></a>`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `<div class="col-span-2 rounded-lg border border-base-200 bg-base-100 p-3"><a class="group flex cursor-pointer items-center gap-2"${attr("href", item.url)} target="_blank"><img${attr("src", `https://www.google.com/s2/favicons?domain=${item.url}&sz=32`)} alt="favicon" class="h-8 w-8 rounded-full transition-transform duration-500 group-hover:rotate-[360deg]"> <div class="min-w-0 flex-1"><h2 class="text-md overflow-hidden truncate whitespace-nowrap">${escape_html(item.title)}</h2> <p class="overflow-hidden truncate whitespace-nowrap text-sm text-secondary">${escape_html(item.url)}</p></div></a> <div class="tooltip"${attr("data-tip", item.description)}><p class="mt-2 line-clamp-3 text-justify text-sm text-secondary underline decoration-dotted underline-offset-2">${escape_html(item.description)}</p></div></div>`;
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></div></div> `;
  BackTop($$payload);
  $$payload.out += `<!----> <div class="mt-4 rounded-lg"><div class="text-center">© 2025 <a href="https://github.com/wefantasy/collector" target="_blank" aria-label="github" class="link-hover link link-primary">collector</a>, Design by <a href="https://github.com/wefantasy" target="_blank" aria-label="github" class="link-hover link link-primary">wefantasy</a></div></div></div>`;
  pop();
}
export {
  _page as default
};
