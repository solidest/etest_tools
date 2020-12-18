from docxtpl import DocxTemplate
import json
import sys
import os


#生成项目所需要的json文件
def write_file(file_json, pro_json, pro_name):
    try:
        with open(file_json, 'r', encoding='utf8') as f:
            json_data = json.load(f)
        list_set = []
        for item in json_data:
            if pro_name == item["Project"]:
                list_set.append(item)
        if list_set == []:
            raise ValueError("没找到项目名称, 项目JSON文件为空")
        with open(pro_json, 'w', encoding='utf8') as fwrite:
            fwrite.write(json.dumps(list_set))
            print("单个项目写入JSON成功...", pro_json)
    except Exception as e:
        print(e)
 

def test_docx(json_path, case_file_path, pro_file_path):
    with open(json_path, 'r', encoding='utf-8') as f:
        json_data = json.load(f)
    test_case = list()
    for item in json_data:
        test_case.append(item['TestCaseName'])
    new_test_case = list(set(test_case))
    pro = list()
    for pro_name in new_test_case:
        project_list = list()
        dic = dict()
        a = 0
        b = 0
        for item in json_data:
            if item["Result"]:
                a = a + 1
            else:
                b = b + 1
            if item["EndTime"] is None:
                item["EndTime"] = False
            if item["ExceptionMesaage"] is None:
                item["ExceptionMesaage"] = False
            if pro_name == item["TestCaseName"]:
                project_list.append(item)
        x = 0
        y = 0
        for i in project_list:
            if i["Result"]:
                x = x + 1
            else:
                y = y + 1
        dic["x"] = x
        dic['y'] = y
        dic['total_case'] = x + y
        dic['gun'] = str(int(x / (x+y) * 100)) + "%"
        dic['project_name'] = pro_name
        dic['project_list'] = project_list
        dic['len'] = len(project_list)
        dic['ok'] = a
        dic['fail'] = b
        dic['total'] = len(json_data)
        pro.append(dic)
    try:
        if pro == []:
            raise ValueError("测试用例JSON文件为空")
        with open(case_file_path, 'w', encoding='utf8') as fwrite:
            fwrite.write(json.dumps(pro))
        print("生成测试用例写入JSON成功...", case_file_path)
        data = {"data":pro}
        with open(pro_file_path, 'w', encoding='utf8') as f:
            f.write(json.dumps(data))
        print('生成测试项目写入JSON成功...', pro_file_path)
    except Exception as e:
        print(e)
    return pro


def file_output(file):
    with open(file, 'r', encoding='utf-8') as f:
        data = json.load(f)
    write_file(data["hisloader_path"], data["test_data"], data["project_name"])
    test_docx(data["test_data"], data["test_case_json"], data["pro_file_path"])

    
if __name__ == "__main__":
    try:
        file = sys.argv[1]
        file_output(file)
    except Exception as E:
        print(E)
    # write_file("C://Users//Administrator//Desktop//etest//test_data//pro.json", "D://name.json" , "测试项目_39")
    # test_docx("D://name.json", "D://name11.json", "D://name22.json")

