import java.io.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class AutoAllEntity {

//    static String className;
 //   static List<String> attrs = new ArrayList<>();

    static Map<String, List<String>> attrs = new HashMap<>();

    public static void main(String[] args) {
        readFile();
  //      System.out.println(className);
//        for (String s : attrs) {
//            System.out.println(s);
//        }
        // 写入文件
        for (Map.Entry<String, List<String>> entry : attrs.entrySet()) {
            writeFile(entry.getKey(), entry.getValue());
        }
    }

    public static void writeFile(String className, List<String> attrs) {
        try {

            String cn = className + ".ts";
            File writeName = new File(cn); // 相对路径，如果没有则要建立一个新的output.txt文件
            writeName.createNewFile(); // 创建新文件,有同名的文件的话直接覆盖
            try (FileWriter writer = new FileWriter(writeName);
                 BufferedWriter out = new BufferedWriter(writer)
            ) {
//                out.write("我会写入文件啦1\r\n"); // \r\n即为换行
//                out.write("我会写入文件啦2\r\n"); // \r\n即为换行
//                for (String s : strs) {
//                    out.write(s + "\r\n");
//                }
                out.write("export class " + className + "{\n");
                for (String s : attrs) {
                    out.write("  " + s + "\n");
                }
                out.write("}");
                out.flush(); // 把缓存区内容压入文件
            }
        } catch (IOException e) {
            System.out.println(className);
            e.printStackTrace();
        }
    }

    public static void readFile() {
        String pathname = "D:\\alice\\alice-server\\game-server\\app\\common\\proto\\proto.js"; // 绝对路径或相对路径都可以，写入文件时演示相对路径,读取以上路径的input.txt文件
        //  String pathname = "C:\\Users\\ZZJ\\IdeaProjects\\input.txt";
        //防止文件建立或读取失败，用catch捕捉错误并打印，也可以throw;
        //不关闭文件会导致资源的泄露，读写文件都同理
        //Java7的try-with-resources可以优雅关闭文件，异常时自动关闭文件；详细解读https://stackoverflow.com/a/12665271
        try (FileReader reader = new FileReader(pathname);
             BufferedReader br = new BufferedReader(reader) // 建立一个对象，它把文件内容转成计算机能读懂的语言
        ) {
            String line;
            String className = "";
            while ((line = br.readLine()) != null) {
                // 一次读入一行数据
                //   System.out.println(line);
                if (line.contains("message")) {
                    //className = line.split("");
                    String end = line.split(" ")[1];
                    String name = end.split("\"")[0];
                    //System.out.println(name);
                    if (name.equals("*")) {
                        continue;
                    }
                    className = name;
                    System.out.println("className" + className);
                    attrs.put(className, new ArrayList<String>());
                } else if (line.contains("optional")) {
                    String attr = transAttr(line);
                    List<String> list = attrs.get(className);
                    list.add(attr);
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    static String transAttr(String s) {
        String[] content = s.split(" ");
        String head = content[2];
        head = head.substring(0, head.length() -2);
        String tail;
        if (content[1].equals("int32") || content[1].equals("uInt32")){
            tail = "number";
        } else {
            tail = content[1];
        }

        StringBuilder sb = new StringBuilder();
        sb.append(head + ":" + tail);
        //    String r = head + ":" + tail;
        String regex = "[^(a-zA-Z)]";
        if (content[0].replaceAll(regex, "").equals("repeated")) {
            // r = r + "[]";
            sb.append("[]");
        }

        //注释
        if (s.contains("//")) {
            String[] strs = s.split("//");
            String str = strs[strs.length - 1];
           // System.out.println(str);
            //   System.out.println("中文");
            sb.append("//" + str);
            // r = r + str;
        }

        //     r = r + ";";
        sb.append(";");
        return sb.toString();
        //  result.add(sb.toString());
    }



}
